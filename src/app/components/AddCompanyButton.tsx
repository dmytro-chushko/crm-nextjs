'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/app/components/Button';

export default function AddCompanyButton() {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push('/companies/new', { scroll: false })}>
        Add company
      </Button>
    </>
  );
}
