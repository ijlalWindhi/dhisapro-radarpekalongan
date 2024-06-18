"use client";

import Image from "next/image";
import Link from "next/link";
// import ContentLoader from "./components/ContentLoader";

export default function Body({ title, data }) {
  return (
    <>
      {/* {data ? ( */}
      <div className="flex justify-center p-5 sm:flex-col">
        <div className="h-full md:w-2/3">
          <h1 className="text-lg font-bold">{`${
            title ? title : "Berita Terkini"
          }`}</h1>
          {data?.map((data) => (
            <div className="flex p-4 sm:py-4" key={data.id}>
              <Image
                // fill={true}
                quality={30}
                width={150}
                height={150}
                src={data.ImageURL}
                alt=""
                className="w-40 sm:w-28 pr-4 h-fit"
              />
              <div className="flex-col w-fit h-fit">
                <Link href={`/post/${data.id}`}>
                  <p className="text-md sm:text-sm font-bold">{data.Judul}</p>
                </Link>
                <span className="flex items-center">
                  <p className="md:text-lg sm:text-xs text-white uppercase font-bold bg-red-500 w-fit p-2 rounded-lg">
                    {data.Kategori}
                  </p>
                  <p className="font-bold sm:text-xs md:text-sm">
                    {data.created_at.substring(0, 10)}
                  </p>
                </span>
                <p className="md:text-sm sm:text-xs lg:text-lg text-gray-400 font-semibold">
                  {data.Isi_Berita.substring(0, 100)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-full md:w-1/3">
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
      {/* // ) : (
      //   <ContentLoader />
      // )} */}
    </>
  );
}
