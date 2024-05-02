import AddCompanyButton from '@/app/components/AddCompanyButton';
import SearchInput from '@/app/components/search-input';
import Toolbar from '@/app/components/toolbar';

const Page = () => {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
};

export default Page;
