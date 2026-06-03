import type { ReactNode } from 'react';
import { whatsAppUrl } from '../lib/contact';

type WhatsAppLinkProps = {
  phone: string;
  children: ReactNode;
  className?: string;
};

export default function WhatsAppLink({ phone, children, className }: WhatsAppLinkProps) {
  return (
    <a
      href={whatsAppUrl(phone)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
