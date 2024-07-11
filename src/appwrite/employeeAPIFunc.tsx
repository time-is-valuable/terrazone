import { database, ID, storage } from './config';

interface IEmployee{
    times: string,
    employee_id: string,
    employee_name: string,
    timezone: string,
    location: string,
    photo_id: string,
}


export async function CreateEmployeeData({data}:{data: IEmployee}){
    try{
        await database.createDocument("terrazone", "employees", ID.unique(), data)
    }catch(err){
        console.error(err);
    }
}

export async function UpdateEmployeeData({data, documentId}:{data: IEmployee, documentId: string}){
    try{
        await database.updateDocument("terrazone", "employees", documentId, data);
    }catch(err){
        console.error(err);
    }
}

export async function ListEmployeeData(){
    try{
        return await database.listDocuments("terrazone", "employees");
    }catch(err){
        console.error(err);
    }
}

export async function UploadImage({file}:{file:File}){
    try{   
        return await storage.createFile("terrazone", "profiles", file);
    }catch(err){
        console.error(err);
    }
}