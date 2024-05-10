'use client';

import { useRouter } from 'next/navigation';

import { Button } from './Button';

interface IAddPromotionButtonProps {
  companyId: string;
}

const AddPromotionButton = ({ companyId }: IAddPromotionButtonProps) => {
  const router = useRouter();

  return (
    <Button
      onClick={() =>
        router.push(`/companies/${companyId}/new-promotion`, { scroll: false })
      }
    >
      Add promotions
    </Button>
  );
};

export default AddPromotionButton;
