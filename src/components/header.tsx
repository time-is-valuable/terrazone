'use client';

import Image from 'next/image';
import sara from '~/assets/sara_kaandorp.jpg';
import { useLocalTime } from '~/hooks/use-localtime';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import {
  ChevronDownIcon,
  Cog6ToothIcon,
  ArrowUturnLeftIcon,
} from '@heroicons/react/24/solid';
import { useUserStore } from '~/state/user-store';
import { useRouter } from 'next/navigation';
import { SearchEmployees } from './search-employees';
import { Employee } from '~/appwrite/get-employees';
import { cn } from '~/lib/utils';

export const Header = ({ employees }: { employees: Employee[] }) => {
  const router = useRouter();
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
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(
              'flex items-center justify-betweenbg-neutral-800 justify-between gap-4 min-w-60 w-full py-1.5 px-3 cursor-pointer rounded-lg',
              'text-neutral-400 border-solid border bg-[#1a1a1a] border-[#2D2D31] transition-all focus:ring-neutral-700/30'
            )}
          >
            <Image src={sara} alt={''} className="rounded-full size-10" />
            <div className="flex flex-col w-full text-left">
              <h2 className="text-white text-sm">Sara Kaandorp</h2>
              <h2 className="text-white opacity-50 text-xs">Acme Corp</h2>
            </div>
            <ChevronDownIcon className="size-8 text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full text-sm">
            <DropdownMenuItem
              className="flex items-center gap-2"
              onSelect={() => router.push('/dashboard')}
            >
              <Cog6ToothIcon className="size-4 text-neutral-500" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2">
              <ArrowUturnLeftIcon className="size-4 text-neutral-500" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </header>
  );
};
