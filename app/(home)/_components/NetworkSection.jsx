import Image from "next/image";
import Link from "next/link";

export default function NetworkSection({ title, src = "/network" }) {
  return (
    <div className="container md:mx-auto">
      <div className=" flex justify-between">
        <h2 className="font-semibold">{title}</h2>
        <Link
        aria-label="link to different page" href={src}>
          <h2 className="font-semibold">Lihat Semua</h2>
        </Link>
      </div>
      <div className="container mx-auto p-6 bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className=" shadow-md rounded-lg overflow-hidden">
            <Link
            aria-label="link to different page"
              href={
                "https://inforadar.disway.id/read/670787/8-kebiasaan-kecil-yang-membuat-seseorang-terlihat-sangat-menarik-dimata-orang-lain-cek-apa-saja"
              }
            >
              <Image
                src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/network_1.jpeg?t=2024-07-05T12%3A11%3A49.686Z"
                alt="bebas"
                // className="w-full h-48 object-cover"
                width={300}
                height={300}
                quality={5}
              />
              <div className="p-4 bg-black">
                <p className="text-blue-300">INFORADAR</p>
                <h3 className="text-sm font-semibold text-white">
                  Sindikat Perdagangan Makanan Kadaluarsa di Batang Diungkap
                </h3>
              </div>
            </Link>
          </div>
          <div className=" shadow-md rounded-lg overflow-hidden">
            <Link
            aria-label="link to different page"
              href={
                "https://okuselatan.disway.id/read/647795/siap-siap-sriwijaya-ranau-grand-fondo-2024-segera-hadir-kembali-di-oku-selatan"
              }
            >
              <Image
                src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/network_2.jpg?t=2024-07-05T12%3A12%3A04.546Z"
                alt="bebas"
                // className="w-full h-48 object-cover"
                width={300}
                height={300}
                quality={5}
              />
              <div className="p-4 bg-black">
                <p className="text-blue-300">OKU SELATAN</p>
                <h3 className="text-sm font-semibold text-white">
                  Detik-Detik Bus Pariwisata Terjun ke Jurang di Kawasan Wisata
                </h3>
              </div>
            </Link>
          </div>
          <div className=" shadow-md rounded-lg overflow-hidden">
            <Link
            aria-label="link to different page"
              href={
                "https://disway.id/read/799186/tidak-perlu-antre-servis-motor-listrik-honda-di-bengkel-ahass-dapat-jalur-fast-track"
              }
            >
              <Image
                src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/network_3.jpg?t=2024-07-05T12%3A12%3A13.914Z"
                alt="bebas"
                // className="w-full h-48 object-cover"
                width={300}
                height={300}
                quality={5}
              />
              <div className="p-4 bg-black">
                <p className="text-blue-300">DISWAY</p>
                <h3 className="text-sm font-semibold text-white">
                  Coldplay Konser di Indonesia 15 November
                </h3>
              </div>
            </Link>
          </div>
          <div className=" shadow-md rounded-lg overflow-hidden">
            <Link
            aria-label="link to different page"
              href={
                "https://okes.disway.id/read/649598/waw-pelatih-gereja-memimpin-paduan-suara-di-mtq-ini"
              }
            >
              <Image
                src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/network_4.jpeg?t=2024-07-05T12%3A12%3A22.124Z"
                alt="bebas"
                // className="w-full h-48 object-cover"
                width={300}
                height={300}
                quality={5}
              />
              <div className="p-4 bg-black">
                <p className="text-blue-300">OKES</p>
                <h3 className="text-sm font-semibold text-white">
                  Presiden Jokowi Lintasi Jalanan Rusak di Lampung
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
