'use client';

import { useUserStore } from '~/state/user-store';

export const Actions = () => {
  const { activeUser } = useUserStore();

  if (!activeUser) return;

  return (
    <div className="fixed animate-fade-in bottom-10 h-10 bg-neutral-600 shadow-xl shadow-black/30 min-w-[800px] rounded-lg">
      {activeUser.name}
    </div>
  );
};
