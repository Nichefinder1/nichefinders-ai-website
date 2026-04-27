import { NextRequest, NextResponse } from 'next/server';
import { isSlotStillAvailable, createCalendarEvent } from '@/lib/google-calendar';
import { Resend } from 'resend';
import { getUserConfirmationEmail, getOwnerNotificationEmail } from '@/lib/booking-emails';

export const maxDuration = 30;

const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = process.env.OWNER_EMAIL ?? 'hello@nichefinders.ai';

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
