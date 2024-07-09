import {ID, InputFile, Permission, Role} from 'node-appwrite';
import fetch from "node-fetch";
import AppwriteClient from "./shared/appwriteClient.js";

export default async ({ req, res, log, error }) => {
    if (req.headers['x-appwrite-trigger'] !== 'event') {
        return res.json({});
    }
    AppwriteClient.setClient(req);
    const user = req.bodyJson;

    let photoId = '';
    const defaultTimezone = process.env.DEFAULT_TIMEZONE ?? 'UTC';
    const addingToTeam = process.env.ADDING_TO_TEAM === 'enabled' ?? false;

    try {
        const buffer = await fetch(`https://unavatar.io/${user.email}`)
        const response = await AppwriteClient.getStorage().createFile(
             AppwriteClient.bucketsId,
            ID.unique(),
            InputFile.fromBuffer(Buffer.from((await buffer.arrayBuffer())), `${user.$id}.jpg`),
        );

        photoId = response.$id;
    } catch (e) {
        // We can continue without an image.
        error(e);
    }

    try {
        await AppwriteClient.getDatabases().createDocument(AppwriteClient.databaseId, AppwriteClient.collectionId, ID.unique(), {
            times: '{}',
            employee_id: user.$id,
            employee_name: user.name,
            timezone: defaultTimezone,
            location: '',
            photo_id: photoId
        }, [
            Permission.read(Role.any()),
            Permission.update(Role.user(user.$id)),
        ]);

        if (addingToTeam) {
            await AppwriteClient.getTeams().createMembership(AppwriteClient.teamsId, [], user.email);
        }
    } catch (e) {
        error(e);
        return res.json({ success: false }, 500);
    }

    return res.json({ success: true }, 200);
};
