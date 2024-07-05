import Link from "next/link";

export default function HeaderDashboard() {
  return (
    <div className=" w-full bg-slate-500 p-10">
      <Link href={"/dashboard"}>
        <p className="font-bold text-white text-2xl">ADMIN DASHBOARD</p>
      </Link>
    </div>
  );
}
