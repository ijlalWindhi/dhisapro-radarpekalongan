import Link from "next/link";
export default function Category() {
  return (
    <nav className="flex justify-center bg-slate-500 !overflow-auto ">
      <ul className="flex justify-evenly !sm:overflow-auto p-2 w-fit text-white">
        <Link href="/pekalongan">
          <li className="px-2">Pekalongan</li>
        </Link>
        <Link href="/kajen">
          <li className="px-2">Kajen</li>
        </Link>
        <Link href="/batang">
          <li className="px-2">Batang</li>
        </Link>
        <Link href="/kendal">
          <li className="px-2">Kendal</li>
        </Link>
      </ul>
    </nav>
  );
}
