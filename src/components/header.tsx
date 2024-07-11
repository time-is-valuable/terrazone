'use client';

import Image from 'next/image';
import sara from '~/assets/sara_kaandorp.jpg';
import { useLocalTime } from '~/hooks/use-localtime';
import { Dropdown } from '~/components/dropdown';
import {
  ChevronDownIcon,
  Cog6ToothIcon,
  ArrowUturnLeftIcon,
} from '@heroicons/react/24/solid';
import { useUserStore } from '~/state/user-store';
import { useRouter } from 'next/navigation';
import { SearchEmployees } from './search-employees';
import { Employee } from '~/appwrite/mock-employees';

export const Header = ({ employees }: { employees: Employee[] }) => {
  const router = useRouter();
  const { setActiveUser } = useUserStore();
  const { localTime, timezone } = useLocalTime();

  return (
    <header className="py-6 px-8 flex w-full justify-between items-start">
      <section className="flex flex-col align-start">
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

      <SearchEmployees employees={employees} />

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
            <Dropdown.Item
              className="flex items-center gap-2"
              onSelect={() => router.push('/dashboard')}
            >
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
