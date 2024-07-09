"use client"

import { Globe } from "~/components/globe";
import Image from "next/image";
import sara from "../../../../assets/sara_kaandorp.jpg";
import { useState, useEffect } from "react";

export default function Home() {
  const localeTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const [toggleUserCard, setToggleUserCard] = useState(false);
  const [timeFormat, setTimeFormat] = useState(localeTime.split(" ")[1]);
  const [time, setTime] = useState(localeTime.replace("AM", "").replace("PM", "")); 

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;


  useEffect(()=>{
    const intervalId = setInterval(() => {
      setTimeFormat(localeTime.split(" ")[1]);
      setTime(localeTime.replace("AM", "").replace("PM", ""));
    }, 60000);
    return () => clearInterval(intervalId)
  
  }, [time, timeFormat]);

  return (
    <main className="bg-black flex min-h-screen flex-col items-center">
      <header className="p-4 flex w-full justify-between">
        <section className="p-4 flex flex-col align-start w-full">
          <h2 className="text-white opacity-50 text-[1.25rem]">
            Your local time ({timeZone})
          </h2>

          <div className="flex">
            <h2 className="text-white text-[5.5rem]">{time}</h2>
            <h3 className="text-white opacity-50 text-[1.25rem] pt-6">
              {timeFormat}
            </h3>
          </div>
        </section>

        <section className="flex flex-col items-end w-72">

          <section className="cursor-pointer flex items-center bg-[#1D1D21] h-3/5 w-80 p-4 rounded-md border-[#2D2D31] border-2" onClick={()=>{setToggleUserCard(!toggleUserCard)}}>
            <Image src={sara} alt={""} className="rounded-full w-14" />
            <div className="flex flex-col pl-4">
              <h2 className="text-white text-[1.25rem]">Sara Kaandorp</h2>
              <h2 className="text-white opacity-50 text-[1.25rem]">
                Acme Corp
              </h2>
            </div>
            <i className="fa-solid fa-angle-down text-white ml-[3rem] text-[1.3rem]"></i>
          </section>

          <section className={`${toggleUserCard ? 'opacity-100' : 'opacity-0'} transition-opacity flex flex-col items-start mt-4 bg-[#1D1D21] h-3/5 w-80 p-4 rounded-md border-[#2D2D31] border-2`}>
            <div className="flex items-center justify-between w-[6.5rem] pb-3">
              <i className="opacity-50 text-white fa-solid fa-envelope"></i>

              <h3 className="text-white opacity-50 text-[1.25rem]">Settings</h3>
            </div>

            <div className="flex items-center justify-between w-[6.5rem]">
              <i className="opacity-50 text-white fa-solid fa-location-dot"></i>
              <h3 className="text-white opacity-50 text-[1.25rem]">Sign out</h3>
            </div>
          </section>
        </section>
      </header>
      <Globe />
    </main>
  );
}
