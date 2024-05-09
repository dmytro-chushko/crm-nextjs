'use client';

import PromotionFormModal from '@/app/components/promotion-form-modal';
import { useRouter } from 'next/navigation';

interface IPageProps {
  params: { id: string };
}

const Page = ({ params }: IPageProps) => {
  const router = useRouter();

  return (
    <PromotionFormModal
      companyId={params.id}
      show={true}
      onClose={() => router.back()}
    />
  );
};

export default Page;
