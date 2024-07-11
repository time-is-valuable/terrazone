import { Client, Account, Databases, Permission } from 'appwrite';

export const client = new Client();

client
  .setEndpoint('https://v16.appwrite.org/v1')
  .setProject('668d47010012af6aa244');

export const account = new Account(client);
export const database = new Databases(client);
export const permission = new Permission();
export { ID } from 'appwrite';
