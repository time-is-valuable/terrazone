import { getEmployees } from '~/appwrite/mock-employees';
import { Actions } from '~/components/actions';
import { Cobe } from '~/components/cobe';
import { Header } from '~/components/header';

export default async function Home() {
  // const user = await getAccount();

  // if (!user) {
  //   redirect('/login');
  // }

  const employees = getEmployees();
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header employees={employees!} />
      <Cobe />
      <Actions />
    </main>
  );
}
