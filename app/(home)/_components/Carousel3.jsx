import Image from "next/image";
import React from "react";

export default function Carousel3() {
  return (
    <div id="default-carousel" className="relative w-64" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className=" duration-700 ease-in-out" data-carousel-item>
          <Image
            src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/4_Parfum_Cowok_di_Indomaret_yang_Wanginya_Menggoda__Aromanya_Mewah_dan_Maskulin_Mulai_dari_30_Ribu_saja.jpg?t=2024-07-06T11%3A34%3A58.187Z"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            width={300}
            height={300}
          />
          <p>coba kita isi</p>
        </div>

        <div className=" duration-700 ease-in-out" data-carousel-item>
          <Image
            src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/5_Alasan_Mengapa_Anda_Harus_Membeli_Honda_ADV_160.jpg?t=2024-07-06T11%3A42%3A32.600Z"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            width={300}
            height={300}
          />
        </div>

        <div className=" duration-700 ease-in-out" data-carousel-item>
          <Image
            src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/5_Maskara_Waterproof_Terbaik_Tahan_Lama_Harga_Terjangkau__Anti_Air_Anti_Gesek_Bulu_Mata_Lentik_Seharian_.jpg?t=2024-07-06T11%3A42%3A42.659Z"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            width={300}
            height={300}
          />
        </div>

        <div className=" duration-700 ease-in-out" data-carousel-item>
          <Image
            src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/All_New_Honda_BeAT_Resmi_Mengaspal_di_Jawa_Tengah__Ini_Spesifikasi_dan_Harganya.jpg?t=2024-07-06T11%3A42%3A52.360Z"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            width={300}
            height={300}
          />
        </div>

        <div className=" duration-700 ease-in-out" data-carousel-item>
          <Image
            src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/Bagaimana_Cara_Mengatasi_Badan_Lemas_dan_Lelah_yang_Aman_untuk_Lansia_Usia_60_Tahun_ke_Atas_Yuk_Cek_di_Sini.jpg?t=2024-07-06T11%3A43%3A03.621Z"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>

      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
