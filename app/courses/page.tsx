import { getCourses } from "../../lib/notion";
import CourseItem from "@/components/CourseItem";
export const metadata = {
  title: "Hackawa",
  description: "It's All About The Impact!",
};
const now = new Date();
export default async function page() {
  const results = await getCourses();

  return (
    <div className="flex flex-wrap justify-around items-center p-5">
      {results.length ? (
        results.map((r) => <CourseItem key={r.id} {...r} />)
      ) : (
        <CourseItem
          id="#"
          link="#"
          image="/error.png"
          title="Error"
          description="Check Your Internet Connexion, Or Check your notion Databse"
          createdAt={now.toUTCString()}
          categories={[]}
        />
      )}
    </div>
  );
}
