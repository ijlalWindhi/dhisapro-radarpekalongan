"use client";

import Image from "next/image";
import Link from "next/link";
import ContentLoader from "./components/ContentLoader";
import { useState } from "react";
import Pagination from "./components/Pagination";

export default function Body({ title, data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data?.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {data ? (
        <div>
          <div className="flex justify-center p-5 sm:flex-col">
            <div className="h-full md:w-2/3">
              <h1 className="text-lg font-bold">{`${
                title ? title : "Berita Terkini"
              }`}</h1>
              {currentPost?.map((data) => (
                <div className="flex p-4 sm:py-4" key={data.id}>
                  <Image
                    quality={30}
                    width={150}
                    height={150}
                    src={data.ImageURL ? data.ImageURL : ""}
                    alt=""
                    className="w-40 sm:w-28 pr-4 h-fit"
                  />
                  <div className="flex-col w-fit h-fit">
                    <Link href={`/post/${data.id}`}>
                      <p className="text-sm font-bold">{data.Judul}</p>
                    </Link>
                    <span className="flex items-center">
                      <p className="md:text-md sm:text-xs text-white uppercase font-bold bg-red-500 w-fit p-2 rounded-lg">
                        {data.Kategori}
                      </p>
                      <p className="font-bold sm:text-xs md:text-sm">
                        {data.created_at.substring(0, 10)}
                      </p>
                    </span>
                    <p className="text-sm text-gray-400">
                      {data.Isi_Berita?.substring(0, 100)}...
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
          <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            currentPost={currentPost}
            lenght={currentPost?.lenght}
          />
        </div>
      ) : (
        <ContentLoader />
      )}
    </>
  );
}
