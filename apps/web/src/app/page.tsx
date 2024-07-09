import { Globe } from '~/components/globe';
import Image from 'next/image';
import sara from '../../../../assets/sara_kaandorp.jpg';

export default function Home() {

  const localeTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const local = localeTime.split(' ')[1];
  const time = localeTime.replace("AM","").replace("PM","");

  return (
    <main className="bg-black flex min-h-screen flex-col items-center">
      <header className="p-4 flex w-full justify-between">
      <section className="p-4 flex flex-col align-start w-full">
        <h2 className="text-white opacity-50 text-[1.25rem]">Your local time ({timeZone})</h2>

          <div className="flex">
            <h2 className="text-white text-[5.5rem]">{time}</h2>
            <h3 className="text-white opacity-50 text-[1.25rem] pt-6">{local}</h3>
          </div>

      </section>

        <section className="cursor-pointer flex items-center bg-[#1D1D21] h-3/5 w-96 px-2 py-4 rounded-md border-[#2D2D31] border-2">
          <Image src={sara} alt={""} className = "rounded-full w-14"/>
          <div className="flex flex-col pl-4">
            <h2 className="text-white">Sara Kaandorp</h2>
            <h2 className="text-white opacity-50">Acme Corp</h2>
          </div>
          <i className = "fa-solid fa-angle-down text-white ml-[3rem] text-[1.3rem]"></i>
        </section>
      </header>
      <Globe />
    </main>
  );
}
