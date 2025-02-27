import { redirect } from 'next/navigation';
import { GetAccount } from '~/appwrite/authAPIFunc';
import { getEmployees } from '~/appwrite/get-employees';
import { Actions } from '~/components/actions';
import { Cobe } from '~/components/cobe';
import { Header } from '~/components/header';

export default async function Home() {
  const employees = await getEmployees();

  if (!employees) return null;

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header employees={employees} />
      <Cobe employees={employees} />
      <Actions />
    </main>
  );
}
