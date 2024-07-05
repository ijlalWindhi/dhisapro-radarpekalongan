import Image from "next/image";
import Link from "next/link";

export default function Carousel({ items }) {
  console.log(items);
  return (
    <>
      <div className="bg-black w-fit">
        <div className=" bg-black">
          <div className=" shadow-md overflow-hidden">
            <Link
              href={
                "https://inforadar.disway.id/read/670787/8-kebiasaan-kecil-yang-membuat-seseorang-terlihat-sangat-menarik-dimata-orang-lain-cek-apa-saja"
              }
            >
              <p className="text-white font-bold">HEADLINE</p>
              <Image
                src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/4_Skincare_yang_Bikin_Putih_Bpom_Terbaik__Skincare_Murah_untuk_Kulit_Glowing_dan_Bebas_Masalah_Penuaan_Dini.jpg"
                alt="bebas"
                className="object-cover w-full"
                width={300}
                height={300}
                quality={100}
              />
              <div className="p-4 bg-black">
                <h1 className="text-sm font-semibold text-white">
                  4 Skincare yang Bikin Putih Bpom Terbaik, Skincare Murah untuk
                  Kulit Glowing dan Bebas Masalah Penuaan Dini
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="">
          <div className="sm:hidden bg-black flex sm:flex-col">
            {items?.slice(0, 4).map((item) => (
              <div className="" key={item.id}>
                <div className="px-2 shadow-md">
                  <Link href={`/post/${item.id}`}>
                    z
                    <Image
                      src={item.ImageURL}
                      alt="bebas"
                      // className="w-full h-48 object-cover"
                      width={100}
                      height={100}
                      quality={5}
                    />
                    <div className=" w-40 mx-1 bg-black">
                      <p className="text-sm text-white pr-10">{item.Judul}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
