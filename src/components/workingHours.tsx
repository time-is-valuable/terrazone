"use client";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
} from "./ui/card";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox"
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";
import { useState } from "react";
import { daysOfWeek } from "~/static/daysOfWeek";
import { timezones, ITimezone } from "~/static/timezoneCoordinate";
import { CreateEmployeeData, UpdateEmployeeData, ListEmployeeData, UploadImage } from "../appwrite/employeeAPIFunc";
import { GetAccount } from "~/appwrite/authAPIFunc";

export default function WorkingHours() {

const [timezone, setTimeZone] = useState<string>("");
const [times, setTimes] = useState<string>("");

const timeZoneOptions = timezones.map((time:ITimezone)=>{
  return(
    <SelectItem key={time.timezone} value={time.timezone}>{time.timezone} {time.greenWichTime}</SelectItem>
  )
});

function saveInput(){
  
}

const weeklyCheckbox = daysOfWeek.map((day:string)=>{
  return(
    <div className="flex items-center">
        <Checkbox id = {day} className="border-[.1rem] border-[#2D2D31] mr-2 my-2"/>
        <Label className="font-normal" htmlFor = {day}>{day}</Label>
    </div>
  )
});

  return (
    <Card className="py-[1.2rem] px-[1rem] flex items-start justify-between h-[520px] w-[950px] bg-[#1a1a1a] border-[#2D2D31] border-[.1rem]">
      <CardHeader className="p-0">
        <CardTitle className="font-normal text-center text-[1.25rem]">
          Working hours
        </CardTitle>
      </CardHeader>
      <CardContent>

        <section className="mb-4">
        <Label htmlFor="timezone" className="font-normal">Timezone</Label>

        <Select>
          <SelectTrigger id="timezone" className="mt-2 w-[40rem]">
            <SelectValue placeholder="Africa/Abidjan +0:00" />
          </SelectTrigger>
          <SelectContent>
            {timeZoneOptions}
          </SelectContent>
        </Select>
        </section>

        <section className="pb-[1rem] w-[w-full] flex justify-between items-center">
          <div className='w-[19rem] flex flex-col items-start'>
          <Label className="pb-2 font-normal" htmlFor="timezone">Start</Label>
          <Input className="text-[rgb(255,255,255,0.5)]" placeholder="10:00 PM" type = "time"/>
          </div>
     

          <div className="w-[19rem] flex flex-col items-start">
          <Label className="pb-2 font-normal" htmlFor="timezone">End</Label>
          <Input className="text-[rgb(255,255,255,0.5)]" placeholder="10:00 PM" type = "time"/>
          </div>
 
        </section>

        <section className="flex flex-col items-start mb-4">
        {weeklyCheckbox}

        </section>

        <div className="flex items-center">
        <Switch id="data-public" checked={true} className="mr-2"/>
        <Label htmlFor="data-public" className="font-normal">Show data publically</Label>

        </div>

        <section className="flex justify-end">
      
        <Button
          className="text-[0.875rem] bg-transparent text-white border-[.1rem] border-[#2D2D31]"
          onClick={() => {
            saveInput();
          }}
        >
          Save
        </Button>
        </section>
      </CardContent>


    </Card>
  );
}
