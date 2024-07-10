'use client';

import Image from 'next/image';
import sara from '~/assets/sara_kaandorp.jpg';
import { useLocalTime } from '~/hooks/use-localtime';
import { Dropdown } from '@terrazone/ui';

export const Header = () => {
  const { localTime, timeZone } = useLocalTime();
  return (
    <header className="p-4 flex w-full justify-between">
      <section className="p-4 flex flex-col align-start w-full">
        <h2 className="text-white opacity-50 text-[1.25rem]">
          Your local time ({timeZone})
        </h2>

        <div className="flex">
          <h2 className="text-white text-8xl">{localTime.time}</h2>
          <h3 className="text-white opacity-50 text-[1.25rem] pt-6">
            {localTime.period}
          </h3>
        </div>
      </section>

      <section className="flex flex-col items-end w-72">
        <Dropdown>
          <Dropdown.Trigger className="flex items-center bg-neutral-800">
            <Image src={sara} alt={''} className="rounded-full w-14" />
            <div className="flex flex-col pl-4">
              <h2 className="text-white text-sm">Sara Kaandorp</h2>
              <h2 className="text-white opacity-50 text-xs">Acme Corp</h2>
            </div>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <h3 className="text-white opacity-50 text-lg">Settings</h3>
          </Dropdown.Content>
        </Dropdown>

        {/* <section
          className={`${toggleUserCard ? 'opacity-100' : 'opacity-0'} transition-opacity flex flex-col items-start mt-4 bg-[#1D1D21] h-3/5 w-80 p-4 rounded-md border-[#2D2D31] border-2`}
        >
          <div className="flex items-center justify-between w-[6.5rem] pb-3">
            <i className="opacity-50 text-white fa-solid fa-envelope"></i>

            <h3 className="text-white opacity-50 text-[1.25rem]">Settings</h3>
          </div>

          <div className="flex items-center justify-between w-[6.5rem]">
            <i className="opacity-50 text-white fa-solid fa-location-dot"></i>
            <h3 className="text-white opacity-50 text-[1.25rem]">Sign out</h3>
          </div>
        </section> */}
      </section>
    </header>
  );
};
