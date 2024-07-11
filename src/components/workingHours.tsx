"use client";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
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
// import { createWorkingHours } from "~/appwrite/scheduleAPIFunc";
import { useState } from "react";

export default function WorkingHours() {

const timezones = [
  "Pacific/Midway (SST)",
  "Pacific/Honolulu (HST)",
  "America/Anchorage (AKST)",
  "America/Los_Angeles (PST)",
  "America/Denver (MST)",
  "America/Chicago (CST)",
  "America/New_York (EST)",
  "America/Argentina/Buenos_Aires (ART)",
  "America/Santiago (CLT)",
  "America/St_Johns (NST)",
  "America/Sao_Paulo (BRT)",
  "Atlantic/South_Georgia (GST)",
  "Atlantic/Azores (AZOT)",
  "Europe/London (GMT/BST)",
  "Europe/Paris (CET/CEST)",
  "Europe/Berlin (CET/CEST)",
  "Europe/Moscow (MSK)",
  "Asia/Dubai (GST)",
  "Asia/Kolkata (IST)",
  "Asia/Shanghai (CST)",
  "Asia/Tokyo (JST)",
  "Australia/Sydney (AEST)",
  "Pacific/Auckland (NZST)"
];

const [timezone, setTimeZone] = useState<string>("");
const [times, setTimes] = useState<string>("");
const [name, setName] = useState<string>("");

function saveInput(){
    // createWorkingHours({data: {times: times, timezone:timezone, employee_name: name, }});
}

const timeZoneOptions = timezones.map((time:string)=>{
  return(
    <SelectItem key={time} value={time}>{time}</SelectItem>
  )
});

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const weeklyCheckbox = daysOfWeek.map((day:string)=>{
  return(
    <div>
        <Checkbox id = {day}/>
        <Label htmlFor = {day}>{day}</Label>
    </div>
  )
});

  return (
    <Card className="h-[450px] w-[850px] bg-[#1a1a1a] border-[#2D2D31] border-[.1rem]">
      <CardHeader>
        <CardTitle className="font-normal text-center text-[2rem]">
          Working hours
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Label htmlFor="timezone" />

        <Select>
          <SelectTrigger id="timezone" className="w-full">
            <SelectValue placeholder="Pacific/Midway (SST)" />
          </SelectTrigger>
          <SelectContent>
            {timeZoneOptions}
          </SelectContent>
        </Select>

        <section className="flex">
        <Input type = "time"/>

        <Input type = "time"/>
        </section>

        <section className="flex flex-col items-start">
        {weeklyCheckbox}

        </section>

        <Switch id="data-public"/>
        <Label htmlFor="data-public">Show data publically</Label>


      </CardContent>
      <CardFooter className="flex flex-col items-center justify-between min-h-[6rem]"></CardFooter>
    </Card>
  );
}
