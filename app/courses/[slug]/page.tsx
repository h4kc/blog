
import Accordion from '@/components/Accordion';
import { getCoursesById } from '@/lib/notion';


// export async function generateStaticParams() {
//     const posts = await getPosts()
//     return posts.map((post) => ({
//         slug: post.link,
//     }));
// }
async function Coursepage(props: any) {

  const result = await getCoursesById(props.params.slug)
    return (
        <div className='  m-auto  w-4/5 p-8'>
            {result ? result.map((r)=><Accordion key={r.id} {...r}/>):null}
        </div>

    )
}

export default Coursepage