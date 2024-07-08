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
          <li className="flex items-center justify-start gap-1">
            {index + 1}
            <Link aria-label="link to different page" className="mx-2" href={`/post/${data.id}`}>
              {data.Judul}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
