import { Globe } from '~/components/globe';

export default function Home() {

  const localeTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between">
      <header className="p-4 flex w-full justify-between">
      <section className="p-4 flex flex-col align-start w-full">
        <h2 className="text-white opacity-50 text-[1.25rem]">Your local time ({timeZone})</h2>
        <h2 className="text-white text-[5.5rem]">{localeTime.replace("AM","").replace("PM","")}</h2>
      </section>

        <h1 className="opacity-50 text-white text-xl">Appwrite</h1>
      </header>
      <Globe />
    </main>
  );
}
