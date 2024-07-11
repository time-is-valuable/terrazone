"use client";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { CreateEmployeeData, UpdateEmployeeData, ListEmployeeData, UploadImage } from "../appwrite/employeeAPIFunc";
import { GetAccount } from "~/appwrite/authAPIFunc";
import { IoIosArrowBack } from "react-icons/io";

export default function Profile() {
  const [name, setName] = useState("");
  const [file, setFile] = useState<File>();

  async function saveInput() {
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

    if(!file){
      return;
    }

    const findEmployee = employee.documents.find((employee)=>employee.$id === account.$id);
    
    //if employee doesn't exist in database, update the data
    if(!findEmployee){
      return;
    }

    const image = await UploadImage({file: file});

    if(!image){
      return;
    }

    CreateEmployeeData({data: {employee_id: '', employee_name: name, photo_id: image.$id, timezone: '', location: '', times: ''}});

  }

  return (
    <Card className="py-[1.2rem] px-[1rem] mb-[1rem] h-[420px] w-[950px] flex justify-between bg-[#1a1a1a] border-[#2D2D31] border-[.1rem]">
      <CardHeader className="flex p-0">
        <CardTitle className="font-normal text-[1.25rem]">Profile</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-end">

        <div className="w-[40rem] flex flex-col flex-start mb-4">
          <Label className="mb-2 font-normal w-full" htmlFor="name">
            Name
          </Label>
          <Input
            className="font-normal w-full border-[.1rem] border-[#2D2D31]"
            id="name"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="w-full items-center gap-1.5">
          <Input
            type="file"
            className="cursor-pointer flex h-[15rem] mb-2 border-[.1rem] border-[#2D2D31]"
            onChange={(e) => {
              if (!e.target.files) {
                return;
              }
              setFile(e.target.files[0]);
            }}
          />
        </div>

        <Button
          className="mt-2 text-[0.875rem] bg-transparent text-white border-[.1rem] border-[#2D2D31]"
          onClick={() => {
            saveInput();
          }}
        >
          Save
        </Button>
      </CardContent>
    </Card>
  );
}