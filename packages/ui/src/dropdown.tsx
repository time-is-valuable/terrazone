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
          'flex items-center justify-between min-w-60 w-full py-1.5 px-3 cursor-pointer rounded-lg',
          'text-neutral-400 border-brand border-solid border bg-brand hover:bg-brand/90 transition-all focus:ring-neutral-700/30',
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
          'z-[9999] mt-1 w-full min-w-60 space-y-1 overflow-hidden rounded-lg border p-1 text-xs shadow-lg shadow-black/10 backdrop-blur-sm radix-state-closed:animate-fade-out',
          'border-[#2D2D31] bg-neutral-800/70 text-neutral-400',
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
          'flex w-full cursor-pointer items-center gap-2 rounded p-2 outline-none',
          'focus:bg-neutral-700/20 focus:text-white radix-highlighted:bg-neutral-700/20 radix-highlighted:text-white',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

DropdownItem.displayName = 'DropdownItem';

const DropdownSeparator = forwardRef(
  (
    { className, ...props }: DropdownPrimitive.DropdownMenuSeparatorProps,
    ref: Ref<HTMLHRElement>
  ) => {
    return (
      <DropdownPrimitive.Separator
        className={classNames('my-1 h-px w-full', 'bg-neutral-700', className)}
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
Dropdown.Separator = DropdownSeparator;
