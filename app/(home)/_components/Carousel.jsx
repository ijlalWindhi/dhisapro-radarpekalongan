import Image from "next/image";
import Link from "next/link";

export default function Carousel({ items }) {
  console.log(items);
  return (
    <>
      <div className="">
        <div className="px-4 shadow-md rounded-lg overflow-hidden place-content-center object-fill">
          <Link href={`/post`}>
            <Image
              src={
                "https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/4_Cara_Hilangkan_Uban_Dalam_1_Malam_Dengan_Bahan_Dapur__Rambut_jadi_Hitam_Permanen_Cuma_Pakai_1_Bahan.jpg"
              }
              alt="bebas"
              className="w-full object-cover"
              width={500}
              height={200}
              quality={5}
            />
            <div className="p-2 bg-black">
              <h3 className="text-sm font-semibold text-white">Judul</h3>
            </div>
          </Link>
        </div>
      </div>
      <div className="container md:mx-auto">
        <div className="sm:hidden container p-6 bg-black flex sm:flex-col">
          {items?.slice(0, 5).map((item) => (
            <div className="" key={item.id}>
              <div className="px-4 shadow-md rounded-lg overflow-hidden">
                <Link href={`/post${item.id}`}>
                  z
                  <Image
                    src={item.ImageURL}
                    alt="bebas"
                    // className="w-full h-48 object-cover"
                    width={200}
                    height={200}
                    quality={5}
                  />
                  <div className="p-2 bg-black">
                    <h3 className="text-sm font-semibold text-white">
                      {item.Judul}
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
