import { database } from "./config";

export interface IEmployee {
    times: string,
    employee_id: string,
    employee_name: string,
    timezone: string,
    location: string
}

export async function getEmployees(){
    try{
        // const data = await database.listDocuments(
        //     '<DATABASE_ID>',
        //     '<COLLECTION_ID>',
        // );

        const mockData = [
            {
                "times": "{\"saturday\":{\"isWorking\":false,\"from\":\"00:00\",\"to\":\"23:30\"},\"sunday\":{\"isWorking\":false,\"from\":\"00:00\",\"to\":\"23:30\"},\"monday\":{\"isWorking\":true,\"from\":\"09:00\",\"to\":\"17:00\"},\"tuesday\":{\"isWorking\":true,\"from\":\"09:00\",\"to\":\"17:00\"},\"wednesday\":{\"isWorking\":true,\"from\":\"09:00\",\"to\":\"17:00\"},\"thursday\":{\"isWorking\":true,\"from\":\"09:00\",\"to\":\"17:00\"},\"friday\":{\"isWorking\":true,\"from\":\"09:00\",\"to\":\"14:00\"}}",
                "employee_id": "AAAAAA",
                "employee_name": "Walter O'brien",
                "timezone": "America/New_York",
                "location": "USA/East"
            },
            {
                "times": "{\"saturday\":{\"isWorking\":true,\"from\":\"08:00\",\"to\":\"17:00\"},\"sunday\":{\"isWorking\":false,\"from\":\"00:00\",\"to\":\"00:00\"},\"monday\":{\"isWorking\":true,\"from\":\"08:30\",\"to\":\"16:30\"},\"tuesday\":{\"isWorking\":true,\"from\":\"08:30\",\"to\":\"16:30\"},\"wednesday\":{\"isWorking\":true,\"from\":\"08:30\",\"to\":\"16:30\"},\"thursday\":{\"isWorking\":true,\"from\":\"08:30\",\"to\":\"16:30\"},\"friday\":{\"isWorking\":true,\"from\":\"08:30\",\"to\":\"15:00\"}}",
                "employee_id": "BBBBBB",
                "employee_name": "Paige Dineen",
                "timezone": "America/Los_Angeles",
                "location": "USA/West"
            },
            {
                "times": "{\"saturday\":{\"isWorking\":true,\"from\":\"10:00\",\"to\":\"18:00\"},\"sunday\":{\"isWorking\":false,\"from\":\"00:00\",\"to\":\"00:00\"},\"monday\":{\"isWorking\":true,\"from\":\"10:00\",\"to\":\"18:00\"},\"tuesday\":{\"isWorking\":true,\"from\":\"10:00\",\"to\":\"18:00\"},\"wednesday\":{\"isWorking\":true,\"from\":\"10:00\",\"to\":\"18:00\"},\"thursday\":{\"isWorking\":true,\"from\":\"10:00\",\"to\":\"18:00\"},\"friday\":{\"isWorking\":true,\"from\":\"10:00\",\"to\":\"16:00\"}}",
                "employee_id": "CCCCCC",
                "employee_name": "Toby Curtis",
                "timezone": "America/Chicago",
                "location": "USA/Central"
            },
            {
                "times": "{\"saturday\":{\"isWorking\":true,\"from\":\"09:00\",\"to\":\"17:00\"},\"sunday\":{\"isWorking\":true,\"from\":\"10:00\",\"to\":\"16:00\"},\"monday\":{\"isWorking\":true,\"from\":\"09:00\",\"to\":\"17:00\"},\"tuesday\":{\"isWorking\":true,\"from\":\"09:00\",\"to\":\"17:00\"},\"wednesday\":{\"isWorking\":true,\"from\":\"09:00\",\"to\":\"17:00\"},\"thursday\":{\"isWorking\":true,\"from\":\"09:00\",\"to\":\"17:00\"},\"friday\":{\"isWorking\":true,\"from\":\"09:00\",\"to\":\"14:30\"}}",
                "employee_id": "DDDDDD",
                "employee_name": "Sylvester Dodd",
                "timezone": "America/Denver",
                "location": "USA/Mountain"
            },
            {
                "times": "{\"saturday\":{\"isWorking\":true,\"from\":\"08:00\",\"to\":\"16:00\"},\"sunday\":{\"isWorking\":false,\"from\":\"00:00\",\"to\":\"00:00\"},\"monday\":{\"isWorking\":true,\"from\":\"08:00\",\"to\":\"16:00\"},\"tuesday\":{\"isWorking\":true,\"from\":\"08:00\",\"to\":\"16:00\"},\"wednesday\":{\"isWorking\":true,\"from\":\"08:00\",\"to\":\"16:00\"},\"thursday\":{\"isWorking\":true,\"from\":\"08:00\",\"to\":\"16:00\"},\"friday\":{\"isWorking\":true,\"from\":\"08:00\",\"to\":\"14:00\"}}",
                "employee_id": "EEEEEE",
                "employee_name": "Happy Quinn",
                "timezone": "America/Phoenix",
                "location": "USA/Mountain"
            }
        ];
        
        return mockData;
    }catch(err){
        console.error(err);
    }
}
