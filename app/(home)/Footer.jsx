"use client";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { footLinks, networkLinks, socialLinks } from "@/constants/footer";

const icons = {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineWhatsApp,
};

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4 w-full mx-auto p-4 md:py-8 h-fit">
      <div className="flex justify-between sm:flex-col sm:items-center sm:justify-between">
        <Link
          aria-label="link to page"
          href={"/"}
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/Logo RadarPekalonganBiru.webp"
            width={32}
            height={32}
            alt="Radar Pekalongan Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            RADAR PEKALONGAN
          </span>
        </Link>
        <div className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 sm:my-4">
          {footLinks.map((link, index) => (
            <div key={index} className="hover:underline me-4 md:me-6">
              <Link aria-label={`link to page ${link.label}`} href={link.href}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 p-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            {/* Logo and Social Media */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = icons[link.iconClass];
                  return (
                    <Link
                      key={index}
                      aria-label="link to page"
                      href={link.href}
                    >
                      <IconComponent
                        className={`w-8 h-8 ${link.colorClass} sm:mx-1 sm:w-4`}
                      />
                    </Link>
                  );
                })}
              </div>
              <div className="mt-4 bg-gray-200 text-black p-2 rounded-md">
                <p className="text-xs">Terverifikasi Dewan Pers</p>
                <p className="text-xs">No: 632/DP-Verifikasi/K/XII/2020</p>
              </div>
            </div>

            {/* Network Links */}
            <div className="w-full md:w-2/3">
              <h2 className="text-xl font-semibold mb-4 text-black">NETWORK</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
                {networkLinks.map((column, columnIndex) => (
                  <div key={columnIndex} className="flex flex-col gap-2">
                    {column.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        aria-label="link to page"
                        href={link.href}
                        className="text-blue-600"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Link
              aria-label="link to page"
              href="/network"
              className="text-blue-600"
            >
              Lihat Semua
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
        © 2024{" "}
        <Link aria-label="link to page" href={"/"} className="hover:underline">
          RADAR PEKALONGAN™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
