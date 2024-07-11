'use client';

import Image from 'next/image';
import sara from '~/assets/sara_kaandorp.jpg';
import { useLocalTime } from '~/hooks/use-localtime';
import { Dropdown } from '@terrazone/ui';
import {
  ChevronDownIcon,
  Cog6ToothIcon,
  ArrowUturnLeftIcon,
} from '@heroicons/react/24/solid';
import { useUserStore } from '~/state/user-store';

export const Header = () => {
  const { setActiveUser } = useUserStore();
  const { localTime, timezone } = useLocalTime();

  return (
    <header className="p-4 flex w-full justify-between">
      <section className="p-4 flex flex-col align-start w-full">
        <h2 className="text-white opacity-50 text-lg">
          Your local time ({timezone})
        </h2>

        <div className="flex">
          <h2 className="text-white text-8xl">{localTime.time}</h2>
          <h3 className="text-white opacity-50 text-lg pt-2">
            {localTime.period}
          </h3>
        </div>
      </section>

      {/* <button
        className="text-white"
        onClick={() =>
          setActiveUser({
            employee_id: 'aaa',
            employee_name: 'Jesse Winton',
            location: 'USA',
            timezone: 'America/New_York',
            title: 'Design Engineer',
            workHours: '9:00am — 5:00pm',
            times: {
              saturday: { isWorking: false, from: '00:00', to: '23:30' },
              sunday: { isWorking: false, from: '00:00', to: '23:30' },
              monday: { isWorking: true, from: '09:00', to: '17:00' },
              tuesday: { isWorking: true, from: '09:00', to: '17:00' },
              wednesday: { isWorking: true, from: '09:00', to: '17:00' },
              thursday: { isWorking: true, from: '09:00', to: '17:00' },
              friday: { isWorking: true, from: '09:00', to: '14:00' },
            },
          })
        }
      >
        Activate
      </button> */}

      <section className="flex flex-col">
        <Dropdown>
          <Dropdown.Trigger className="bg-neutral-800 justify-between gap-4">
            <Image src={sara} alt={''} className="rounded-full size-10" />
            <div className="flex flex-col w-full text-left">
              <h2 className="text-white text-sm">Sara Kaandorp</h2>
              <h2 className="text-white opacity-50 text-xs">Acme Corp</h2>
            </div>
            <ChevronDownIcon className="size-8 text-white" />
          </Dropdown.Trigger>
          <Dropdown.Content className="w-full text-sm">
            <Dropdown.Item className="flex items-center gap-2">
              <Cog6ToothIcon className="size-4 text-neutral-500" />
              Settings
            </Dropdown.Item>
            <Dropdown.Item className="flex items-center gap-2">
              <ArrowUturnLeftIcon className="size-4 text-neutral-500" />
              Sign out
            </Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </section>
    </header>
  );
};
