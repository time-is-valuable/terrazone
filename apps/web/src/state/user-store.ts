import { create } from 'zustand';
import { type User } from '~/appwrite/mock-employees';

type UserState = {
  activeUser: User | null;
  setActiveUser: (job: User) => void;
};

export const useUserStore = create<UserState>((set) => ({
  activeUser: null,
  setActiveUser: (user) => set({ activeUser: user }),
}));
