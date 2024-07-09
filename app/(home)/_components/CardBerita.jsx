import Image from "next/image";
import Link from "next/link";

function CardBerita({ data }) {
  return (
    <div className="flex flex-col md:flex-row p-4 sm:py-4 gap-4">
      <div className="relative min-w-40 sm:min-w-28 h-20 md:h-24 object-cover">
        <Image
          src={data.ImageURL ? data.ImageURL : ""}
          alt={data.Judul}
          fill
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          loading="eager"
          blurDataURL="/logo-disway-head.png"
          quality={10}
        />
      </div>
      <div className="flex flex-col min-w-40 sm:min-w-28 h-fit gap-2">
        <Link
          href={`/post/${data.id}`}
          className="font-semibold text-sm md:text-base"
          aria-label="link to post"
        >
          {data.Judul}
        </Link>
        <div className="flex items-center gap-2">
          <p className="text-white uppercase text-xs sm:text-sm font-bold bg-red-800 w-fit p-2 rounded-lg">
            {data.Kategori}
          </p>
          <p className="font-bold text-xs md:text-sm">
            {data.created_at.substring(0, 10)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardBerita;
