import { create } from 'zustand';

type User = {
  name: string | null;
  email: string | null;
} | null;

type UserState = {
  activeUser: User;
  setActiveUser: (job: User) => void;
};

export const useUserStore = create<UserState>((set) => ({
  activeUser: null,
  setActiveUser: (user) => set({ activeUser: user }),
}));
