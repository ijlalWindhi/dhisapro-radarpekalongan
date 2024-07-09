import Link from "next/link";
import React from "react";

function Terpopuler({ data }) {
  return (
    <div className="my-4">
      <h2 className="text-lg font-bold">TERPOPULER</h2>
      <div className="bg-slate-400 text-black flex flex-col gap-2 p-4">
        {data?.slice(0, 5).map((data, index) => (
          <Link
            key={data.id}
            aria-label="link to post page"
            href={`/post/${data.id}`}
            className="flex items-start justify-start gap-2"
          >
            {index + 1}
            <p>{data.Judul}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Terpopuler;
