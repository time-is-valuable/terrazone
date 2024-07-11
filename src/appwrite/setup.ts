import 'dotenv/config';
import {
  Client,
  Databases,
  Permission,
  Role,
  Storage,
  Teams,
} from 'node-appwrite';

export const setup = async () => {
  let client = new Client();
  client
    .setEndpoint('https://v16.appwrite.org/v1')
    .setKey(process.env.APPWRITE_API_KEY as string)
    .setProject(process.env.APPWRITE_PROJECT_ID as string);

  let databases = new Databases(client);
  let storage = new Storage(client);
  let teams = new Teams(client);

  try {
    await teams.create('employees', 'Employees');
  } catch (e) {
    console.error('create team: ' + e);
  }

  try {
    await storage.createBucket(
      'profiles',
      'Profiles',
      [Permission.read(Role.any()), Permission.create(Role.any())],
      true,
      true
    );
  } catch (e) {
    console.error('Create bucket: ' + e);
  }

  try {
    await databases.create('terrazone', 'Terrazone', true);
    await databases.createCollection('terrazone', 'employees', 'Employees', [
      Permission.create(Role.team('employees')),
      Permission.read(Role.team('employees')),
    ]);

    await databases.createStringAttribute(
      'terrazone',
      'employees',
      'times',
      4096,
      false,
      '{}'
    );
    await databases.createStringAttribute(
      'terrazone',
      'employees',
      'name',
      256,
      false
    );
    await databases.createStringAttribute(
      'terrazone',
      'employees',
      'id',
      64,
      true
    );
    await databases.createStringAttribute(
      'terrazone',
      'employees',
      'timezone',
      256,
      false
    );
    await databases.createStringAttribute(
      'terrazone',
      'employees',
      'location',
      256,
      false
    );
    await databases.createStringAttribute(
      'terrazone',
      'employees',
      'photo_id',
      128,
      false
    );
    // create attributes
  } catch (e) {
    console.error('setup database: ' + e);
  }
};
