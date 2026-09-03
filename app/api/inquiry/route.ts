import { NextResponse } from 'next/server';
import { CONTACT_EMAIL } from '@/app/lib/contact';
import { isGmailConfigured, sendInquiryViaGmail } from '@/app/lib/gmail';
import {
  EXPORT_SUBJECT,
  LINGUISTICS_SUBJECT,
  exportInquiryEmail,
  linguisticsInquiryEmail,
  type ExportInquiry,
  type LinguisticsInquiry,
} from '@/app/lib/inquiry-email';

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  if (!isGmailConfigured()) {
    return NextResponse.json(
      {
        error:
          'Gmail is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local.',
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { type, email, data } = body as {
    type?: string;
    email?: string;
    data?: Record<string, string>;
  };

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
  }

  if (!data || typeof data !== 'object') {
    return NextResponse.json({ error: 'Form data is required.' }, { status: 400 });
  }

  const str = (key: string) => String(data[key] ?? '').trim();

  let subject: string;
  let text: string;
  let html: string;

  if (type === 'linguistics') {
    const inquiry: LinguisticsInquiry = {
      email,
      service: str('service'),
      name: str('name'),
      country: str('country'),
      languageRequirement: str('languageRequirement'),
      learners: str('learners'),
      preferredBatch: str('preferredBatch'),
      notes: str('notes'),
    };
    if (!inquiry.name || !inquiry.service) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    const built = linguisticsInquiryEmail(inquiry);
    subject = LINGUISTICS_SUBJECT;
    text = built.text;
    html = built.html;
  } else if (type === 'export') {
    const inquiry: ExportInquiry = {
      email,
      product: str('product'),
      name: str('name'),
      company: str('company'),
      country: str('country'),
      phone: str('phone'),
      quantity: str('quantity'),
      specification: str('specification'),
      packaging: str('packaging'),
      destinationCountry: str('destinationCountry'),
      destinationPort: str('destinationPort'),
      incoterm: str('incoterm'),
      deliveryDate: str('deliveryDate'),
      notes: str('notes'),
    };
    if (
      !inquiry.name ||
      !inquiry.company ||
      !inquiry.product ||
      !inquiry.quantity ||
      !inquiry.country ||
      !inquiry.phone ||
      !inquiry.destinationCountry
    ) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    const built = exportInquiryEmail(inquiry);
    subject = EXPORT_SUBJECT;
    text = built.text;
    html = built.html;
  } else {
    return NextResponse.json({ error: 'Unknown inquiry type.' }, { status: 400 });
  }

  try {
    const sent = await sendInquiryViaGmail({
      subject,
      text,
      html,
      replyTo: email,
    });
    return NextResponse.json({ ok: true, id: sent.messageId, to: sent.to });
  } catch (err) {
    console.error('Gmail send error:', err);
    const message =
      err instanceof Error ? err.message : 'Failed to send inquiry.';
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
