import Image from "next/image";

export default function BannerIklan({ src = "/iklan_banner_satu.webp" }) {
  return (
    <div className="flex justify-center w-full md:p-4">
      <Image
        src={src}
        width={1000}
        height={150}
        quality={10}
        alt="iklan honda"
        priority
        placeholder="blur"
        blurDataURL="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/iklan_banner_dua.webp?t=2024-07-05T17%3A28%3A51.800Z"
      />
    </div>
  );
}
