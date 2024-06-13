'use client';

import CompanyFormModal from '@/app/components/CompanyFormModal';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return <CompanyFormModal show={true} onClose={() => router.back()} />;
};

export default Page;
