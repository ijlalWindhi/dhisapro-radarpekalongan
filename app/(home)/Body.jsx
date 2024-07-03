"use client";

import Image from "next/image";
import Link from "next/link";
import ContentLoader from "./components/ContentLoader";
import Pagination from "./components/Pagination";

export default function Body({
  title,
  data,
  setPage,
  page,
  getData,
  handleNext,
  handlePrevious,
}) {
  return (
    <>
      {data ? (
        <div>
          <div className="flex justify-center p-5 sm:flex-col">
            <div className="h-full md:w-2/3">
              <h1 className="text-lg font-bold">{`${
                title ? title : "Berita Terkini"
              }`}</h1>
              {data.map((data) => (
                <div className="flex p-4 sm:py-4" key={data.id}>
                  <Image
                    quality={30}
                    width={150}
                    height={150}
                    src={data.ImageURL ? data.ImageURL : ""}
                    alt=""
                    className="min-w-40 sm:min-w-28 pr-4 h-fit"
                  />
                  <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                    <Link href={`/post/${data.id}`} className="font-semibold ">
                      {data.Judul}
                    </Link>
                    <span className="flex items-center">
                      <p className="sm:text-xs text-white uppercase font-bold bg-red-500 w-fit p-2 rounded-lg">
                        {data.Kategori}
                      </p>
                      <p className="font-bold text-sm">
                        {data.created_at.substring(0, 10)}
                      </p>
                    </span>
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
            setPage={setPage}
            page={page}
            getData={getData}
            handleNext={handleNext}
            handlePrevious={handlePrevious}

            // lenght={currentPost?.lenght}
          />
        </div>
      ) : (
        <ContentLoader />
      )}
    </>
  );
}
