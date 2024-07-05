import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Carousel() {
  const slides = [
    {
      url: "https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/5_Bedak_Bikin_Glowing_dengan_SPF_Tinggi_untuk_Perlindungan_Sinar_UV__Harga_Mulai_30_Ribuan_Aja.jpg",
    },
    {
      url: "https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/4_Parfum_Lokal_yang_Wanginya_Semerbak_dari_Kejauhan__Bisa_Buat_Orang_Mengenali_Kamu_dari_Jauh.jpg",
    },
    {
      url: "https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/5_Bedak_Bikin_Glowing_dengan_SPF_Tinggi_untuk_Perlindungan_Sinar_UV__Harga_Mulai_30_Ribuan_Aja.jpg",
    },

    {
      url: "https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/5_Bedak_Bikin_Glowing_dengan_SPF_Tinggi_untuk_Perlindungan_Sinar_UV__Harga_Mulai_30_Ribuan_Aja.jpg",
    },
    {
      url: "https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/4_Parfum_Lokal_yang_Wanginya_Semerbak_dari_Kejauhan__Bisa_Buat_Orang_Mengenali_Kamu_dari_Jauh.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[200] h-[400px] w-full m-auto p-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}
