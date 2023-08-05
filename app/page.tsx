import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { data } from "@/data";
import { FaEnvelope } from "react-icons/fa";



export default function Home() {
  return (
    <>
      <div className=" p-10 flex flex-wrap-reverse  justify-around">
        <div className=" w-96 flex flex-col justify-center mt-5">
          <h1 className=" font-bold text-4xl">
            {data.title}
          </h1>
          <span className="text-sm text-slate-400">{data.subtitle}</span>
          <div className="mt-2 py-1">
            <Link
              className="px-5 py-3 rounded-lg bg-red-600 text-orange-300 font-bold text-lg"
              href={"/blog"}
            >
              Blog
            </Link>
            <Link
              className="px-5 py-3 mx-3 rounded-lg bg-orange-300 text-red-600 font-bold text-lg"
              href={"/courses"}
            >
              Courses
            </Link>
          </div>
        </div>
        <div className="  w-96flex justify-center items-center">
          <Image
            src="/hckawa-logo-title-glasses.png"
            alt="Picture of the author"
            width={250}
            height={350}
          />
        </div>
      </div>
      <div className="flex flex-col  p-10 ">
        <h1 className="text-2xl font-bold text-orange-300 flex  items-center">
          <span className="border-2 w-3 inline-block mr-1 mt-0.5 border-red-600"></span>
          Services
        </h1>
        <div className="flex flex-wrap justify-center items-center p-5">
          {data.services.map((a) => (
            <div key={a.title} className=" rounded m-2 w-80 p-3 flex items-center border-gray-100 border-2">
              {a.icon}
              <h1 className=" border-l-2 ml-2  pl-2 text-l">{a.title}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col  pl-10">
        <h1 className="text-2xl font-bold text-red-600 flex  items-center">
          <span className="border-2 w-3 inline-block mr-1 mt-0.5 border-orange-300"></span>
          Technologies
        </h1>
        <div className="flex flex-wrap justify-center items-center p-5 ">
          {data.skills.map((a) => (
            <div
              key={a.name}
              className="m-2 w-44 p-3 flex justify-between items-center flex-col  rounded border-gray-100 border-2 h-40"
            >
              <div className=" flex flex-1 items-center">
                <Image
                  src={"/" + a.name + ".png"}
                  alt={a.name}
                  width={200}
                  height={200}
                />
              </div>
              <div className="relative rounded inline-block w-full">
                <div className="bg-gray-300 rounded">
                  <div
                    className="flex items-center justify-center rounded bg-black text-xs leading-none"
                    style={{ width: a.progress }}
                  >
                    <span className="p-1 text-white">{a.progress}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col  pl-10">
        <h1 className="text-2xl font-bold text-orange-300 flex  items-center">
          <span className="border-2 w-3 inline-block mr-1 mt-0.5 border-red-600"></span>
          Tools
        </h1>
        <div className="flex flex-wrap justify-center items-center p-5 ">
          {data.tools.map((a) => (
            <div
              key={a}
              className="m-2 w-44 p-3 flex justify-between items-center flex-col  h-40"
            >
              <div className=" flex flex-1 items-center">
                <Image
                  src={"/" + a + ".png"}
                  alt={a}
                  width={200}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
      <Link href={"mailto:" + data.email}>
        <button className="bg-orange-300 text-red-600 font-semibold py-2 px-4 rounded shadow mt-6 flex justify-center items-center">
          <FaEnvelope size={20} color="red" className="mx-1" />
          Contact Me
        </button>
        </Link>
      </div>
    </>
  );
}
