"use client";

//趣味などを紹介するページ
import Image from "next/image";
import { useEffect, useState } from "react";

const Likes = () => {
  const [id, setId] = useState(0);
  useEffect(() => {
    const display = setInterval(() => {
      setId((prev) => (prev + 1) % samples.length);
    }, 5000);

    return () => {
      clearInterval(display);
      console.log("clear");
    };
  }, []);
  console.log(id);
  const samples = [
    "/samples/travel.jpg",
    "/samples/animal.jpg",
    "/samples/shapes.jpg",
    "/samples/sunflower.jpg",
  ];
  const travel = [
    "/Profile/travel/kiyomizu_temple.jpg",
    "/Profile/travel/matushima.jpg",
    "/Profile/travel/okinawa.jpg",
    "/Profile/travel/nagano.jpg",
  ];
  const coffee = [
    "/Profile/coffee/latte_art.jpg",
    "/Profile/coffee/coffee1.jpg",
    "/Profile/coffee/black_apron.jpg",
    "/Profile/coffee/coffee2.jpg",
  ];
  const music = [
    "/Profile/music/redio_crazy1.jpg",
    "/Profile/music/nee.jpg",
    "/Profile/music/redio_crazy2.jpg",
    "/Profile/music/king_gnu.jpg",
  ];
  const food = [
    "/Profile/food/gutan.jpg",
    "/Profile/food/italian.jpg",
    "/Profile/food/bbq.jpg",
    "/Profile/food/nodoguro.jpg",
  ];

  return (
    <main className="w-11/12 sm:w-5/6 2xl:w-4/5 flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-2 2xl:flex 2xl:flex-row justify-items-stretch gap-4 sm:gap-8 mt-8 sm:mt-14 text-base lg:text-lg text-white font-noto_sans_jp">
      <div className="relative flex-auto basis-1/4 aspect-[7/5] rounded-xl overflow-hidden bg-cover bg-center">
        {travel.map((val, index) => (
          <Image
            key={index}
            className={`object-cover object-center ${
              id === index
                ? "animate-slide-in-fwd-center"
                : "animate-slide-out-fwd-center"
            }`}
            alt="Sample image"
            src={val}
            fill={true}
          />
        ))}
        <div className="relative w-full h-full flex justify-center items-center hover:backdrop-brightness-50 opacity-0 hover:opacity-100">
          <label className="absolute top-4 left-4 lg:top-8 lg:left-8 font-oswald select-none">
            Travel
          </label>
          <p className="m-8 select-none">
            自然豊かな場所で綺麗な景色を見ることが好きです。
          </p>
        </div>
      </div>
      <div className="relative flex-auto basis-1/4 aspect-[7/5] rounded-xl overflow-hidden bg-cover bg-center">
        {coffee.map((val, index) => (
          <Image
            key={index}
            className={`object-cover object-center ${
              id === index
                ? "animate-slide-in-fwd-center"
                : "animate-slide-out-fwd-center"
            }`}
            alt="Sample image"
            src={val}
            fill={true}
          />
        ))}

        <div className="relative w-full h-full flex justify-center items-center hover:backdrop-brightness-50 opacity-0 hover:opacity-100">
          <label className="absolute top-4 left-4 lg:top-8 lg:left-8 font-oswald select-none">
            Coffee
          </label>
          <p className="m-8 select-none">
            いろいろなカフェや喫茶店にコーヒー巡りをしています。現在はラテアート修行中です。
          </p>
        </div>
      </div>
      <div className="relative flex-auto basis-1/4 aspect-[7/5] rounded-xl overflow-hidden bg-cover bg-center">
        {music.map((val, index) => (
          <Image
            key={index}
            className={`object-cover object-center ${
              id === index
                ? "animate-slide-in-fwd-center"
                : "animate-slide-out-fwd-center"
            }`}
            alt="Sample image"
            src={val}
            fill={true}
          />
        ))}

        <div className="relative w-full h-full flex justify-center items-center hover:backdrop-brightness-50 opacity-0 hover:opacity-100">
          <label className="absolute top-4 left-4 lg:top-8 lg:left-8 font-oswald select-none">
            Music
          </label>
          <p className="m-8 select-none">
            バンドが好きでよくライブに行きます。
          </p>
        </div>
      </div>
      <div className="relative flex-auto basis-1/4 aspect-[7/5] rounded-xl overflow-hidden bg-cover bg-center">
        {food.map((val, index) => (
          <Image
            key={index}
            className={`object-cover object-center ${
              id === index
                ? "animate-slide-in-fwd-center"
                : "animate-slide-out-fwd-center"
            }`}
            alt="Sample image"
            src={val}
            fill={true}
          />
        ))}

        <div className="relative w-full h-full flex justify-center items-center hover:backdrop-brightness-50 opacity-0 hover:opacity-100">
          <label className="absolute top-4 left-4 lg:top-8 lg:left-8 font-oswald select-none">
            Food
          </label>
          <p className="m-8 select-none">
            美味しいものを食べるために生きています。お酒も好きです。
          </p>
        </div>
      </div>
    </main>
  );
};

export default Likes;
