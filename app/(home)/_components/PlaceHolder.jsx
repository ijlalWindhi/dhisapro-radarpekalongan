import React from "react";

export default function PlaceHolder() {
  return (
    <div className="flex p-4 sm:py-4">
      <div className="min-w-40 sm:min-w-28 pr-4 h-fit">Loading</div>
      <div className="flex-col">
        <Link aria-label="link to different page" href={`/post/${data.id}`} className="font-semibold ">
          {data.Judul}
        </Link>
        <span className="flex items-center">
          <p className="sm:text-xs text-white uppercase font-bold bg-red-500 w-fit p-2 rounded-lg">
            Loading
          </p>
          <p className="font-bold text-sm">Loading</p>
        </span>
      </div>
    </div>
  );
}
