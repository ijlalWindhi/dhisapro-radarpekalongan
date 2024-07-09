import Image from "next/image";
import Header from "./_components/Header";
import Caraousel from "./_components/Carousel";
import CatatanDisway from "./_components/CatatanDisway";
import Terpopuler from "./_components/Terpopuler";
import Terkini from "./_components/Terkini";
import CardBerita from "./_components/CardBerita";
import VideoSection from "./_components/VideoSection";
import NetworkSection from "./_components/NetworkSection";
import Pilihan from "./_components/Pilihan";

function Body({ data, title }) {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="flex justify-center p-5 sm:p-6 lg:p-10 flex-col md:flex-row w-full gap-4">
        <div className="flex flex-col gap-4 w-full md:w-3/4">
          <Caraousel />
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">{`${
              title ? title : "Berita Terkini"
            }`}</h1>
            {data?.slice(0, 5)?.map((data) => (
              <CardBerita data={data} key={data.id} />
            ))}
          </div>
          <div className="relative h-32 md:h-60 object-cover">
            <Image
              src="/BANNER_DPRD_KOTA.webp"
              alt="Header"
              fill
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              loading="eager"
              blurDataURL="/BANNER_DPRD_KOTA.webp"
            />
          </div>
          {data?.slice(6, 10)?.map((data) => (
            <CardBerita data={data} key={data.id} />
          ))}
          <div className="relative h-32 md:h-60 object-cover">
            <Image
              src="/BANNER_BATANG.webp"
              alt="Header"
              fill
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              loading="eager"
              blurDataURL="/BANNER_BATANG.webp"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/4">
          <CatatanDisway />
          <Terpopuler data={data} />
          <Terkini data={data} />
        </div>
      </div>
      <VideoSection title="Video" />
      <div className="flex justify-center p-5 sm:p-6 lg:p-10 flex-col md:flex-row w-full gap-4">
        <div className="flex flex-col gap-4 w-full md:w-3/4">
          {data?.slice(11, 15)?.map((data) => (
            <CardBerita data={data} key={data.id} />
          ))}
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/4">
          <Pilihan data={data} />
        </div>
      </div>
      <NetworkSection title="Network" />
      <div className="flex flex-col px-4 md:px-10 gap-2 self-start max-w-full">
        {data?.slice(16, 20)?.map((data) => (
          <CardBerita data={data} key={data.id} />
        ))}
      </div>
      <div className="w-full flex justify-between">
        <h2 className="font-semibold">Foto</h2>
        <h3 className="font-semibold">Lihat Semua</h3>
      </div>
      <div className="flex flex-col px-4 md:px-10 gap-2 self-start max-w-full">
        {data?.slice(21, 24)?.map((data) => (
          <CardBerita data={data} key={data.id} />
        ))}
      </div>
    </main>
  );
}

export default Body;
