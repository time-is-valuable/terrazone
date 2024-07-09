import {Client, Databases, Query, Storage} from 'node-appwrite';

const bucketsId = 'profiles';
const databaseId = 'terrazone';
const collectionId = 'employees';

export default async ({ req, res, log, error }) => {
    if (req.headers['x-appwrite-trigger'] !== 'event') {
        return res.json({});
    }

    const client = new Client()
        .setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT)
        .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
        .setKey(req.headers['x-appwrite-key']);

    const user = req.bodyJson;
    const storage = new Storage(client);
    const databases = new Databases(client);

    try {
        const docs = await databases.listDocuments(databaseId, collectionId, [
            Query.equal('employee_id', user.$id)
        ]);

        if (docs.total !== 1) {
            return res.json({ success: false }, 404)
        }

        const document = docs.documents[0];

        await databases.deleteDocument(databaseId, collectionId, document.$id);
        await storage.deleteFile(bucketsId, document.photo_id);

        return res.json({ success: true }, 200)
    } catch (e) {
        error(e);
        return res.json({ success: false }, 500)
    }
};
