import {Client, Databases, Permission, Query, Role} from 'node-appwrite';

const databaseId = 'terrazone';
const collectionId = 'employees';
const teamsId = 'employees';

export default async ({ req, res, log, error }) => {
    const client = new Client()
        .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
        .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
        .setKey(req.headers['x-appwrite-key']);

    const databases = new Databases(client);

    // Allowing all origins, as the function is for logged-in users only.
    const headers = { 'Access-Control-Allow-Origin': '*' };

    const userId = req.headers['x-appwrite-user-id'];

    try {
        const docs = await databases.listDocuments(databaseId, collectionId, [
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

        await databases.updateDocument(databaseId, collectionId, document.$id, undefined, permissions);

        return res.json({ success: true }, 200, headers)
    } catch (e) {
        error(e);
        return res.json({ success: false }, 500, headers)
    }
};
