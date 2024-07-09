import {Client, Databases, Permission, ID, Role, Teams, Storage, InputFile} from 'node-appwrite';
import fetch from "node-fetch";

const teamsId = 'employees';
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
    const teams = new Teams(client);
    const storage = new Storage(client);
    const databases = new Databases(client);

    let photoId = '';
    const defaultTimezone = process.env.DEFAULT_TIMEZONE ?? 'UTC';
    const addingToTeam = process.env.ADDING_TO_TEAM === 'enabled' ?? false;

    try {
        const buffer = await fetch(`https://unavatar.io/${user.email}`)
        const response = await storage.createFile(
            bucketsId,
            ID.unique(),
            InputFile.fromBuffer(Buffer.from((await buffer.arrayBuffer())), `${user.$id}.jpg`),
        );

        photoId = response.$id;
    } catch (e) {
        // We can continue without an image.
        error(e);
    }

    try {
        await databases.createDocument(databaseId, collectionId, ID.unique(), {
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
            await teams.createMembership(teamsId, [], user.email);
        }
    } catch (e) {
        error(e);
        return res.json({ success: false }, 500);
    }

    return res.json({ success: true }, 200);
};
