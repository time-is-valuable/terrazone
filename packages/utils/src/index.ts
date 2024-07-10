import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const classNames = (...classNames: ClassValue[]) => {
  return twMerge(clsx(classNames));
};
