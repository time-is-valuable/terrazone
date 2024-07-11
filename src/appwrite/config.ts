import { Client, Account, Databases, Permission, Storage } from 'appwrite';

export const client = new Client();

client
  .setEndpoint('https://v16.appwrite.org/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "");

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const permission = new Permission();
export { ID } from 'appwrite';
