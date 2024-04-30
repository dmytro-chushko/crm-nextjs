import DashboardCard from '@/app/components/dashboard-card';
import { getSummaryCountries } from '@/lib/api';
import clsx from 'clsx';

const Page = async () => {
  const data = await getSummaryCountries();

  return (
    <DashboardCard label="Countries of companies">
      <div className="flex items-end pb-5 px-5 gap-2">
        <div>
          {data.map(({ countryId, countryTitle, count }) => (
            <p
              key={countryId}
              className={clsx(
                'text-sm tet-gray-900 font-medium',
                'before:inline-block before:w-2 before:h-2 before:roundded-full before:align-middle before:mr-2 before:bg-purple-200',
              )}
            >
              {`${countryTitle}`}
            </p>
          ))}
        </div>
      </div>
    </DashboardCard>
  );
};

export default Page;
