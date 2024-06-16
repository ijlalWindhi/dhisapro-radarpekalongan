"use client";

import Link from "next/link";

export default function Body({ title, data }) {
  return (
    <div className="flex justify-center p-5">
      <div className="h-full w-2/3">
        <h1 className="text-lg font-bold">{`${
          title ? title : "Berita Terkini"
        }`}</h1>
        {data?.map((data) => (
          <div className="flex p-4 w-full h-full" key={data.id}>
            <img src={data.ImageURL} alt="" className="w-40 h-fit mr-6" />
            <div className="">
              <Link href={`/post/${data.id}`}>
                <p className="text-xl font-semibold mb-2">{data.Judul}</p>
              </Link>
              <span className="flex items-center">
                <p className="text-xl text-white uppercase font-bold mb-2 bg-red-500 w-fit p-2 rounded-lg mr-4">
                  {data.Kategori}
                </p>
                <p className="font-bold">{data.created_at.substring(0, 10)}</p>
              </span>
              <p className="text-sm text-gray-400 font-semibold">
                {data.Isi_Berita.substring(0, 120)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-full w-1/3">
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
