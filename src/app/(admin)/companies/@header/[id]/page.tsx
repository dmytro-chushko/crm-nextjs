import Header from '@/app/components/header';

interface IPageProps {
  params: { id: string };
}

const Page = ({ params }: IPageProps) => {
  return <Header>{`Companies (${params.id})`}</Header>;
};

export default Page;
