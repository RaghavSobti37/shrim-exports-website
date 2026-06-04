export type InquiryType = 'linguistics' | 'export';

export async function submitInquiry(
  type: InquiryType,
  email: string,
  data: Record<string, string>
): Promise<{ ok: true; to: string }> {
  const res = await fetch('/api/inquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, email, data }),
  });

  const json = (await res.json()) as { ok?: boolean; to?: string; error?: string };

  if (!res.ok) {
    throw new Error(json.error || 'Could not send your inquiry. Please try again.');
  }

  return { ok: true, to: json.to ?? '' };
}
