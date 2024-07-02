import Link from "next/link";
export default function Category() {
  return (
    <nav className="flex justify-center bg-slate-500 !overflow-auto ">
      <ul className="flex justify-evenly !sm:overflow-auto p-2 w-fit text-white">
        <Link href="/pekalongan">
          <li className="px-2">Pekalongan</li>
        </Link>
        <Link href="/kecantikan">
          <li className="px-2">Kecantikan</li>
        </Link>
        <Link href="/LifeStyle">
          <li className="px-2">LifeStyle</li>
        </Link>
        <Link href="/otomotif">
          <li className="px-2">Otomotif</li>
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
        <Link href="/bisnis">
          <li className="px-2">Bisnis</li>
        </Link>
        <Link href="/pendidikan">
          <li className="px-2">Pendidikan</li>
        </Link>
        <Link href="/nasional">
          <li className="px-2">Nasional</li>
        </Link>
        <Link href="/jateng">
          <li className="px-2">Jateng</li>
        </Link>
        <Link href="/Lain-lain">
          <li className="px-2">Lain-Lain</li>
        </Link>
        <Link href="/">
          <li className="px-2">Indeks</li>
        </Link>
      </ul>
    </nav>
  );
}
