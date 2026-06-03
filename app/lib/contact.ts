export const CONTACT_EMAIL = 'rameshwarijori@shrimexport.com';

export const PHONE_MILIND = '+91 9689971271';
export const PHONE_RAMESHWARI = '+91 9371758355';

export function whatsAppUrl(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}`;
}

export const STAR_PRODUCTS = [
  {
    title: 'G4 Green Chilli',
    image: '/images/chilly.jpeg',
  },
  {
    title: 'Fresh Onion',
    image: '/images/onions.jpeg',
  },
  {
    title: 'Cavendish Banana',
    image: '/images/bananas.jpeg',
  },
] as const;
