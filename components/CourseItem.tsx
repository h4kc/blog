import Link from "next/link";
import { ModuleMetaData } from "@/lib/ModuleMetadata";
import Image from "next/image";

export default function CourseItem({
  id,
  title,
  description,
  link,
  image,
}: ModuleMetaData) {
  return (
    <Link
      href={"/courses/" + link}
      className="block mt-3 w-80 ml-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 h-80"
    >
      <div className="w-80">
        <Image
          src={image}
          alt={"image"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "180px" }} // optional
        />
      </div>
      <div className=" pt-1 pr-2 pb-1 pl-2">
        <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="font-normal text-gray-400 ">{description}</p>
      </div>
    </Link>
  );
}
