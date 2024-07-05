"use client";
import Link from "next/link";
import { AiOutlineBars, AiFillEdit, AiOutlineLogout } from "react-icons/ai";

export default function SidebarDashboard() {
  const handleLogout = () => {
    localStorage.removeItem("sb-zdgnipjmpjiqktbpdvjj-auth-token");
    window.location.replace("/dashboard");

    alert("Berhasil keluar");
  };
  return (
    <div className="w-1/6 h-screen bg-slate-500 flex">
      <ul className="p-1 text-white text-lg font-semibold w-full">
        <Link href={"/dashboard/tulis"}>
          <li className="my-2 p-4 hover:bg-slate-300 ">
            <span className="flex items-center">
              <AiFillEdit />
              <p className="mx-2">TULIS</p>
            </span>
          </li>
        </Link>
        <Link href={"/dashboard/listkonten"}>
          <li className="my-2 p-4 hover:bg-slate-300">
            <span className="flex items-center">
              <AiOutlineBars />

              <p className="mx-2">LIST KONTEN</p>
            </span>
          </li>
        </Link>
        <li className="my-2 p-4 hover:bg-slate-300" onClick={handleLogout}>
          <span className="flex items-center">
            <AiOutlineLogout />

            <p className="mx-2">KELUAR</p>
          </span>
        </li>
      </ul>
    </div>
  );
}
