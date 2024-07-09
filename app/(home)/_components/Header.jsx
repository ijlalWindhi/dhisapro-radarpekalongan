import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[80%]">
      <div className="relative h-32 md:h-60 object-cover">
        <Image
          src="/BANNER_BATANG.webp"
          alt="Banner Batang"
          fill
          priority
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          loading="eager"
          blurDataURL="/BANNER_BATANG.webp"
        />
      </div>
      <div className="relative h-32 md:h-60 object-cover">
        <Image
          src="/BANNER_DPRD_KOTA.webp"
          alt="Header"
          fill
          priority
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          loading="eager"
          blurDataURL="/BANNER_DPRD_KOTA.webp"
        />
      </div>
    </div>
  );
}

export default Header;
