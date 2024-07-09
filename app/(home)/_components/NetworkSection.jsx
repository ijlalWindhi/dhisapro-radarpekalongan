import Image from "next/image";
import Link from "next/link";

const network = [
  {
    href: "https://inforadar.disway.id/read/670787/8-kebiasaan-kecil-yang-membuat-seseorang-terlihat-sangat-menarik-dimata-orang-lain-cek-apa-saja",
    src: "https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/network_1.jpeg?t=2024-07-05T12%3A11%3A49.686Z",
    alt: "bebas",
    width: 300,
    height: 300,
    quality: 5,
    category: "INFORADAR",
    title: "Sindikat Perdagangan Makanan Kadaluarsa di Batang Diungkap",
  },
  {
    href: "https://okuselatan.disway.id/read/647795/siap-siap-sriwijaya-ranau-grand-fondo-2024-segera-hadir-kembali-di-oku-selatan",
    src: "https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/network_2.jpg?t=2024-07-05T12%3A12%3A04.546Z",
    alt: "bebas",
    width: 300,
    height: 300,
    quality: 5,
    category: "OKU SELATAN",
    title: "Detik-Detik Bus Pariwisata Terjun ke Jurang di Kawasan Wisata",
  },
  {
    href: "https://disway.id/read/799186/tidak-perlu-antre-servis-motor-listrik-honda-di-bengkel-ahass-dapat-jalur-fast-track",
    src: "https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/network_3.jpg?t=2024-07-05T12%3A12%3A13.914Z",
    alt: "bebas",
    width: 300,
    height: 300,
    quality: 5,
    category: "DISWAY",
    title: "Coldplay Konser di Indonesia 15 November",
  },
  {
    href: "https://okes.disway.id/read/649598/waw-pelatih-gereja-memimpin-paduan-suara-di-mtq-ini",
    src: "https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/network_4.jpeg?t=2024-07-05T12%3A12%3A22.124Z",
    alt: "bebas",
    width: 300,
    height: 300,
    quality: 5,
    category: "OKES",
    title: "Presiden Jokowi Lintasi Jalanan Rusak di Lampung",
  },
];

export default function NetworkSection({ title, src = "/network" }) {
  return (
    <div className="container md:mx-auto">
      <div className=" flex justify-between">
        <h2 className="font-semibold">{title}</h2>
        <Link aria-label="link to different page" href={src}>
          <h3 className="font-semibold">Lihat Semua</h3>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-10 mt-4">
        {network.map((item, index) => (
          <div key={index} className="shadow-md rounded-lg overflow-hidden">
            <Link aria-label="link to different page" href={item.href}>
              <div className="relative h-32 md:h-60 object-cover">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  placeholder="blur"
                  loading="eager"
                  blurDataURL={item.src}
                />
              </div>
              <div className="p-4 bg-black">
                <h3 className="text-sm font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
