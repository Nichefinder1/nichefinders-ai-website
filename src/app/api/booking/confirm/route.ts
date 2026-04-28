import { NextRequest, NextResponse } from 'next/server';
import { isSlotStillAvailable, createCalendarEvent } from '@/lib/google-calendar';
import { Resend } from 'resend';
import { getUserConfirmationEmail, getOwnerNotificationEmail } from '@/lib/booking-emails';

export const maxDuration = 30;

const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = process.env.OWNER_EMAIL ?? 'hello@nichefinders.ai';
const AIRTABLE_PAT = process.env.AIRTABLE_PAT!;
const AIRTABLE_BASE = 'appgNChM14muzXCR2';

async function saveToAirtable(fields: Record<string, unknown>) {
  const res = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE}/Discovery%20Calls`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_PAT}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields }),
    }
  );
  if (!res.ok) throw new Error(`Airtable error: ${res.status}`);
  return res.json();
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { slot, quiz, insight } = await req.json();

    if (!slot?.start || !slot?.end || !quiz?.name || !quiz?.email || !quiz?.businessName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const available = await isSlotStillAvailable(slot.start, slot.end);
    if (!available) {
      return NextResponse.json(
        { error: 'slot_taken', message: 'That slot was just taken. Please choose another time.' },
        { status: 409 }
      );
    }

    const { eventId, htmlLink } = await createCalendarEvent(
      slot.start,
      slot.end,
      quiz.email,
      quiz.name,
      quiz.businessName,
      quiz.helpText ?? ''
    );

    saveToAirtable({
      Name: quiz.name,
      'Business Name': quiz.businessName,
      Email: quiz.email,
      'How We Can Help': quiz.helpText ?? '',
      'Call Time': slot.start,
      'AI Insight': insight ?? '',
      'Google Event ID': eventId,
      Source: 'Book a Call Page',
    }).catch((e: unknown) => console.error('[confirm] Airtable save failed:', e));

    resend.emails.send({
      from: 'NicheFinders AI <hello@nichefinders.ai>',
      to: quiz.email,
      subject: "You're booked — Discovery Call with NicheFinders AI",
      html: getUserConfirmationEmail(quiz.name, quiz.businessName, slot.start, htmlLink),
    }).catch((e: unknown) => console.error('[confirm] User email failed:', e));

    resend.emails.send({
      from: 'Booking System <hello@nichefinders.ai>',
      to: OWNER_EMAIL,
      subject: `New Discovery Call: ${quiz.name} — ${quiz.businessName}`,
      html: getOwnerNotificationEmail(quiz.name, quiz.businessName, quiz.email, quiz.helpText ?? '', slot.start, insight ?? ''),
    }).catch((e: unknown) => console.error('[confirm] Owner email failed:', e));

    return NextResponse.json({ success: true, eventId, calendarLink: htmlLink });
  } catch (err) {
    console.error('[confirm]', err);
    return NextResponse.json({ error: 'Booking failed. Please try again.' }, { status: 500 });
  }
}
