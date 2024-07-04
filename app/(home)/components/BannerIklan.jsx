import Image from "next/image";

export default function BannerIklan({ src }) {
  return (
    <div className="flex justify-center w-full md:p-4">
      <Image
        src={src}
        width={1200}
        height={250}
        quality={10}
        alt="iklan honda"
        priority={true}
      />
    </div>
  );
}
