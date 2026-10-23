import nodemailer from 'nodemailer';
import { FORM_INBOX_EMAIL } from './contact';

/**
 * Website form inquiries are a "self email": sent FROM the form inbox and
 * delivered TO that same inbox (reply-to is the visitor).
 * Only the App Password comes from the environment (GMAIL_APP_PASSWORD).
 */
const INQUIRY_MAILBOX = FORM_INBOX_EMAIL;

export function isGmailConfigured(): boolean {
  return Boolean(process.env.GMAIL_APP_PASSWORD?.trim());
}

export async function sendInquiryViaGmail(options: {
  subject: string;
  text: string;
  html: string;
  replyTo: string;
}) {
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, '');

  if (!pass) {
    throw new Error('Gmail is not configured (missing GMAIL_APP_PASSWORD).');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: INQUIRY_MAILBOX, pass },
  });

  const to = INQUIRY_MAILBOX;

  const info = await transporter.sendMail({
    from: `Shrim Export Website <${INQUIRY_MAILBOX}>`,
    to,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html,
  });

  return { messageId: info.messageId, to: info.accepted.join(', ') };
}
