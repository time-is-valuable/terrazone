import { database } from './config';

const mockData = [
  {
    times: {
      saturday: { isWorking: false, from: '00:00', to: '23:30' },
      sunday: { isWorking: false, from: '00:00', to: '23:30' },
      monday: { isWorking: true, from: '09:00', to: '17:00' },
      tuesday: { isWorking: true, from: '09:00', to: '17:00' },
      wednesday: { isWorking: true, from: '09:00', to: '17:00' },
      thursday: { isWorking: true, from: '09:00', to: '17:00' },
      friday: { isWorking: true, from: '09:00', to: '14:00' },
    },
    workHours: '10:00am — 6:00pm',
    title: 'Software Engineer',
    employee_id: 'AAAAAA',
    employee_name: "Walter O'brien",
    timezone: 'America/New_York',
    location: 'USA/East',
  },
  {
    times: {
      saturday: { isWorking: false, from: '00:00', to: '23:30' },
      sunday: { isWorking: false, from: '00:00', to: '23:30' },
      monday: { isWorking: true, from: '09:00', to: '17:00' },
      tuesday: { isWorking: true, from: '09:00', to: '17:00' },
      wednesday: { isWorking: true, from: '09:00', to: '17:00' },
      thursday: { isWorking: true, from: '09:00', to: '17:00' },
      friday: { isWorking: true, from: '09:00', to: '14:00' },
    },
    workHours: '10:00am — 6:00pm',
    title: 'Software Engineer',
    employee_id: 'BBBBBB',
    employee_name: 'Paige Dineen',
    timezone: 'America/Los_Angeles',
    location: 'USA/West',
  },
  {
    times: {
      saturday: { isWorking: false, from: '00:00', to: '23:30' },
      sunday: { isWorking: false, from: '00:00', to: '23:30' },
      monday: { isWorking: true, from: '09:00', to: '17:00' },
      tuesday: { isWorking: true, from: '09:00', to: '17:00' },
      wednesday: { isWorking: true, from: '09:00', to: '17:00' },
      thursday: { isWorking: true, from: '09:00', to: '17:00' },
      friday: { isWorking: true, from: '09:00', to: '14:00' },
    },
    workHours: '10:00am — 6:00pm',
    title: 'Software Engineer',
    employee_id: 'CCCCCC',
    employee_name: 'Toby Curtis',
    timezone: 'America/Chicago',
    location: 'USA/Central',
  },
  {
    times: {
      saturday: { isWorking: false, from: '00:00', to: '23:30' },
      sunday: { isWorking: false, from: '00:00', to: '23:30' },
      monday: { isWorking: true, from: '09:00', to: '17:00' },
      tuesday: { isWorking: true, from: '09:00', to: '17:00' },
      wednesday: { isWorking: true, from: '09:00', to: '17:00' },
      thursday: { isWorking: true, from: '09:00', to: '17:00' },
      friday: { isWorking: true, from: '09:00', to: '14:00' },
    },
    workHours: '10:00am — 6:00pm',
    title: 'Software Engineer',
    employee_id: 'DDDDDD',
    employee_name: 'Sylvester Dodd',
    timezone: 'America/Denver',
    location: 'USA/Mountain',
  },
  {
    times: {
      saturday: { isWorking: false, from: '00:00', to: '23:30' },
      sunday: { isWorking: false, from: '00:00', to: '23:30' },
      monday: { isWorking: true, from: '09:00', to: '17:00' },
      tuesday: { isWorking: true, from: '09:00', to: '17:00' },
      wednesday: { isWorking: true, from: '09:00', to: '17:00' },
      thursday: { isWorking: true, from: '09:00', to: '17:00' },
      friday: { isWorking: true, from: '09:00', to: '14:00' },
    },
    workHours: '10:00am — 6:00pm',
    title: 'Software Engineer',
    employee_id: 'EEEEEE',
    employee_name: 'Happy Quinn',
    timezone: 'America/Phoenix',
    location: 'USA/Mountain',
  },
];

export const getEmployees = () => {
  try {
    //const data = await database.listDocuments('terrazone', 'employees');

    return mockData;
  } catch (err) {
    console.error(err);
  }
};

export type Employee = (typeof mockData)[number];
