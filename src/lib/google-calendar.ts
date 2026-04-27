const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const CALENDAR_API = 'https://www.googleapis.com/calendar/v3';

async function getAccessToken(): Promise<string> {
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: process.env.GOOGLE_CLIENT_ID!,
      client_secret: process.env.GOOGLE_CLIENT_SECRET!,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN!,
    }),
  });
  if (!res.ok) throw new Error(`Token refresh failed: ${res.status}`);
  const data = await res.json();
  return data.access_token as string;
}

export interface BusyPeriod {
  start: string;
  end: string;
}

export async function getFreeBusy(timeMin: Date, timeMax: Date): Promise<BusyPeriod[]> {
  const token = await getAccessToken();
  const calendarId = process.env.GOOGLE_CALENDAR_ID!;

  const res = await fetch(`${CALENDAR_API}/freeBusy`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      timeMin: timeMin.toISOString(),
      timeMax: timeMax.toISOString(),
      items: [{ id: calendarId }],
    }),
  });

  if (!res.ok) throw new Error(`FreeBusy query failed: ${res.status}`);
  const data = await res.json();
  return (data.calendars?.[calendarId]?.busy ?? []) as BusyPeriod[];
}

export async function createCalendarEvent(
  startIso: string,
  endIso: string,
  attendeeEmail: string,
  attendeeName: string,
  businessName: string,
  helpText: string
): Promise<{ eventId: string; htmlLink: string }> {
  const token = await getAccessToken();
  const calendarId = process.env.GOOGLE_CALENDAR_ID!;

  const event = {
    summary: `Discovery Call — ${attendeeName} (${businessName})`,
    description: `How NicheFinders AI can help:\n${helpText}`,
    start: { dateTime: startIso, timeZone: 'America/New_York' },
    end: { dateTime: endIso, timeZone: 'America/New_York' },
    attendees: [{ email: attendeeEmail, displayName: attendeeName }],
    conferencing: {
      createRequest: { requestId: `${Date.now()}`, conferenceSolutionKey: { type: 'hangoutsMeet' } },
    },
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 1440 },
        { method: 'popup', minutes: 30 },
      ],
    },
  };

  const res = await fetch(
    `${CALENDAR_API}/calendars/${encodeURIComponent(calendarId)}/events?sendUpdates=all&conferenceDataVersion=1`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Event creation failed: ${res.status} ${err}`);
  }

  const created = await res.json();
  return { eventId: created.id, htmlLink: created.htmlLink };
}

export async function isSlotStillAvailable(startIso: string, endIso: string): Promise<boolean> {
  const busy = await getFreeBusy(new Date(startIso), new Date(endIso));
  return busy.length === 0;
}
