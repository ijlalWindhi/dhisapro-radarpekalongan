"use client";

import Image from "next/image";
import Link from "next/link";

export default function Body({ title, data }) {
  return (
    <div className="flex justify-center p-5 sm:flex-col">
      <div className="h-full md:w-2/3 sm:w-screen">
        <h1 className="text-lg font-bold">{`${
          title ? title : "Berita Terkini"
        }`}</h1>
        {data?.map((data) => (
          <div className="flex md:p-4 w-full h-full sm:my-4" key={data.id}>
            <Image
              // fill={true}
              quality={50}
              width={200}
              height={200}
              src={data.ImageURL}
              alt=""
              className="md:w-40 h-fit md:mr-6 sm:w-28 sm:mr-2"
            />
            <div className="">
              <Link href={`/post/${data.id}`}>
                <p className="md:text-xl sm:text-sm font-semibold mb-2">
                  {data.Judul}
                </p>
              </Link>
              <span className="flex items-center">
                <p className="md:text-xl sm:text-xs text-white uppercase font-bold mb-2 bg-red-500 w-fit p-2 rounded-lg mr-4">
                  {data.Kategori}
                </p>
                <p className="font-bold sm:text-sm">
                  {data.created_at.substring(0, 10)}
                </p>
              </span>
              <p className="md:text-sm sm:text-xs text-gray-400 font-semibold">
                {data.Isi_Berita.substring(0, 120)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-full md:w-1/3">
        <h2 className="text-lg font-bold">Berita Trending</h2>
        {data?.slice(0, 5).map((data, index) => (
          <ul
            className="bg-slate-400 text-white p-4 flex cursor-pointer"
            key={data.id}
          >
            {index + 1}
            <Link href={`/post/${data.id}`}>
              <li className="mx-2">{data.Judul}</li>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
}
