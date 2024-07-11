import { redirect } from 'next/navigation';
import { database, ID } from './config';

interface IEmployee{

}


export async function CreateEmployeeData({data}:{data: IEmployee}){
    await database.createDocument("terrazone", "employees", ID.unique(), data)
}

export async function UpdateEmployeeData(){
    
}