import { CreateEmployeeData, UpdateEmployeeData, ListEmployeeData, UploadImage } from "../appwrite/employeeAPIFunc";
import { GetAccount } from "~/appwrite/authAPIFunc";

export async function saveProfile({name, file}: {name:string, file:File | undefined}) {
    const account = await GetAccount();

    const employee = await ListEmployeeData();

    if(!employee){
      return;
    }

    if(!employee.documents.length){
      return;
    }

    if(!account){
      return;
    }

    const findEmployee = employee.documents.find((employee)=>employee.id === account.$id);

    //if employee doesn't exist in database, update the data
    if(!findEmployee){
      return;
    }

    if(findEmployee.name && name){
      console.log('test')
      UpdateEmployeeData({documentId: findEmployee.id, data: {employee_id: '', employee_name: name, photo_id: findEmployee.photo_id, timezone: '', location: '', times: ''}})
      return;
    }

    if(!file){
      return;
    }

    const image = await UploadImage({file: file});

    if(!image){
      return;
    }

    if(findEmployee.photo_id && file){
      UpdateEmployeeData({documentId: findEmployee.id, data: {employee_id: '', employee_name: findEmployee.name, photo_id: findEmployee.image.$id, timezone: '', location: '', times: ''}})
      return;
    }

    if(findEmployee.name && findEmployee.photo_id && name && file){
      UpdateEmployeeData({documentId: findEmployee.id, data: {employee_id: '', employee_name: name, photo_id: findEmployee.image.$id, timezone: '', location: '', times: ''}})
      return;
    }


    CreateEmployeeData({data: {employee_id: '', employee_name: name, photo_id: image.$id, timezone: '', location: '', times: ''}});

  }