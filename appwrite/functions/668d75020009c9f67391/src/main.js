import {Query} from 'node-appwrite';
import AppwriteClient from "./shared/appwriteClient.js";


export default async ({ req, res, log, error }) => {
    if (req.headers['x-appwrite-trigger'] !== 'event') {
        return res.json({});
    }
    AppwriteClient.setClient(req);

    const user = req.bodyJson;

    try {
        const docs = await     AppwriteClient.getDatabases().listDocuments(AppwriteClient.databaseId, AppwriteClient.collectionId, [
            Query.equal('id', user.$id)
        ]);

        if (docs.total !== 1) {
            return res.json({ success: false }, 404)
        }

        const document = docs.documents[0];

        await AppwriteClient.getDatabases().deleteDocument(AppwriteClient.databaseId, AppwriteClient.collectionId, document.$id);
        await AppwriteClient.getStorage().deleteFile(AppwriteClient.bucketsId, document.photo_id);

        return res.json({ success: true }, 200)
    } catch (e) {
        error(e);
        return res.json({ success: false }, 500)
    }
};
