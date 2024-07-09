import Image from "next/image";

export default function Terkini({ data, title = "TERKINI" }) {
  return (
    <div>
      <h1 className="text-xl font-bold my-4">{title}</h1>
      <div className="flex flex-col gap-2">
        {data?.slice(0, 5).map((data) => (
          <div className="flex gap-4 items-center" key={data.id}>
            <div className="relative min-w-40 sm:min-w-28 h-32 object-cover">
              <Image
                src={data.ImageURL ? data.ImageURL : ""}
                alt={data.Judul}
                fill
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
                loading="eager"
                blurDataURL="/logo-disway-head.png"
              />
            </div>
            <div className="flex flex-col justify-between">
              <h2 className="text-sm font-bold">{data.Judul}</h2>
              <div className="text-xs text-red-500 uppercase">
                {data.Kategori}
              </div>
              <div className="text-xs text-gray-500">
                {data.created_at.substring(0, 10)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
