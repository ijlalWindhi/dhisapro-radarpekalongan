import Link from "next/link";
export default function Category() {
  return (
    <nav className="flex justify-center bg-slate-500 !overflow-auto ">
      <ul className="flex justify-evenly !sm:overflow-auto p-2 w-fit text-white">
        <li className="px-2">
          <Link aria-label="link to city" href="/pekalongan">
            Pekalongan
          </Link>
        </li>
        <li className="px-2">
          <Link aria-label="link to city" href="/kecantikan">
            Kecantikan
          </Link>
        </li>
        <li className="px-2">
          <Link aria-label="link to city" href="/LifeStyle">
            LifeStyle
          </Link>
        </li>
        <li className="px-2">
          <Link aria-label="link to city" href="/otomotif">
            Otomotif
          </Link>
        </li>
        <li className="px-2">
          <Link aria-label="link to city" href="/kajen">
            Kajen
          </Link>
        </li>
        <li className="px-2">
          <Link aria-label="link to city" href="/batang">
            Batang
          </Link>
        </li>
        <li className="px-2">
          <Link aria-label="link to city" href="/kendal">
            Kendal
          </Link>
        </li>
        <li className="px-2">
          <Link aria-label="link to city" href="/bisnis">
            Bisnis
          </Link>
        </li>
        <li className="px-2">
          <Link aria-label="link to city" href="/pendidikan">
            Pendidikan
          </Link>
        </li>
        <li className="px-2">
          <Link aria-label="link to city" href="/nasional">
            Nasional
          </Link>
        </li>
        <li className="px-2">
          <Link aria-label="link to city" href="/jateng">
            Jateng
          </Link>
        </li>
        <li className="px-2">
          <Link aria-label="link to city" href="/Lain-lain">
            Lain-Lain
          </Link>
        </li>
        <li className="px-2">
          <Link aria-label="link to city" href="/indeks">
            Indeks
          </Link>
        </li>
      </ul>
    </nav>
  );
}
