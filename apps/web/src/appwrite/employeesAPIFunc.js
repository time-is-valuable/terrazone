import { database } from "./config";


export async function getEmployees(){
    try{
        return await database.listDocuments(
            '<DATABASE_ID>',
            '<COLLECTION_ID>',
        );
    }catch(err){
        console.error(err);
    }
}
