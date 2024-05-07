import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import CompanyTable from '@/app/components/company-table';
import { getCompanies } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';

interface IPageProps {}

const Page = async ({}: IPageProps) => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CompanyTable />
    </HydrationBoundary>
  );
};

export default Page;
