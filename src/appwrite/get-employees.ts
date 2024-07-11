import { database } from './config';

type EmployeeModel = {
  times: string;
  timezone: string;
  location: string;
  photo_id: string;
  name: string;
  id: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;
};

export const getEmployees = async () => {
  try {
    const data = await database.listDocuments('terrazone', 'employees');

    return data.documents as EmployeeModel[];
  } catch (err) {
    console.error(err);
  }
};

export type Employee = NonNullable<
  Awaited<ReturnType<typeof getEmployees>>
>[number];
