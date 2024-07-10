import { Client, Account, Databases, Permission } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('PROJECT_ID');

export const account = new Account(client);
export const database = new Databases(client);
export const permission = new Permission(client);
export { ID } from 'appwrite';
