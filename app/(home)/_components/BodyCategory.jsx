"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "./Carousel";
import CatatanDisway from "./CatatanDisway";
import Terpopuler from "./Terpopuler";
import Terkini from "./Terkini";
import Pagination from "./Pagination";
import ContentLoader from "./ContentLoader";
import BannerIklan from "./BannerIklan";

export default function BodyCategory({
  title,
  data,
  total,
  current,
  onPageChange,
  // setPage,
  // page,
  // getData,
  // handleNext,
  // handlePrevious,
}) {
  return (
    <>
      {data ? (
        <div>
          <div className="container md:mx-auto">
            {/* banner 1 */}
            <div className="h-60 m-5 bg-gray-100 flex items-center justify-center">
              <div className="w-full bg-white border-b"></div>
            </div>
            {/* banner 2 */}
            <div className="h-60 m-5 bg-gray-100 flex items-center justify-center">
              <div className="w-full bg-white border-b"></div>
            </div>
            <div className="flex justify-center p-5 sm:flex-col">
              <div>
                <Carousel />
                <div className="h-full ">
                  <h1 className="text-lg font-bold">{`${
                    title ? title : "Berita Terkini"
                  }`}</h1>
                  {data?.slice(0, 5).map((data) => (
                    <div className="flex p-4 sm:py-4" key={data.id}>
                      <Image
                        quality={30}
                        width={150}
                        height={150}
                        src={data.ImageURL ? data.ImageURL : ""}
                        alt=""
                        className="min-w-40 sm:min-w-28 pr-4 "
                      />
                      <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                        <Link
                        aria-label="link to different page"
                          href={`/post/${data.id}`}
                          className="font-semibold "
                        >
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
                  <div className="flex justify-center w-full md:p-4">
                    <BannerIklan src={"/BANNER_DPRD_KOTA.webp"} />
                  </div>
                  <div>
                    <div className="h-full ">
                      {data?.slice(6, 10).map((data) => (
                        <div className="flex p-4 sm:py-4" key={data.id}>
                          <Image
                            quality={30}
                            width={150}
                            height={150}
                            src={data.ImageURL ? data.ImageURL : ""}
                            alt=""
                            className="min-w-40 sm:min-w-28 pr-4 "
                          />
                          <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                            <Link
                            aria-label="link to different page"
                              href={`/post/${data.id}`}
                              className="font-semibold "
                            >
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
                      <div className="flex justify-center w-full md:p-4">
                        <BannerIklan src={"/BANNER_BATANG.webp"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-full md:w-1/3">
                <div>
                  <div></div>
                </div>
                <CatatanDisway />
                <Terpopuler data={data} />
                <Terkini data={data} />
              </div>
            </div>
            <div className="flex justify-center p-5 sm:flex-col">
              <div>
                <div className="h-full ">
                  {data?.slice(11, 15).map((data) => (
                    <div className="flex p-4 sm:py-4" key={data.id}>
                      <Image
                        quality={30}
                        width={150}
                        height={150}
                        src={data.ImageURL ? data.ImageURL : ""}
                        alt=""
                        className="min-w-40 sm:min-w-28 pr-4 "
                      />
                      <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                        <Link
                        aria-label="link to different page"
                          href={`/post/${data.id}`}
                          className="font-semibold "
                        >
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
              </div>

              <div className="w-full h-full md:w-1/3"></div>
            </div>
            <div className="flex justify-center p-5 sm:flex-col">
              <div>
                <div className="h-full ">
                  {data?.slice(16, 20).map((data) => (
                    <div className="flex p-4 sm:py-4" key={data.id}>
                      <Image
                        quality={30}
                        width={150}
                        height={150}
                        src={data.ImageURL ? data.ImageURL : ""}
                        alt=""
                        className="min-w-40 sm:min-w-28 pr-4 "
                      />
                      <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                        <Link
                        aria-label="link to different page"
                          href={`/post/${data.id}`}
                          className="font-semibold "
                        >
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
              </div>

              <div className="w-full h-full md:w-1/3">
                <div>
                  <h2 className="text-lg font-bold">Pilihan</h2>
                  {data?.slice(0, 5).map((data, index) => (
                    <ul
                      className=" text-black p-4 flex cursor-pointer bg-white"
                      key={data.id}
                    >
                      <li className="flex items-center justify-start gap-1">
                        {index + 1}
                        <Link
                        aria-label="link to different page" href={`/post/${data.id}`}>
                          <li className="mx-2">{data.Judul}</li>
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>

            <Pagination
              total={total}
              current={current}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      ) : (
        <ContentLoader />
      )}
    </>
  );
}
