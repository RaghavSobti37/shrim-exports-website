/**
 * Sends sample inquiries via POST /api/inquiry (Gmail SMTP).
 * Dev server must be running: npm run dev
 *
 * Requires .env.local: GMAIL_USER, GMAIL_APP_PASSWORD
 */

const API_BASE = process.env.API_BASE || 'http://localhost:3000';
const TEST_EMAIL = 'raghavsobti37@gmail.com';
const TEST_NAME = 'Raghav Raj Sobti';
const TEST_PHONE = '+91 8591499393';

const samples = [
  {
    type: 'linguistics',
    email: TEST_EMAIL,
    data: {
      email: TEST_EMAIL,
      service: 'Marathi Tutoring',
      name: TEST_NAME,
      country: 'India',
      languageRequirement: 'Conversational & Cultural',
      learners: '1',
      preferredBatch: 'Weekends (Morning)',
      notes: `Test inquiry. Phone ${TEST_PHONE}.`,
    },
  },
  {
    type: 'export',
    email: TEST_EMAIL,
    data: {
      email: TEST_EMAIL,
      product: 'Fresh Onion (Red/White)',
      name: TEST_NAME,
      company: 'Sobti Trading (test preview)',
      country: 'India',
      productRequirement: 'Fresh / Raw Product',
      quantity: '15 Metric Tons / 1x40ft container',
      packaging: 'PP Mesh Bags (25kg / 50kg)',
      notes: `Test inquiry. Phone ${TEST_PHONE}.`,
    },
  },
];

for (const sample of samples) {
  const res = await fetch(`${API_BASE}/api/inquiry`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sample),
  });
  const json = await res.json();
  if (!res.ok) {
    console.error(`Failed (${sample.type}):`, json.error || res.status);
    process.exit(1);
  }
  console.log(`Sent ${sample.type} → ${json.to} (id: ${json.id})`);
}

console.log('\nDone. Check the Gmail inbox (GMAIL_USER / INQUIRY_TO).');
