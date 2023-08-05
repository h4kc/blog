import Link from "next/link";

import { ProjectMetadata } from "@/lib/ProjectMetada";
import { FaGithub } from "react-icons/fa";

export default function ProjectItem({
  github,
  title,
  status,
  description,
  category,
}: ProjectMetadata) {
  return (
    <Link
      href={github}
      className=" mt-3 w-4/5  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 relative"
    >
      <FaGithub size={30} color="black" className="absolute -top-2 -right-2" />
      <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="font-normal text-gray-400 ">{description}</p>
      <span className="text-xs text-gray-300">{category}</span>
      <div className="mt-2">
        <span className="px-3 py-1 rounded-lg bg-orange-300 text-red-600 font-bold">
          {status}
        </span>
      </div>
    </Link>
  );
}
