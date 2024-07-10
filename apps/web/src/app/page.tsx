import { Globe } from '~/components/globe';
import { Header } from '~/components/header';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-black to-neutral-900 flex min-h-screen flex-col items-center">
      <Header />
      <Globe />
    </main>
  );
}
