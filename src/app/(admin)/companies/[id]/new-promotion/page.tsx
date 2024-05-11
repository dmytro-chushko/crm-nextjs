'use client';

import PromotionForm from '@/app/components/promotion-form';

interface IPageProps {
  params: { id: string };
}

const Page = ({ params }: IPageProps) => {
  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={params.id} />
    </div>
  );
};

export default Page;
