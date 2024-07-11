import dynamic from 'next/dynamic';
import { getEmployees } from '~/appwrite/mock-employees';
import { Actions } from '~/components/actions';
import { Cobe } from '~/components/cobe';
import { Header } from '~/components/header';

export default async function Home() {
  const employees = await getEmployees();
  console.log(employees);
  return (
    <main className="bg-gradient-to-br from-black to-neutral-900 flex min-h-screen flex-col items-center">
      <Header />
      <Cobe />
      <Actions />
    </main>
  );
}
