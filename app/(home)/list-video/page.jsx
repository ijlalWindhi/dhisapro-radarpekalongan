import BannerIklan from "../components/BannerIklan";
import CatatanDisway from "../components/CatatanDisway";
import Terpopuler from "../components/Terpopuler";

export default function page() {
  return (
    <>
      <BannerIklan />
      <div className="container mx-auto flex">
        <div>
          <CatatanDisway />
          <Terpopuler />
        </div>

        <div className="container mx-auto px-4 py-2">
          <div>
            <h1>VIDEO</h1>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* Top row */}
            <div className="col-span-2 bg-gray-200 rounded-lg px-4 py-2">
              <h1 className="text-2xl font-bold">VIDEO TERKINI</h1>
            </div>
            <div className="col-span-1 bg-gray-200 rounded-lg px-4 py-2">
              <h2 className="text-xl font-bold">DPLAY KONSER DI INDONE</h2>
            </div>
            {/* Middle row */}
            <div className="col-span-1 bg-gray-200 rounded-lg px-4 py-2">
              <h3 className="text-lg font-bold">Sindikat Perdagangan</h3>
              <p className="text-sm">Makanan Kadaluarsa di Batang Diungkap</p>
            </div>
            <div className="col-span-1 bg-gray-200 rounded-lg px-4 py-2">
              <h3 className="text-lg font-bold">Detik-Detik Bus Pariwisata</h3>
              <p className="text-sm">Terjun ke Jurang di Kawasan Wisata</p>
            </div>
            <div className="col-span-1 bg-gray-200 rounded-lg px-4 py-2">
              <h3 className="text-lg font-bold">
                Coldplay Konser di Indonesia
              </h3>
              <p className="text-sm">15 November</p>
            </div>
            {/* Bottom row */}
            <div className="col-span-2 bg-gray-200 rounded-lg px-4 py-2">
              <h2 className="text-xl font-bold">ETELAH</h2>
            </div>
            <div className="col-span-1 bg-gray-200 rounded-lg px-4 py-2">
              <h3 className="text-lg font-bold">Presiden Jokowi Lintasi</h3>
              <p className="text-sm">Jalanan Rusak di Lampung</p>
            </div>
          </div>
          <BannerIklan src="/BANNER_DPRD_KOTA.webp" />
          <div className="grid grid-cols-3 gap-4">
            {/* Top row */}
            <div className="col-span-1 bg-gray-200 rounded-lg px-4 py-2">
              <h2 className="text-xl font-bold">DPLAY KONSER DI INDONE</h2>
            </div>
            {/* Middle row */}
            <div className="col-span-1 bg-gray-200 rounded-lg px-4 py-2">
              <h3 className="text-lg font-bold">Sindikat Perdagangan</h3>
              <p className="text-sm">Makanan Kadaluarsa di Batang Diungkap</p>
            </div>
            <div className="col-span-1 bg-gray-200 rounded-lg px-4 py-2">
              <h3 className="text-lg font-bold">Detik-Detik Bus Pariwisata</h3>
              <p className="text-sm">Terjun ke Jurang di Kawasan Wisata</p>
            </div>
            <div className="col-span-1 bg-gray-200 rounded-lg px-4 py-2">
              <h3 className="text-lg font-bold">
                Coldplay Konser di Indonesia
              </h3>
              <p className="text-sm">15 November</p>
            </div>
            {/* Bottom row */}
            <div className="col-span-2 bg-gray-200 rounded-lg px-4 py-2">
              <h2 className="text-xl font-bold">ETELAH</h2>
            </div>
            <div className="col-span-1 bg-gray-200 rounded-lg px-4 py-2">
              <h3 className="text-lg font-bold">Presiden Jokowi Lintasi</h3>
              <p className="text-sm">Jalanan Rusak di Lampung</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
