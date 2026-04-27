function formatSlotDisplay(startIso: string): string {
  return new Date(startIso).toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/New_York',
    timeZoneName: 'short',
  });
}

export function getUserConfirmationEmail(
  name: string,
  businessName: string,
  startIso: string,
  calendarLink: string
): string {
  const slot = formatSlotDisplay(startIso);
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#001228;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#001228;padding:48px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#002855;border:1px solid rgba(255,255,255,0.1);border-radius:8px;overflow:hidden;max-width:100%;">
        <tr><td style="background:#CC5500;padding:4px 0;"></td></tr>
        <tr><td style="padding:48px 40px;">
          <p style="margin:0 0 40px;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#CC5500;font-weight:600;">
            NicheFinders AI
          </p>
          <h1 style="margin:0 0 8px;font-size:32px;font-weight:700;color:#E8EDF2;line-height:1.1;">
            You're booked.
          </h1>
          <p style="margin:0 0 32px;font-size:16px;color:rgba(255,255,255,0.6);line-height:1.6;">
            Looking forward to it, ${name}.
          </p>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#001228;border:1px solid rgba(255,255,255,0.1);border-left:3px solid #CC5500;border-radius:4px;margin-bottom:32px;">
            <tr><td style="padding:24px 28px;">
              <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.4);">Your Discovery Call</p>
              <p style="margin:0;font-size:18px;font-weight:600;color:#E8EDF2;">${slot}</p>
              <p style="margin:4px 0 0;font-size:13px;color:rgba(255,255,255,0.4);">30 minutes · AI Automation Discovery Call</p>
            </td></tr>
          </table>
          <p style="margin:0 0 8px;font-size:14px;color:rgba(255,255,255,0.6);line-height:1.7;">
            A calendar invite has been sent with all the details. No prep required — just show up ready to talk about <strong style="color:#E8EDF2;">${businessName}</strong>.
          </p>
          <p style="margin:0 0 32px;font-size:14px;color:rgba(255,255,255,0.6);line-height:1.7;">
            Need to reschedule? Reply to this email directly.
          </p>
          <table cellpadding="0" cellspacing="0">
            <tr><td style="background:#CC5500;border-radius:4px;">
              <a href="${calendarLink}" style="display:inline-block;padding:14px 28px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:0.05em;">
                Add to Google Calendar →
              </a>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:24px 40px;border-top:1px solid rgba(255,255,255,0.1);">
          <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.25);">
            nichefinders.ai · Intelligent Automation Made Simple
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export function getOwnerNotificationEmail(
  name: string,
  businessName: string,
  email: string,
  helpText: string,
  startIso: string,
  insight: string
): string {
  const slot = formatSlotDisplay(startIso);
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#001228;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#001228;padding:48px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#002855;border:1px solid rgba(255,255,255,0.1);border-radius:8px;overflow:hidden;max-width:100%;">
        <tr><td style="background:#CC5500;padding:4px 0;"></td></tr>
        <tr><td style="padding:40px;">
          <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#CC5500;">New Booking</p>
          <h2 style="margin:0 0 32px;font-size:24px;font-weight:700;color:#E8EDF2;">${name} — ${slot}</h2>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr><td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.1);">
              <span style="font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.1em;">Name</span><br>
              <span style="font-size:15px;color:#E8EDF2;">${name}</span>
            </td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.1);">
              <span style="font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.1em;">Business</span><br>
              <span style="font-size:15px;color:#E8EDF2;">${businessName}</span>
            </td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.1);">
              <span style="font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.1em;">Email</span><br>
              <a href="mailto:${email}" style="font-size:15px;color:#CC5500;text-decoration:none;">${email}</a>
            </td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.1);">
              <span style="font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.1em;">How you can help</span><br>
              <span style="font-size:15px;color:#E8EDF2;">${helpText}</span>
            </td></tr>
            <tr><td style="padding:8px 0;">
              <span style="font-size:11px;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.1em;">AI Insight Generated</span><br>
              <span style="font-size:14px;color:rgba(255,255,255,0.6);font-style:italic;">${insight}</span>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
