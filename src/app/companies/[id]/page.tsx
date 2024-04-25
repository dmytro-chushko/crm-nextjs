import Header from '@/app/components/header';

interface IPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

const Page = ({ params }: IPageProps) => {
  return (
    <>
      <Header>Company ({params.id})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
};

export default Page;
