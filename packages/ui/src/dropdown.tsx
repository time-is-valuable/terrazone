'use client';

import { forwardRef, type Ref } from 'react';
import { classNames } from '@terrazone/utils';
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';

export const Dropdown = ({
  children,
  ...props
}: DropdownPrimitive.DropdownMenuProps) => {
  return <DropdownPrimitive.Root {...props}>{children}</DropdownPrimitive.Root>;
};

const DropdownTrigger = forwardRef(
  (
    { className, ...props }: DropdownPrimitive.DropdownMenuTriggerProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <DropdownPrimitive.Trigger
        className={classNames(
          'flex cursor-pointer items-center gap-2 rounded-3xl px-3 py-2 text-xs font-light tracking-wide outline-none transition-colors focus:ring-2',
          'text-neutral-700 hover:bg-neutral-200/70 focus:ring-neutral-200/70',
          'dark:text-neutral-400 hover:dark:bg-neutral-800/70 focus:dark:ring-neutral-700/30',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

DropdownTrigger.displayName = 'DropdownTrigger';

const DropdownContent = forwardRef(
  (
    { className, ...props }: DropdownPrimitive.DropdownMenuContentProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <DropdownPrimitive.Content
        className={classNames(
          'z-[9999] mt-1 w-40 space-y-1 overflow-hidden rounded-lg border p-1 text-xs shadow-lg shadow-black/10 backdrop-blur-sm radix-state-closed:animate-fade-out',
          'border-neutral-200/70 bg-neutral-100/70 text-neutral-700',
          'dark:border-neutral-700/30 dark:bg-neutral-800/70 dark:text-neutral-400',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

DropdownContent.displayName = 'DropdownContent';

const DropdownItem = forwardRef(
  (
    { className, ...props }: DropdownPrimitive.DropdownMenuItemProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <DropdownPrimitive.Item
        className={classNames(
          'flex w-full cursor-pointer items-center justify-between gap-2 rounded p-2 outline-none',
          'focus:bg-neutral-200/70 focus:text-neutral-700 radix-highlighted:bg-neutral-200/70 radix-highlighted:text-neutral-700',
          'focus:dark:bg-neutral-700/20 focus:dark:text-white radix-highlighted:dark:bg-neutral-700/20 radix-highlighted:dark:text-white',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

DropdownItem.displayName = 'DropdownItem';

const DropdownSub = ({ ...props }: DropdownPrimitive.DropdownMenuSubProps) => {
  return <DropdownPrimitive.Sub {...props} />;
};

DropdownSub.displayName = 'DropdownSub';

const DropdownSubTrigger = forwardRef(
  (
    { className, ...props }: DropdownPrimitive.DropdownMenuSubTriggerProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <DropdownPrimitive.SubTrigger
        className={classNames(
          'flex w-full cursor-pointer items-center justify-between gap-2 rounded p-2 outline-none',
          'focus:bg-neutral-200/70 focus:text-neutral-700 radix-highlighted:bg-neutral-200/70 radix-highlighted:text-neutral-700',
          'focus:dark:bg-neutral-700/20 focus:dark:text-white radix-highlighted:dark:bg-neutral-700/20 radix-highlighted:dark:text-white',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

DropdownSubTrigger.displayName = 'DropdownSubTrigger';

const DropdownSubContent = forwardRef(
  (
    { className, ...props }: DropdownPrimitive.DropdownMenuSubContentProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <DropdownPrimitive.SubContent
        className={classNames(
          'mt-1 w-40 space-y-1 overflow-hidden rounded-lg border p-1 text-xs shadow-lg shadow-black/10 backdrop-blur-sm radix-state-closed:animate-fade-out',
          'border-neutral-200/70 bg-neutral-100/70 text-neutral-700',
          'dark:border-neutral-700/30 dark:bg-neutral-800/70 dark:text-neutral-400',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

DropdownSubContent.displayName = 'DropdownSubContent';

const DropdownSeparator = forwardRef(
  (
    { className, ...props }: DropdownPrimitive.DropdownMenuSeparatorProps,
    ref: Ref<HTMLHRElement>
  ) => {
    return (
      <DropdownPrimitive.Separator
        className={classNames(
          'my-1 h-px w-full',
          'bg-neutral-300',
          'dark:bg-neutral-700',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

DropdownSeparator.displayName = 'DropdownSeparator';

Dropdown.Trigger = DropdownTrigger;
Dropdown.Content = DropdownContent;
Dropdown.Item = DropdownItem;
Dropdown.Sub = DropdownSub;
Dropdown.SubTrigger = DropdownSubTrigger;
Dropdown.SubContent = DropdownSubContent;
Dropdown.Separator = DropdownSeparator;
