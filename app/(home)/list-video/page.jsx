"use client";

import { useEffect, useState } from "react";
import BannerIklan from "../_components/BannerIklan";
import CatatanDisway from "../_components/CatatanDisway";
import Terpopuler from "../_components/Terpopuler";
import Terkini from "../_components/Terkini";
import supabase from "@/app/config/supabaseConfig";
import Image from "next/image";

const ITEMS_PER_PAGE = 5; // Number of items per page

export default function page() {
  const [dataBerita, setData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);

  async function getData() {
    const from = (page - 1) * ITEMS_PER_PAGE;
    const to = page * ITEMS_PER_PAGE - 1;
    const { data } = await supabase
      .from("data-berita")
      .select()
      .range(from, to)
      .order("id", { ascending: false });
    setData(data);
  }

  return (
    <>
      <BannerIklan />
      <div className="container mx-auto flex">
        <div className="md:w-1/3">
          <CatatanDisway />
          <Terpopuler data={dataBerita} />
          <Terkini data={dataBerita} />
        </div>
        <div className="flex flex-col  md:w-2/3">
          <div className="p-4">
            <h1 className="text-xl font-bold mb-4">VIDEO TERKINI</h1>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/3 p-2">
                <div className="relative">
                  <Image
                    src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/video_0.jpg?t=2024-07-05T11%3A29%3A24.147Z"
                    alt="bebas"
                    // className="w-full h-48 object-cover"
                    width={200}
                    height={200}
                    quality={5}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-black bg-opacity-50 text-white rounded-full p-2">
                      ▶
                    </button>
                  </div>
                </div>
                <h2 className="text-sm font-bold mt-2">
                  Sindikat Perdagangan Makanan Kadaluarsa di Batang Diungkap
                </h2>
              </div>
              <div className="w-full md:w-1/3 p-2">
                <div className="relative">
                  <Image
                    src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/video_1.jpg?t=2024-07-05T11%3A33%3A48.786Z"
                    alt="bebas"
                    // className="w-full h-48 object-cover"
                    width={200}
                    height={200}
                    quality={5}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-black bg-opacity-50 text-white rounded-full p-2">
                      ▶
                    </button>
                  </div>
                </div>
                <h2 className="text-sm font-bold mt-2">
                  Detik-Detik Bus Pariwisata Terjun ke Jurang di Kawasan Wisat
                </h2>
              </div>
              <div className="w-full md:w-1/3 p-2">
                <div className="relative">
                  <Image
                    src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/video_2.jpg?t=2024-07-05T11%3A34%3A00.373Z"
                    alt="bebas"
                    // className="w-full h-48 object-cover"
                    width={200}
                    height={200}
                    quality={5}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-black bg-opacity-50 text-white rounded-full p-2">
                      ▶
                    </button>
                  </div>
                </div>
                <h2 className="text-sm font-bold mt-2">
                  Coldplay Konser di Indonesia 15 November
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/3 p-2">
                <div className="relative">
                  <Image
                    src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/video_3.jpg?t=2024-07-05T11%3A34%3A09.464Z"
                    alt="bebas"
                    // className="w-full h-48 object-cover"
                    width={200}
                    height={200}
                    quality={5}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-black bg-opacity-50 text-white rounded-full p-2">
                      ▶
                    </button>
                  </div>
                </div>
                <h2 className="text-sm font-bold mt-2">
                  Presiden Jokowi Lintasi Jalanan Rusak di Lampung
                </h2>
              </div>
              <div className="w-full md:w-1/3 p-2">
                <div className="relative">
                  <Image
                    src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/video_0.jpg?t=2024-07-05T11%3A29%3A24.147Z"
                    alt="bebas"
                    // className="w-full h-48 object-cover"
                    width={200}
                    height={200}
                    quality={5}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-black bg-opacity-50 text-white rounded-full p-2">
                      ▶
                    </button>
                  </div>
                </div>
                <h2 className="text-sm font-bold mt-2">Judul</h2>
              </div>
              <div className="w-full md:w-1/3 p-2">
                <div className="relative">
                  <Image
                    src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/video_0.jpg?t=2024-07-05T11%3A29%3A24.147Z"
                    alt="bebas"
                    // className="w-full h-48 object-cover"
                    width={200}
                    height={200}
                    quality={5}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-black bg-opacity-50 text-white rounded-full p-2">
                      ▶
                    </button>
                  </div>
                </div>
                <h2 className="text-sm font-bold mt-2">Judul</h2>
              </div>
            </div>
          </div>
          <BannerIklan />
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 p-2">
              <div className="relative">
                <Image
                  src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/video_0.jpg?t=2024-07-05T11%3A29%3A24.147Z"
                  alt="bebas"
                  // className="w-full h-48 object-cover"
                  width={200}
                  height={200}
                  quality={5}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-black bg-opacity-50 text-white rounded-full p-2">
                    ▶
                  </button>
                </div>
              </div>
              <h2 className="text-sm font-bold mt-2">Judul</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
