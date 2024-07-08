import Image from "next/image";
import Link from "next/link";

export default function VideoSection({ title, src = "/list-video" }) {
  return (
    <div className="container md:mx-auto">
      <div className=" flex justify-between">
        <h2 className="font-semibold">{title}</h2>
        <Link aria-label="link to different page" href={src}>
          <h2 className="font-semibold">Lihat Semua</h2>
        </Link>
      </div>
      <div className="container mx-auto p-6 bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link aria-label="link to different page" href={src}>
              <Image
                src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/video_0.jpg?t=2024-07-05T11%3A29%3A24.147Z"
                alt="bebas"
                // className="w-full h-48 object-cover"
                width={300}
                height={300}
                quality={5}
              />
              <div className="p-4 bg-black">
                <h3 className="text-sm font-semibold text-white">
                  Sindikat Perdagangan Makanan Kadaluarsa di Batang Diungkap
                </h3>
              </div>
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link aria-label="link to different page" href={src}>
              <Image
                src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/video_1.jpg?t=2024-07-05T11%3A33%3A48.786Z"
                alt="bebas"
                // className="w-full h-48 object-cover"
                width={300}
                height={300}
                quality={5}
              />
              <div className="p-4 bg-black">
                <h3 className="text-sm font-semibold text-white">
                  Detik-Detik Bus Pariwisata Terjun ke Jurang di Kawasan Wisata
                </h3>
              </div>
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link aria-label="link to different page" href={src}>
              <Image
                src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/video_2.jpg?t=2024-07-05T11%3A34%3A00.373Z"
                alt="bebas"
                // className="w-full h-48 object-cover"
                width={300}
                height={300}
                quality={5}
              />
              <div className="p-4 bg-black">
                <h3 className="text-sm font-semibold text-white">
                  Coldplay Konser di Indonesia 15 November
                </h3>
              </div>
            </Link>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Link aria-label="link to different page" href={src}>
              <Image
                src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/video_3.jpg?t=2024-07-05T11%3A34%3A09.464Z"
                alt="bebas"
                // className="w-full h-48 object-cover"
                width={300}
                height={300}
                quality={5}
              />
              <div className="p-4 bg-black">
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
