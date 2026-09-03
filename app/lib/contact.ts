export const CONTACT_EMAIL = 'rameshwarijori@shrimexport.com';

export const PHONE_MILIND = '+91 9689971271';
export const PHONE_RAMESHWARI = '+91 9371758355';

export function whatsAppUrl(phone: string, text?: string): string {
  const digits = phone.replace(/\D/g, '');
  const base = `https://wa.me/${digits}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const WHATSAPP_EXPORT_TEXT =
  'Hello, I am interested in sourcing agricultural products from India. Product · Quantity · Destination · Specification.';

export const OFFICE_ADDRESS =
  'Flat No. 101, Kotkar Heights, Joshi Nagar, Kopargaon, Dist: Ahilyanagar, Maharashtra, India.';
