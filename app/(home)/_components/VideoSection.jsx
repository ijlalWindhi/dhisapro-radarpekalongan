import Image from "next/image";
import Link from "next/link";

const video = [
  {
    src: "https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/video_0.jpg?t=2024-07-05T11%3A29%3A24.147Z",
    alt: "bebas",
    width: 300,
    height: 300,
    quality: 5,
    title: "Sindikat Perdagangan Makanan Kadaluarsa di Batang Diungkap",
  },
  {
    src: "https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/video_1.jpg?t=2024-07-05T11%3A33%3A48.786Z",
    alt: "bebas",
    width: 300,
    height: 300,
    quality: 5,
    title: "Detik-Detik Bus Pariwisata Terjun ke Jurang di Kawasan Wisata",
  },
  {
    src: "https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/video_2.jpg?t=2024-07-05T11%3A34%3A00.373Z",
    alt: "bebas",
    width: 300,
    height: 300,
    quality: 5,
    title: "Coldplay Konser di Indonesia 15 November",
  },
  {
    src: "https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/video_3.jpg?t=2024-07-05T11%3A34%3A09.464Z",
    alt: "bebas",
    width: 300,
    height: 300,
    quality: 5,
    title: "Presiden Jokowi Lintasi Jalanan Rusak di Lampung",
  },
];

export default function VideoSection({ title, src = "/list-video" }) {
  return (
    <div className="container md:mx-auto">
      <div className=" flex justify-between">
        <h2 className="font-semibold">{title}</h2>
        <Link aria-label="link to different page" href={src}>
          <h3 className="font-semibold">Lihat Semua</h3>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
        {video.map((item, index) => (
          <div key={index} className="shadow-md rounded-lg overflow-hidden">
            <Link aria-label="link to different page" href={src}>
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
