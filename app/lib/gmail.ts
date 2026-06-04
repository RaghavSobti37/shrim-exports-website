import nodemailer from 'nodemailer';
import { CONTACT_EMAIL } from './contact';

function gmailUser(): string {
  return process.env.GMAIL_USER?.trim() || CONTACT_EMAIL;
}

function inquiryRecipient(): string {
  return process.env.INQUIRY_TO?.trim() || gmailUser();
}

export function isGmailConfigured(): boolean {
  return Boolean(process.env.GMAIL_APP_PASSWORD?.trim() && gmailUser());
}

export async function sendInquiryViaGmail(options: {
  subject: string;
  text: string;
  html: string;
  replyTo: string;
}) {
  const user = gmailUser();
  const pass = process.env.GMAIL_APP_PASSWORD?.trim();

  if (!pass) {
    throw new Error('Gmail is not configured (missing GMAIL_APP_PASSWORD).');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  const to = inquiryRecipient();

  const info = await transporter.sendMail({
    from: `Shrim Export <${user}>`,
    to,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });

  return { messageId: info.messageId, to };
}
