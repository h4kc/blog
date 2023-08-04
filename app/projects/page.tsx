import { getProjects } from "../../lib/notion";
import ProjectItem from "@/components/ProjectItem";

const now = new Date();

export default async function page() {
  const results = await getProjects();

  return (
    <div className=" flex flex-wrap items-center justify-center">
      {results.length ? (
        results.map((r) => <ProjectItem key={r.id} {...r} />)
      ) : (
        <ProjectItem
          github="#"
          id="#"
          title="Error"
          description="Check Your Internet Connexion, Or Check your notion Databse"
          status={"error"}
          category=""
        />
      )}
    </div>
  );
}
