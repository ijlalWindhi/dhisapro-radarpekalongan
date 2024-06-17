"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineSearch,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Navbar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setQuery("");
  };

  return (
    <nav className="flex justify-between p-5 sm:w-screen">
      <div className="w-1/6 h-fit sm:hidden">
        <Link href="/">
          <Image
            src="/Logo Radar Pekalongan 1.webp"
            width={250}
            height={250}
            alt="Radar Pekalongan Logo 1"
          />
        </Link>
      </div>
      <div className="flex place-content-center w-1/3 sm:w-2/3">
        <input
          type="text"
          className="ps-6 text-lg rounded-l-lg border-2 border-slate-200 outline-none w-full bg-slate-300 focus:ring-slate-500 focus:border-slate-500"
          placeholder="Cari berita..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Link href={`/search?search=${query}`} onClick={handleSearch}>
          <AiOutlineSearch className="h-fit w-20 bg-slate-500 text-white rounded-r-lg p-2 sm:w-8" />
        </Link>
      </div>
      <div className="sm:w-1/3">
        <ul className="flex">
          <Link href={"https://web.facebook.com/radarpekalongan/"}>
            <li>
              <AiFillFacebook className="w-8 h-8 text-blue-400 sm:mx-1 sm:w-6" />
            </li>
          </Link>
          <li>
            <AiFillTwitterCircle className="w-8 h-8 text-blue-400 sm:mx-1 sm:w-6" />
          </li>
          <Link href={"https://www.instagram.com/radarpekalongan/"}>
            <li>
              <AiFillInstagram className="w-8 h-8 text-pink-600 sm:mx-1 sm:w-6" />
            </li>
          </Link>
          <Link href={"https://www.youtube.com/@Radarpekalonganonline"}>
            <li>
              <AiFillYoutube className="w-8 h-8 text-red-600 sm:mx-1 sm:w-6" />
            </li>
          </Link>
          <li>
            <AiOutlineWhatsApp className="w-8 h-8 text-green-500 sm:mx-1 sm:w-6" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
