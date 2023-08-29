import Accordion from "@/components/Accordion";
import { getCoursesById,getCourses } from "@/lib/notion";
export const metadata = {
  title: "Hackawa",
  description: "It's All About The Impact!",
};
export async function generateStaticParams() {
    const posts = await getCourses()
    return posts.map((post) => ({
        slug: post.link,
    }));
}
async function Coursepage(props: any) {
  const result = await getCoursesById(props.params.slug);
  return (
    <div className="  m-auto  w-4/5 p-8">
      {result ? result.map((r) => <Accordion key={r.id} {...r} />) : null}
    </div>
  );
}

export default Coursepage;
