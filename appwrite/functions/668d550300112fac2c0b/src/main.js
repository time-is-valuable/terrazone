import {Permission, Query, Role} from 'node-appwrite';
import AppwriteClient from "./shared/appwriteClient.js";

export default async ({ req, res, log, error }) => {
    AppwriteClient.setClient(req)

    // Allowing all origins, as the function is for logged-in users only.
    const headers = { 'Access-Control-Allow-Origin': '*' };

    const userId = req.headers['x-appwrite-user-id'];

    try {
        const docs = await AppwriteClient.getDatabases().listDocuments(AppwriteClient.databaseId, AppwriteClient.collectionId, [
            Query.equal('employee_id', userId)
        ]);

        if (docs.total !== 1) {
            return res.json({ success: false }, 404, headers)
        }

        const document = docs.documents[0];

        const permissions = [
            Permission.update(Role.user(userId)),
        ];

        if (req.bodyJson['privacy'] !== 'enabled') {
            permissions.push(Permission.read(Role.any()));
        }

        await AppwriteClient.getDatabases().updateDocument(AppwriteClient.databaseId, AppwriteClient.collectionId, document.$id, undefined, permissions);

        return res.json({ success: true }, 200, headers)
    } catch (e) {
        error(e);
        return res.json({ success: false }, 500, headers)
    }
};
