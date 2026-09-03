'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ExportsTabRedirect() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('tab') === 'exports') {
      router.replace('/contact');
    }
  }, [router]);

  return null;
}
