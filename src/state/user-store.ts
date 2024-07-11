import { create } from 'zustand';
import { type Employee } from '~/appwrite/mock-employees';
import { getEmployees } from '~/appwrite/mock-employees';
import { timezones } from '~/lib/timezones';

const employees = getEmployees();

const employeeTimezones = employees!.reduce((acc, employee) => {
  acc.push(employee.timezone);
  return acc;
}, [] as string[]);

type UserState = {
  activeUser: Employee | null;
  setActiveUser: (employee_id: string) => void;
  activeTimezone: { lat: number; long: number };
  setActiveTimezone: () => void;
  employeeTimezones: number[][];
};

export const useUserStore = create<UserState>((set, get) => ({
  activeUser: null,
  setActiveUser: (employee_id) => {
    const user = employees!.find(
      (employee) => employee.employee_id === employee_id
    );
    set({ activeUser: user });
  },
  activeTimezone: {
    lat: 34.052234,
    long: -118.243685,
  },
  setActiveTimezone: () => {
    const tz = timezones.find((tz) => tz.value === get().activeUser?.timezone);
    set({ activeTimezone: { lat: tz!.lat, long: tz!.long } });
  },
  employeeTimezones: employeeTimezones.map((tz) => {
    const timezone = timezones.find((timezone) => timezone.value === tz);
    return [timezone!.lat, timezone!.long];
  }),
}));
