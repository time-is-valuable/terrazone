'use client';

import Image from 'next/image';
import sara from '~/assets/sara_kaandorp.jpg';
import { useLocalTime } from '~/hooks/use-localtime';
import { Dropdown } from '@terrazone/ui';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export const Header = () => {
  const { localTime, timeZone } = useLocalTime();
  return (
    <header className="p-4 flex w-full justify-between">
      <section className="p-4 flex flex-col align-start w-full">
        <h2 className="text-white opacity-50 text-lg">
          Your local time ({timeZone})
        </h2>

        <div className="flex">
          <h2 className="text-white text-8xl">{localTime.time}</h2>
          <h3 className="text-white opacity-50 text-lg pt-6">
            {localTime.period}
          </h3>
        </div>
      </section>

      <section className="flex flex-col">
        <Dropdown>
          <Dropdown.Trigger className="bg-neutral-800 -wfu justify-between gap-4">
            <Image src={sara} alt={''} className="rounded-full size-10" />
            <div className="flex flex-col w-full text-left">
              <h2 className="text-white text-sm">Sara Kaandorp</h2>
              <h2 className="text-white opacity-50 text-xs">Acme Corp</h2>
            </div>
            <ChevronDownIcon className="size-8 text-white" />
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item className="flex items-center justify-between">
              Sign out
            </Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </section>
    </header>
  );
};
