"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineSearch,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const today = new Date();
const options = { year: "numeric", month: "long", day: "2-digit" };
const formattedDate = today.toLocaleDateString("id-ID", options);

export default function Navbar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    router.push(`/search?q=${query}`);
  };

  return (
    <nav className="flex justify-between p-4 mx-auto">
      <Link
        aria-label="link to home"
        href="/"
        className="sm:hidden relative w-6 h-6 lg:w-56 xl:w-72 md:h-9 object-cover"
      >
        <Image
          src="/Logo Radar Pekalongan 1.webp"
          alt="Radar Pekalongan Logo 1"
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </Link>
      <div className="flex place-content-center w-1/3 sm:w-2/3">
        <input
          type="text"
          className="ps-6 text-lg rounded-l-lg border-2 border-slate-200 outline-none w-full bg-slate-300 focus:ring-slate-500 focus:border-slate-500 md:h-14 sm:h-8"
          placeholder="Cari berita..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <AiOutlineSearch
          className="md:h-14 h-fit w-20 bg-slate-500 cursor-pointer text-white rounded-r-lg p-2 sm:w-8"
          onClick={handleSearch}
        />
      </div>
      <Link
        aria-label="link to page network"
        href={"/network"}
        className="bg-red-600 rounded-md md:w-40 md:h-14 flex items-center justify-center text-white p-2 sm:h-10 sm:mx-4"
      >
        Network
      </Link>
      <div className="sm:w-1/3">
        <span>{formattedDate}</span>
        <div className="flex">
          <Link
            aria-label="link to different page"
            href={"https://web.facebook.com/radarpekalongan/"}
          >
            <AiFillFacebook className="w-8 h-8 text-blue-400 sm:mx-1 sm:w-4" />
          </Link>
          <AiFillTwitterCircle className="w-8 h-8 text-blue-400 sm:mx-1 sm:w-4" />
          <Link
            aria-label="link to different page"
            href={"https://www.instagram.com/radarpekalongan/"}
          >
            <AiFillInstagram className="w-8 h-8 text-pink-600 sm:mx-1 sm:w-4" />
          </Link>
          <Link
            aria-label="link to different page"
            href={"https://www.youtube.com/@Radarpekalonganonline"}
          >
            <AiFillYoutube className="w-8 h-8 text-red-600 sm:mx-1 sm:w-4" />
          </Link>
          <AiOutlineWhatsApp className="w-8 h-8 text-green-500 sm:mx-1 sm:w-4" />
        </div>
      </div>
    </nav>
  );
}
