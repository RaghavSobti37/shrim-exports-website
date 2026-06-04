import { CONTACT_EMAIL } from './contact';
import {
  TEST_EMAIL_PERSONAL,
  TEST_FULL_NAME,
  TEST_PHONE_DISPLAY,
} from './test-values';

export type LinguisticsInquiry = {
  email: string;
  service: string;
  name: string;
  country: string;
  languageRequirement: string;
  learners: string;
  preferredBatch: string;
  notes: string;
};

export type ExportInquiry = {
  email: string;
  product: string;
  name: string;
  company: string;
  country: string;
  productRequirement: string;
  quantity: string;
  packaging: string;
  notes: string;
};

export const LINGUISTICS_SUBJECT = 'Linguistics Inquiry - Shrim Export';
export const EXPORT_SUBJECT = 'Export Quote Inquiry - Shrim Export';

export function linguisticsInquiryLines(data: LinguisticsInquiry): string[] {
  return [
    `Email: ${data.email}`,
    `Service: ${data.service}`,
    `Name: ${data.name}`,
    `Country: ${data.country}`,
    `Language Requirement: ${data.languageRequirement}`,
    `Learners: ${data.learners}`,
    `Preferred Batch: ${data.preferredBatch}`,
    `Notes: ${data.notes}`,
  ];
}

export function exportInquiryLines(data: ExportInquiry): string[] {
  return [
    `Email: ${data.email}`,
    `Product: ${data.product}`,
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Country: ${data.country}`,
    `Product Requirement: ${data.productRequirement}`,
    `Quantity: ${data.quantity}`,
    `Packaging: ${data.packaging}`,
    `Notes: ${data.notes}`,
  ];
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function inquiryHtml(title: string, lines: string[], footerNote: string): string {
  const rows = lines
    .map((line) => {
      const colon = line.indexOf(':');
      const label = colon === -1 ? line : line.slice(0, colon);
      const value = colon === -1 ? '' : line.slice(colon + 1).trim();
      return `<tr bgcolor="#ffffff"><td bgcolor="#ffffff" style="padding:8px 12px;font-weight:700;color:#1a5c3a !important;vertical-align:top;width:180px;">${escapeHtml(label)}</td><td bgcolor="#ffffff" style="padding:8px 12px;color:#374151 !important;">${escapeHtml(value)}</td></tr>`;
    })
    .join('');

  return `<!DOCTYPE html>
<html>
<head><meta name="color-scheme" content="light only"><meta name="supported-color-schemes" content="light"></head>
<body bgcolor="#f9fafb" style="margin:0;padding:24px;font-family:Arial,Helvetica,sans-serif;background-color:#f9fafb !important;color:#111827 !important;">
  <div style="max-width:560px;margin:0 auto;background-color:#ffffff !important;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
    <div style="background-color:#1a5c3a !important;padding:20px 24px;">
      <p style="margin:0;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#d4af37 !important;font-weight:700;">Shrim Export</p>
      <h1 style="margin:8px 0 0;font-size:20px;color:#ffffff !important;">${escapeHtml(title)}</h1>
    </div>
    <div bgcolor="#ffffff" style="padding:8px 8px 16px;background-color:#ffffff !important;">
      <table bgcolor="#ffffff" style="width:100%;border-collapse:collapse;font-size:14px;background-color:#ffffff !important;">${rows}</table>
    </div>
    <div style="padding:16px 24px;background-color:#f3f4f6 !important;border-top:1px solid #e5e7eb;font-size:12px;color:#6b7280 !important;">
      ${escapeHtml(footerNote)}
    </div>
  </div>
</body>
</html>`;
}

export function buildInquiryMailtoUrl(
  recipient: string,
  subject: string,
  lines: string[]
): string {
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}

const INQUIRY_FOOTER = `New website inquiry · Reply to the customer directly. Business inbox: ${CONTACT_EMAIL}`;

export function linguisticsInquiryEmail(data: LinguisticsInquiry) {
  const lines = linguisticsInquiryLines(data);
  return {
    subject: LINGUISTICS_SUBJECT,
    text: lines.join('\n'),
    html: inquiryHtml('Linguistics inquiry', lines, INQUIRY_FOOTER),
  };
}

export function exportInquiryEmail(data: ExportInquiry) {
  const lines = exportInquiryLines(data);
  return {
    subject: EXPORT_SUBJECT,
    text: lines.join('\n'),
    html: inquiryHtml('Export quote inquiry', lines, INQUIRY_FOOTER),
  };
}

/** Sample payloads for preview / test sends (test-values skill) */
export const SAMPLE_LINGUISTICS: LinguisticsInquiry = {
  email: TEST_EMAIL_PERSONAL,
  service: 'Marathi Tutoring',
  name: TEST_FULL_NAME,
  country: 'India',
  languageRequirement: 'Conversational & Cultural',
  learners: '1',
  preferredBatch: 'Weekends (Morning)',
  notes: `Test inquiry. Contact: ${TEST_EMAIL_PERSONAL}, ${TEST_PHONE_DISPLAY}. Goal: reading Devanagari and basic conversation.`,
};

export const SAMPLE_EXPORT: ExportInquiry = {
  email: TEST_EMAIL_PERSONAL,
  product: 'Fresh Onion (Red/White)',
  name: TEST_FULL_NAME,
  company: 'Sobti Trading (test preview)',
  country: 'India',
  productRequirement: 'Fresh / Raw Product',
  quantity: '15 Metric Tons / 1x40ft container',
  packaging: 'PP Mesh Bags (25kg / 50kg)',
  notes: `Test inquiry. Contact: ${TEST_EMAIL_PERSONAL}, ${TEST_PHONE_DISPLAY}. Please include CIF quote and phytosanitary documentation timeline.`,
};

/** mailto preview — same recipient + subject as live form submit */
export function linguisticsPreviewMailto(recipient: string = CONTACT_EMAIL) {
  const { subject, text } = linguisticsInquiryEmail(SAMPLE_LINGUISTICS);
  return buildInquiryMailtoUrl(recipient, subject, text.split('\n'));
}

export function exportPreviewMailto(recipient: string = CONTACT_EMAIL) {
  const { subject, text } = exportInquiryEmail(SAMPLE_EXPORT);
  return buildInquiryMailtoUrl(recipient, subject, text.split('\n'));
}
