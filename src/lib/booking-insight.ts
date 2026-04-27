import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are NicheFinders AI's assistant. NicheFinders AI is a Florida-based AI automation agency that helps businesses implement AI systems for lead generation, customer retention, and operational efficiency. A potential client just submitted a discovery call request. Based on their description, provide ONE specific, personalized insight (2-3 sentences) that demonstrates immediate value. Be direct, reference their business by name, and speak to their exact situation. Avoid generic advice. End with something that creates genuine anticipation for the call. Keep it under 60 words.`;

const FALLBACK = (name: string, businessName: string) =>
  `${name}, what you've shared about ${businessName} tells me there's a clear AI automation path forward — and it's more achievable than you probably think. I'm looking forward to mapping it out with you.`;

export async function generateBookingInsight(
  name: string,
  businessName: string,
  helpText: string
): Promise<string> {
  try {
    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 150,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `Name: ${name}\nBusiness: ${businessName}\nHow NicheFinders AI can help: ${helpText}`,
        },
      ],
    });

    const block = message.content[0];
    if (block.type === 'text' && block.text.trim()) return block.text.trim();
    return FALLBACK(name, businessName);
  } catch {
    return FALLBACK(name, businessName);
  }
}
