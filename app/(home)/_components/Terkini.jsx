import Image from "next/image";

export default function Terkini({ data }) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">TERKINI</h1>
      {data?.slice(0, 5).map((data) => (
        <div className="flex mb-4" key={data.id}>
          <Image
            quality={10}
            width={100}
            height={100}
            src={data.ImageURL ? data.ImageURL : ""}
            alt=""
            className="min-w-40 sm:min-w-28 pr-4 "
          />
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
  );
}
