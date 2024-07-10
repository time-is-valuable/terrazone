import { database, permission } from "../appwrite/config"

// async function updateWeeklySchedule({documentId}:{documentId:string}){
//     try{
//         const result = await database.updateDocument(
//             '<DATABASE_ID>',
//             '<COLLECTION_ID>',
//             documentId,
//             {}, // data (optional)
//             permission
//         );
//     }catch(err){
//         console.error(err);
//     }
// }