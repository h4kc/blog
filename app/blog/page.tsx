import PostItem from "@/components/PostItem";
import { getPost, getPosts } from "../../lib/notion";

const now = new Date();
export const metadata = {
  title: "Hackawa",
  description: "It's All About The Impact!",
};
export default async function page() {
  const results = await getPosts();

  return (
    <div className=" flex flex-col items-center justify-center">
      {results.length ? (
        results.map((r) => <PostItem key={r.id} {...r} />)
      ) : (
        <PostItem
          link="#"
          id="#"
          title="Error"
          description="Check Your Internet Connexion, Or Check your notion Databse"
          createdAt={now.toUTCString()}
          intention=""
          category=""
        />
      )}
    </div>
  );
}
