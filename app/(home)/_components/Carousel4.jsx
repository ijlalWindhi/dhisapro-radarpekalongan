import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carousel4() {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  return (
    <div className="overflow-hidden relative max-w-lg w-72 h-32 md:w-full md:h-auto m-5 md:m-0">
      <div
        className={`flex transition ease-out duration-40 w-72 h-32 md:w-full md:h-auto`}
        style={{
          transform: `translateX(-${current * 25}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((s) => {
          return <img key={s} src={s} alt="caraousel" className="w-72 h-32 md:w-full md:h-56" />;
        })}
        <div className="absolute">
          <p>bebas</p>
        </div>
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button aria-label="button prev" onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button aria-label="button next" onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
