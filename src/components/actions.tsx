'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useLocalTime } from '~/hooks/use-localtime';
import { cn } from '~/lib/utils';
import { useUserStore } from '~/state/user-store';

export const Actions = () => {
  const { activeUser } = useUserStore();

  const { timezone, localTime } = useLocalTime(activeUser?.timezone);

  if (!activeUser) return;

  return (
    <div className="fixed animate-fade-in flex gap-8 justify-between items-center border bottom-10 min-h-20 px-8 py-6 bg-[#1a1a1a] border-[#2D2D31] shadow-xl shadow-black/30 max-w-5xl w-full rounded-lg">
      <div>
        <h3 className="text-2xl">{activeUser.employee_name}</h3>
        <h4 className="text-white/50 text-sm">
          {activeUser.title} • <span>{activeUser.location}</span>
        </h4>
      </div>
      <div className="flex gap-16">
        <div className="flex flex-col gap-2">
          <div className="text-white/50 text-sm">Local time ({timezone})</div>
          <div className="flex gap-2 items-center text-2xl text-white">
            {localTime.period.toLowerCase() === 'am' ? (
              <SunIcon strokeWidth={1} className="size-4" />
            ) : (
              <MoonIcon strokeWidth={1} className="size-4" />
            )}
            {localTime.time}
            <span className="text-white/50 text-sm">{localTime.period}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-white/50 text-sm">Work hours ({timezone})</div>

          <span className="text-2xl text-white">{activeUser.workHours}</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-white/50 text-sm">Work days</div>
          <div className="flex gap-2">
            {Object.entries(activeUser.times).map(([day, { isWorking }]) => (
              <div
                key={day}
                className={cn(
                  'uppercase bg-white/30 border border-brand rounded-md font-medium text-sm size-6 flex items-center justify-center',
                  {
                    'opacity-100': isWorking,
                    'opacity-75': !isWorking,
                  }
                )}
              >
                {day.split('')[0]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
