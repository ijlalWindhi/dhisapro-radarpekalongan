import Link from "next/link";

function Pilihan({ data }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">Pilihan</h2>
      <div className="flex flex-col gap-2 bg-white text-black p-4">
        {data?.slice(0, 4)?.map((data, index) => (
          <Link
            href={`/post/${data.id}`}
            aria-label="link to post"
            className="flex gap-2 cursor-pointer"
            key={data.id}
          >
            <div className="flex justify-center gap-2">
              {index + 1}
              <p>{data.Judul}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Pilihan;
