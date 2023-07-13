import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMailBulk } from "react-icons/fa";
import { getCourses } from '../../lib/notion'
import CourseItem from "@/components/CourseItem";


const now = new Date()
export default  async function page() {
    const results = await getCourses()
    console.log(results)
    return (
        <div className="flex flex-wrap justify-around items-center p-5">
            {
                results.length ? results.
                    map(r => <CourseItem key={r.id} {...r} />)
                    : <CourseItem id='#'  image="/error.png"title='Error' description='Check Your Internet Connexion, Or Check your notion Databse' createdAt={now.toUTCString()}  categories={[]} />
            }
          
        </div>
    )
}