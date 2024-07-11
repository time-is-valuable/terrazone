import Profile from "~/components/profile"
import WorkingHours from "~/components/workingHours"
import Link from "next/link"
import {Button} from "../../components/ui/button"

export default function Dashboard(){
   return(
    <section className="flex justify-end">
        <section>
            <Button variant="link"><Link href="/">Link</Link></Button>
            <h1>Settings</h1>
        </section>
        <section className="flex flex-col justify-end items-end">
        <Profile/>
        <WorkingHours/>
        </section>
    </section>
   )
}