import { data } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMailBulk } from "react-icons/fa";

export default function page() {
  return (
    <div className=" pr-7 pl-7 flex flex-col justify-center items-center mt-10">
      <h1 className="font-bold text-2xl">About me !</h1>
      <div className="mt-6">
        <Image
          src="/aboutme.png"
          alt="Picture of the author"
          width={200}
          height={90}
          className="max-w-xs mb-2 float-right"
        />
        {data.aboutme.length
          ? data.aboutme.map((a) => (
              <>
                <p>{a}</p> <br />{" "}
              </>
            ))
          : null}
      </div>
      <Link href={"mailto:" + data.email}>
        <button className="bg-orange-300 text-red-600 font-semibold py-2 px-4 rounded shadow mt-6 flex justify-center items-center">
          <FaEnvelope size={20} color="red" className="mx-1" />
          Contact Me
        </button>
      </Link>
    </div>
  );
}
