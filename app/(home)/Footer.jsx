import Image from "next/image";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineSearch,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4 w-full mx-auto p-4 md:py-8 h-fit">
      <div className="flex justify-between sm:flex-col sm:items-center sm:justify-between">
        <Link
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
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 sm:my-4">
          <li>
            <Link
              href={"/Tentang-kami"}
              className="hover:underline me-4 md:me-6"
            >
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link
              href={"/Privacy-policy"}
              className="hover:underline me-4 md:me-6"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href={"/Redaksi"} className="hover:underline me-4 md:me-6">
              Redaksi
            </Link>
          </li>
          <li>
            <Link href={"/kontak"} className="hover:underline">
              Kontak
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-gray-100 p-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            {/* Logo and Social Media */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <div className="flex space-x-4">
                <Link href={"https://web.facebook.com/radarpekalongan/"}>
                  <AiFillFacebook className="w-8 h-8 text-blue-400 sm:mx-1 sm:w-4" />
                </Link>
                <Link href="#">
                  <AiFillTwitterCircle className="w-8 h-8 text-blue-400 sm:mx-1 sm:w-4" />
                </Link>
                <Link href={"https://www.youtube.com/@Radarpekalonganonline"}>
                  <AiFillYoutube className="w-8 h-8 text-red-600 sm:mx-1 sm:w-4" />
                </Link>
                <Link href={"https://www.instagram.com/radarpekalongan/"}>
                  <AiFillInstagram className="w-8 h-8 text-pink-600 sm:mx-1 sm:w-4" />
                </Link>
                <Link href="#">
                  <AiOutlineWhatsApp className="w-8 h-8 text-green-500 sm:mx-1 sm:w-4" />
                </Link>
              </div>
              <div className="mt-4 bg-gray-200 p-2 rounded-md">
                <p className="text-xs">Terverifikasi Dewan Pers</p>
                <p className="text-xs">No: 632/DP-Verifikasi/K/XII/2020</p>
              </div>
            </div>

            {/* Network Links */}
            <div className="w-full md:w-2/3">
              <h2 className="text-xl font-semibold mb-4">NETWORK</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
                <ul>
                  <li>
                    <Link
                      href="https://bantentv.com/"
                      className="text-blue-600"
                    >
                      Banten TV
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.bantenraya.com/"
                      className="text-blue-600"
                    >
                      Banten Raya
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.radarbanten.co.id/"
                      className="text-blue-600"
                    >
                      Radar Banten
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://radargarut.jabarekspres.com/"
                      className="text-blue-600"
                    >
                      Radar Garut
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://sukabumi.jabarekspres.com/"
                      className="text-blue-600"
                    >
                      Sukabumi
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      href="https://sumedang.jabarekspres.com/"
                      className="text-blue-600"
                    >
                      Sumedang
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://pasundanekspres.id/"
                      className="text-blue-600"
                    >
                      Pasundan Ekspres
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://jabarekspres.com/"
                      className="text-blue-600"
                    >
                      Jabar Ekspres
                    </Link>
                  </li>
                  <li>
                    <Link href="https://iknpos.id/" className="text-blue-600">
                      IKN Pos
                    </Link>
                  </li>
                  <li>
                    <Link href="https://fin.co.id/" className="text-blue-600">
                      FIN
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      href="https://radarpekalongan.disway.id/kategori/1/pekalongan#"
                      className="text-blue-600"
                    >
                      Kepulauan Riau
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://radarpekalongan.disway.id/kategori/1/pekalongan#"
                      className="text-blue-600"
                    >
                      Riau
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://radarpekalongan.disway.id/kategori/1/pekalongan#"
                      className="text-blue-600"
                    >
                      Sumut
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://radarpekalongan.disway.id/kategori/1/pekalongan#"
                      className="text-blue-600"
                    >
                      Sumatera Barat
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://radarpekalongan.disway.id/kategori/1/pekalongan#"
                      className="text-blue-600"
                    >
                      Aceh
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link
                      href="https://radarpena.disway.id/"
                      className="text-blue-600"
                    >
                      Radar Pena
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://pontianakinfo.disway.id"
                      className="text-blue-600"
                    >
                      Pontianak Info
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://silamparitv.disway.id/"
                      className="text-blue-600"
                    >
                      SilampariTV
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://okinews.disway.id/"
                      className="text-blue-600"
                    >
                      OKINEWS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://tangerangekspres.disway.id"
                      className="text-blue-600"
                    >
                      Tangerang Ekspres
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Link href="/network" className="text-blue-600">
              Lihat Semua
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <Link href={"/"} className="hover:underline">
          RADAR PEKALONGAN™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
