import {Client, Databases, Teams, Storage} from 'node-appwrite';

export default class AppwriteClient {
    static teamsId = 'employees';
    static bucketsId = 'profiles';
    static databaseId = 'terrazone';
    static collectionId = 'employees';
    static client = undefined;
    static teams = undefined;
    static storage = undefined;
    static databases = undefined;

    static setClient() {
        if (!AppwriteClient.client) {
            AppwriteClient.client = new Client()
                .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
                .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
                .setKey(process.env.API_KEY);
        }

        return AppwriteClient.client;
    }

    static getTeams() {
        if (!AppwriteClient.teams) {
            AppwriteClient.teams = new Teams(AppwriteClient.client);
        }
        return AppwriteClient.teams;
    }

    static getStorage() {
        if (!AppwriteClient.storage) {
            AppwriteClient.storage = new Storage(AppwriteClient.client);
        }
        return AppwriteClient.storage;
    }

    static getDatabases() {
        if (!AppwriteClient.databases) {
            AppwriteClient.databases = new Databases(AppwriteClient.client);
        }
        return AppwriteClient.databases;
    }
}
