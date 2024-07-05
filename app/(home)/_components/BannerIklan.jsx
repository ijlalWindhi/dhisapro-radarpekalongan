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
      />
    </div>
  );
}
