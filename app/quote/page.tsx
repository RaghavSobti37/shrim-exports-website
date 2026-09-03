import { redirect } from 'next/navigation';

type SearchParams = Promise<{ product?: string | string[] }>;

export default async function Quote({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const raw = params.product;
  const product = Array.isArray(raw) ? raw[0] : raw;
  const qs = product ? `?product=${encodeURIComponent(product)}` : '';
  redirect(`/contact${qs}`);
}
