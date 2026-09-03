import type { ReactNode } from 'react';
import { whatsAppUrl } from '../lib/contact';

type WhatsAppLinkProps = {
  phone: string;
  children: ReactNode;
  className?: string;
  text?: string;
};

export default function WhatsAppLink({ phone, children, className, text }: WhatsAppLinkProps) {
  return (
    <a
      href={whatsAppUrl(phone, text)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
