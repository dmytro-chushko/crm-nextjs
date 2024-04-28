'use client';

import Header from '@/app/components/header';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';

interface IPageProps {
  params: { id: string };
}

// export function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }, { id: '3' }];
// }

const Page = ({ params }: IPageProps) => {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return (
    <>
      <Header>Company ({params.id})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
};

export default Page;
