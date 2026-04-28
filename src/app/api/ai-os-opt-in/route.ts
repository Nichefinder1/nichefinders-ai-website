import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const maxDuration = 15;

const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = process.env.OWNER_EMAIL ?? 'hello@nichefinders.ai';
const AIRTABLE_PAT = process.env.AIRTABLE_PAT!;
const AIRTABLE_BASE = 'appgNChM14muzXCR2';

async function saveToAirtable(name: string, email: string) {
  const res = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE}/AI%20OS%20Leads`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_PAT}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Name: name || '',
          Email: email,
          Source: 'AI OS Partner Program Page',
          'Opted In At': new Date().toISOString(),
        },
      }),
    }
  );
  if (!res.ok) throw new Error(`Airtable error: ${res.status}`);
  return res.json();
}

function getOverviewEmail(name: string): string {
  const greeting = name ? `Hi ${name},` : 'Hi,';
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#001A3A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#001A3A;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Logo / brand bar -->
        <tr><td style="padding-bottom:32px;">
          <p style="margin:0;font-size:13px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#CC5500;">
            NicheFinders AI
          </p>
        </td></tr>

        <!-- Headline -->
        <tr><td style="padding-bottom:24px;">
          <h1 style="margin:0;font-size:32px;font-weight:800;color:#ffffff;line-height:1.2;">
            The AI OS Program Overview
          </h1>
        </td></tr>

        <!-- Body -->
        <tr><td style="color:#b0c4d8;font-size:16px;line-height:1.7;padding-bottom:32px;">
          <p style="margin:0 0 16px;">${greeting}</p>
          <p style="margin:0 0 16px;">
            Here's the full breakdown of the NicheFinders AI OS Partner Program — what it is,
            how it works, and whether it's the right fit for where your business is right now.
          </p>

          <h2 style="color:#ffffff;font-size:20px;margin:32px 0 12px;">What Is the AI OS?</h2>
          <p style="margin:0 0 16px;">
            The AI OS is not a software product. It's an intelligence layer — installed directly
            into how your business operates across 15 interconnected areas. Think of it as the
            brain your business has been missing: one that knows your systems, surfaces what needs
            to change, and drives your automations from the inside out.
          </p>
          <p style="margin:0 0 16px;">
            <strong style="color:#ffffff;">Your SOPs become intelligent. Your processes start improving themselves.</strong>
          </p>

          <h2 style="color:#ffffff;font-size:20px;margin:32px 0 12px;">The Three Phases</h2>
          <p style="margin:0 0 8px;"><strong style="color:#CC5500;">Phase 01 — Architecture</strong><br>
          We audit all 15 business areas and build a custom 12-month AI OS roadmap. You see exactly where you stand before we build anything.</p>
          <p style="margin:0 0 8px;"><strong style="color:#0055A4;">Phase 02 — Installation</strong><br>
          SOPs written, tech stack integrated, data infrastructure built. The brain gets wired into your actual systems.</p>
          <p style="margin:0 0 16px;"><strong style="color:#10B981;">Phase 03 — Operation</strong><br>
          AI deployed across every structured area. Automated workflows replace manual steps. Your SOPs become intelligent.</p>

          <h2 style="color:#ffffff;font-size:20px;margin:32px 0 12px;">How It Works</h2>
          <p style="margin:0 0 16px;">
            Six months. Weekly 90-minute working sessions — directly with the team building your systems,
            not an account manager. No hand-offs. No ticket queues. Real progress every single week.
          </p>

          <h2 style="color:#ffffff;font-size:20px;margin:32px 0 12px;">Who It's For</h2>
          <p style="margin:0 0 8px;">This program is right for you if:</p>
          <ul style="margin:0 0 16px;padding-left:20px;">
            <li style="margin-bottom:6px;">You're running a real operation (not a side project) and you're serious about scaling it</li>
            <li style="margin-bottom:6px;">You've tried AI tools and they haven't stuck — because the structure wasn't there first</li>
            <li style="margin-bottom:6px;">You want someone to actually build alongside you, not hand you a PDF and disappear</li>
          </ul>

          <h2 style="color:#ffffff;font-size:20px;margin:32px 0 12px;">Next Step</h2>
          <p style="margin:0 0 16px;">
            If this sounds like the right fit, book a discovery call. We'll spend 45 minutes mapping
            your operation and give you an honest read on whether the AI OS makes sense for where you
            are right now. No pitch. No pressure.
          </p>
        </td></tr>

        <!-- CTA button -->
        <tr><td style="padding-bottom:40px;">
          <a href="https://nichefinders.ai/book-a-call"
             style="display:inline-block;background:#CC5500;color:#ffffff;font-weight:700;font-size:15px;text-decoration:none;padding:14px 32px;border-radius:6px;letter-spacing:0.02em;">
            Book a Discovery Call →
          </a>
        </td></tr>

        <!-- Footer -->
        <tr><td style="border-top:1px solid rgba(255,255,255,0.08);padding-top:24px;color:#4a6a84;font-size:12px;">
          <p style="margin:0;">NicheFinders AI Agency · nichefinders.ai</p>
          <p style="margin:4px 0 0;">You received this because you requested the AI OS program overview.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { email, name } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
    }

    saveToAirtable(name ?? '', email).catch((e: unknown) =>
      console.error('[ai-os-opt-in] Airtable save failed:', e)
    );

    resend.emails.send({
      from: 'NicheFinders AI <hello@nichefinders.ai>',
      to: email,
      subject: 'Your AI OS Program Overview — NicheFinders AI',
      html: getOverviewEmail(name ?? ''),
    }).catch((e: unknown) => console.error('[ai-os-opt-in] Overview email failed:', e));

    resend.emails.send({
      from: 'Leads <hello@nichefinders.ai>',
      to: OWNER_EMAIL,
      subject: `New AI OS Lead: ${name || 'Unknown'} <${email}>`,
      html: `<p>New opt-in from the AI OS page.</p><p><strong>Name:</strong> ${name || '—'}<br><strong>Email:</strong> ${email}</p>`,
    }).catch((e: unknown) => console.error('[ai-os-opt-in] Owner notify failed:', e));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[ai-os-opt-in]', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
