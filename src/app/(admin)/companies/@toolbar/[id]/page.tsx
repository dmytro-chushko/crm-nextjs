import AddPromotionButton from '@/app/components/add-promotion-button';
import SearchInput from '@/app/components/search-input';
import Toolbar from '@/app/components/toolbar';

interface IPageProps {
  params: { id: string };
}

const Page = ({ params }: IPageProps) => {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
};

export default Page;
