import Link from "next/link";

export default function Terpopuler({ data }) {
  return (
    <div>
      <h2 className="text-lg font-bold">TERPOPULER</h2>
      {data?.slice(0, 5).map((data, index) => (
        <ul
          className="bg-slate-400 text-white p-4 flex cursor-pointer"
          key={data.id}
        >
          {index + 1}
          <Link href={`/post/${data.id}`}>
            <li className="mx-2">{data.Judul}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
}
