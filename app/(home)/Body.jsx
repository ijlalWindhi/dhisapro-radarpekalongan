"use client";

import Image from "next/image";
import Link from "next/link";
import ContentLoader from "./components/ContentLoader";
import Pagination from "./components/Pagination";
import Carousel from "./components/Carousel";

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
          <div className="container md:mx-auto">
            <div className="flex justify-center w-full md:p-4">
              <Image
                src="/iklan_banner_satu.jpg"
                width={1200}
                height={250}
                quality={20}
                alt="iklan honda"
                priority={true}
              />
            </div>
            <div className="flex justify-center w-full md:p-4">
              <Image
                src="/iklan_banner_dua.png"
                width={1200}
                height={50}
                quality={20}
                alt="iklan honda"
                priority={true}
              />
            </div>
            <div className="flex justify-center p-5 sm:flex-col">
              <div>
                <Carousel />
                <div className="h-full ">
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
                        className="min-w-40 sm:min-w-28 pr-4 "
                      />
                      <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                        <Link
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
                    <Image
                      src="/BANNER_DPRD_KOTA.jpg"
                      width={1000}
                      height={250}
                      quality={50}
                      alt="iklan honda"
                      priority={true}
                    />
                  </div>
                  <div>
                    <div className="h-full ">
                      {data.map((data) => (
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
                        <Image
                          src="/BANNER_BATANG.jpg"
                          width={1000}
                          height={250}
                          quality={50}
                          alt="iklan honda"
                          priority={true}
                        />
                      </div>
                      <div>halo</div>
                      <div className="container md:mx-auto">
                        <h2 className="font-semibold">VIDEO</h2>
                        <div className="bg-yellow-200 w-200 h-30">
                          <span className="bg-yellow-200 w-200 h-30"></span>
                        </div>
                      </div>
                      <div className="container md:mx-auto flex justify-between">
                        <h2 className="font-semibold">VIDEO</h2>
                        <h2 className="font-semibold">VIDEO</h2>
                        <h2 className="font-semibold">VIDEO</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-full md:w-1/3">
                <div>
                  <div cl></div>
                </div>
                <div className="">
                  <span className="flex justify-evenly bg-red-600 p-2">
                    {" "}
                    <Image
                      src="/logo-disway-head.png"
                      width={40}
                      height={40}
                      quality={20}
                      alt="iklan honda"
                      priority={true}
                    />
                    <p className="text-white self-center">
                      CATATAN DAHLAN ISKAN
                    </p>
                  </span>
                  <ul className="bg-white p-2">
                    <Link
                      href={
                        "https://disway.id/read/798306/daging-babi?_gl=1*3oozdl*_ga*MjA2OTA1OTc5Mi4xNjk0NDk0ODU1*_ga_2BZPHNQNTD*MTcyMDAxNjc1MS4xMDEuMS4xNzIwMDE4MTY0LjYwLjAuMTUzNTcwMzA0Mg.."
                      }
                    >
                      <li className="p-2">1. Daging Babi</li>
                    </Link>
                    <Link
                      href={
                        "https://disway.id/read/798010/pusat-data?_gl=1*1f9se6k*_ga*MjA2OTA1OTc5Mi4xNjk0NDk0ODU1*_ga_2BZPHNQNTD*MTcyMDAxNjc1MS4xMDEuMS4xNzIwMDE4MTY0LjYwLjAuMTUzNTcwMzA0Mg.."
                      }
                    >
                      <li className="p-2">2. Pusat Data</li>
                    </Link>
                    <Link
                      href={
                        "https://disway.id/read/797654/terbakar-dibakar?_gl=1*1f9se6k*_ga*MjA2OTA1OTc5Mi4xNjk0NDk0ODU1*_ga_2BZPHNQNTD*MTcyMDAxNjc1MS4xMDEuMS4xNzIwMDE4MTY0LjYwLjAuMTUzNTcwMzA0Mg.."
                      }
                    >
                      <li className="p-2">3. Terbakar? Dibakar?</li>
                    </Link>
                    <Link
                      href={
                        "https://disway.id/read/797461/gundah-marah?_gl=1*1f9se6k*_ga*MjA2OTA1OTc5Mi4xNjk0NDk0ODU1*_ga_2BZPHNQNTD*MTcyMDAxNjc1MS4xMDEuMS4xNzIwMDE4MTY0LjYwLjAuMTUzNTcwMzA0Mg.."
                      }
                    >
                      <li className="p-2">4. Gundah Marah</li>
                    </Link>
                    <Link
                      href={
                        "https://disway.id/read/797189/humor-gagap?_gl=1*1f9se6k*_ga*MjA2OTA1OTc5Mi4xNjk0NDk0ODU1*_ga_2BZPHNQNTD*MTcyMDAxNjc1MS4xMDEuMS4xNzIwMDE4MTY0LjYwLjAuMTUzNTcwMzA0Mg.."
                      }
                    >
                      <li className="p-2">5. Humor Gagap</li>
                    </Link>
                  </ul>
                </div>
                <div>
                  <h2 className="text-lg font-bold">TERPOPULER</h2>
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
                <div>
                  <h2 className="text-lg font-bold">Pilihan</h2>
                  {data?.slice(0, 5).map((data, index) => (
                    <ul
                      className=" text-black p-4 flex cursor-pointer"
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
            </div>

            {/* <Pagination
              setPage={setPage}
              page={page}
              getData={getData}
              handleNext={handleNext}
              handlePrevious={handlePrevious}

              // lenght={currentPost?.lenght}
            /> */}
          </div>
        </div>
      ) : (
        <ContentLoader />
      )}
    </>
  );
}
