import Profile from "~/components/profile"
import WorkingHours from "~/components/workingHours"
import Link from "next/link"
import {Button} from "../../components/ui/button"
import { IoIosArrowBack } from "react-icons/io";

export default function Dashboard(){
   return(
    <section className="p-4 flex justify-between">
        <section className="flex flex-col align-start justify-start">
            <div className="flex items-center justify-center">
                <IoIosArrowBack className="p-0"/>
                <Button variant="link" className="p-0"><Link href="/">Back</Link></Button>
            </div>
            <h1 className ="pl-[2rem] text-[2.25rem]">Settings</h1>
        </section>

        <section className="flex flex-col justify-end items-end">
        <Profile/>
        <WorkingHours/>
        </section>
    </section>
   )
}