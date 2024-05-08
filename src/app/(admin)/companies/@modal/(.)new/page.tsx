'use client';

import CompanyForm from '@/app/components/CompanyForm';
import CompanyFormModal from '@/app/components/CompanyFormModal';
import Modal from '@/app/components/Modal';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return <CompanyFormModal show={true} onClose={() => router.back()} />;
};

export default Page;
