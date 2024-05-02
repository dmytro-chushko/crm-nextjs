import CompanyRow from '@/app/components/company-row';
import CompanyTable from '@/app/components/company-table';
import { Status } from '@/app/components/status-label';

interface IPageProps {}

const Page = ({}: IPageProps) => {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category="Products"
        company="Costco"
        status={Status.Pending}
        promotion={true}
        country="USA"
        joinedDate="02.19.2023"
      />
    </CompanyTable>
  );
};

export default Page;
