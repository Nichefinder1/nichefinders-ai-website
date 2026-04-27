import { NextRequest, NextResponse } from 'next/server';
import { generateBookingInsight } from '@/lib/booking-insight';

export const maxDuration = 30;

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { name, businessName, helpText } = await req.json();

    if (!name || !businessName || !helpText) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const insight = await generateBookingInsight(
      String(name).trim(),
      String(businessName).trim(),
      String(helpText).trim()
    );

    return NextResponse.json({ insight });
  } catch (err) {
    console.error('[insight]', err);
    return NextResponse.json(
      { insight: "Based on what you've shared, there are clear AI automation opportunities ahead. Looking forward to the conversation." },
      { status: 200 }
    );
  }
}
