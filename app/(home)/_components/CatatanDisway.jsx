import React from "react";
import Image from "next/image";
import Link from "next/link";

function CatatanDahlan() {
  return (
    <div>
      <div className="flex justify-evenly bg-red-600 p-4">
        <div className="relative w-8 h-8 object-cover">
          <Image
            src="/logo-disway-head.png"
            alt="disway"
            fill
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            loading="eager"
            blurDataURL="/logo-disway-head.png"
          />
        </div>
        <p className="text-white self-center">CATATAN DAHLAN ISKAN</p>
      </div>
      <div className="bg-white flex flex-col gap-2 p-2 text-black">
        <Link
          aria-label="link to article"
          href={
            "https://disway.id/read/798306/daging-babi?_gl=1*3oozdl*_ga*MjA2OTA1OTc5Mi4xNjk0NDk0ODU1*_ga_2BZPHNQNTD*MTcyMDAxNjc1MS4xMDEuMS4xNzIwMDE4MTY0LjYwLjAuMTUzNTcwMzA0Mg.."
          }
        >
          1. Daging Babi
        </Link>

        <Link
          aria-label="link to article"
          href={
            "https://disway.id/read/798010/pusat-data?_gl=1*1f9se6k*_ga*MjA2OTA1OTc5Mi4xNjk0NDk0ODU1*_ga_2BZPHNQNTD*MTcyMDAxNjc1MS4xMDEuMS4xNzIwMDE4MTY0LjYwLjAuMTUzNTcwMzA0Mg.."
          }
        >
          2. Pusat Data
        </Link>

        <Link
          aria-label="link to article"
          href={
            "https://disway.id/read/797654/terbakar-dibakar?_gl=1*1f9se6k*_ga*MjA2OTA1OTc5Mi4xNjk0NDk0ODU1*_ga_2BZPHNQNTD*MTcyMDAxNjc1MS4xMDEuMS4xNzIwMDE4MTY0LjYwLjAuMTUzNTcwMzA0Mg.."
          }
        >
          3. Terbakar? Dibakar?
        </Link>

        <Link
          aria-label="link to article"
          href={
            "https://disway.id/read/797461/gundah-marah?_gl=1*1f9se6k*_ga*MjA2OTA1OTc5Mi4xNjk0NDk0ODU1*_ga_2BZPHNQNTD*MTcyMDAxNjc1MS4xMDEuMS4xNzIwMDE4MTY0LjYwLjAuMTUzNTcwMzA0Mg.."
          }
        >
          4. Gundah Marah
        </Link>

        <Link
          aria-label="link to article"
          href={
            "https://disway.id/read/797189/humor-gagap?_gl=1*1f9se6k*_ga*MjA2OTA1OTc5Mi4xNjk0NDk0ODU1*_ga_2BZPHNQNTD*MTcyMDAxNjc1MS4xMDEuMS4xNzIwMDE4MTY0LjYwLjAuMTUzNTcwMzA0Mg.."
          }
        >
          5. Humor Gagap
        </Link>
      </div>
    </div>
  );
}

export default CatatanDahlan;
