import { type Employee } from '~/appwrite/mock-employees';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { useUserStore } from '~/state/user-store';

export const SearchEmployees = ({ employees }: { employees: Employee[] }) => {
  const { setActiveUser, setActiveTimezone } = useUserStore();
  return (
    <div className="flex items-center justify-center relative z-50 top-0 shadow-xl shadow-black/30">
      <Select
        onValueChange={(e) => {
          setActiveUser(e);
          setActiveTimezone();
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Search Employees" />
        </SelectTrigger>
        <SelectContent>
          {employees.map((employee) => (
            <SelectItem key={employee.employee_id} value={employee.employee_id}>
              {employee.employee_name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
