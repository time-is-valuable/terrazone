import { create } from 'zustand';
import { getEmployees, type Employee } from '~/appwrite/get-employees';
import { timezones } from '~/lib/timezones';

type UserState = {
  activeUser: Employee | null;
  setActiveUser: (employee_id: string) => void;
  activeTimezone: { lat: number; long: number };
  setActiveTimezone: () => void;
};

export const useUserStore = create<UserState>((set, get) => ({
  activeUser: null,
  setActiveUser: async (employee_id) => {
    const employees = await getEmployees();
    const user = employees!.find((employee) => employee.id === employee_id);
    set({ activeUser: user! });
  },
  activeTimezone: {
    lat: 34.052234,
    long: -118.243685,
  },
  setActiveTimezone: () => {
    const activeUser = get().activeUser;
    const tz = timezones.find((tz) => tz.value === get().activeUser?.timezone);
    set({ activeTimezone: { lat: tz?.lat ?? 0, long: tz?.long ?? 0 } });
  },
}));
