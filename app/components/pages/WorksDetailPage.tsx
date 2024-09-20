"use client";

import Image from "next/image";
import { useState } from "react";
import My_Works from "../../works";

const List = ({ text }: { text: string }) => {
  return (
    <li className="relative flex items-end text-left gap-2 my-px">
      <Image
        className="desktop:size-6 size-5 bg-contain aspect-square grow-0"
        alt="Sample image"
        src={"/MaterialSymbolsCheckCircle.png"}
        width={500}
        height={500}
      />
      {text}
    </li>
  );
};

//作品の詳細ページを表示するコンポーネント
const WorksDetailPage = ({ id }: { id: number }) => {
  const explanation = My_Works[id].description;
  const title = My_Works[id].title;

  const [picture, setPicture] = useState([0, 1, 2, 3]);

  const handleClick = (key: number) => {
    setPicture((prevPicture) => {
      const newPicture = { ...prevPicture };
      const temp = newPicture[0];
      newPicture[0] = newPicture[key];
      newPicture[key] = temp;
      return newPicture;
    });
  };
  return (
    <section className="w-full flex-1 shrink-0 relative flex flex-col  items-center justify-center">
      <main className="w-full flex-1 flex flex-col desktop:flex-row  items-center mobile:items-start mobile:justify-start justify-center p-14 mobile:py-3 box-border text-left text-black gap-6 desktop:gap-8 ">
        <div className="mobile:contents w-[800px] h-auto flex flex-col  gap-4 text-left text-black ">
          <div className="order-1 flex flex-col flex-auto gap-2">
            <h3 className="desktop:text-lg mobile:text-base font-oswald [text-decoration:underline] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Project
            </h3>
            <p className="desktop:text-5xl/normal mobile:text-4xl/normal font-oswald inline-block ">
              {title}
            </p>
          </div>
          <div className="order-3 desktop:min-h-[25vh] flex flex-col desktop:text-lg mobile:text-base gap-2">
            <h3 className="font-oswald [text-decoration:underline] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              About
            </h3>
            <p className="font-noto_sans_jp ">{explanation}</p>
          </div>
          <div className="order-4 flex flex-col desktop:text-lg mobile:text-base gap-2">
            <h3 className="font-oswald [text-decoration:underline] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
              Tools
            </h3>

            <ul className="list-none font-noto_sans_jp overflow-y-auto mb-5">
              <List text="TypeScript" />
              <List text="Tailwind CSS" />
              <List text="React" />
              <List text="Next.js" />
              <List text="Firebase" />
            </ul>
          </div>
        </div>
        <div className="mobile:contents w-[600px] lg:h-full h-3/4 flex flex-col">
          <div className="order-first mobile:hidden self-end mb-8 mr-8 p-1">
            <div className="size-12" />
          </div>

          <div className="order-2 w-full mobile:max-w-[400px] desktop:h-full mobile:shrink-0 text-center flex flex-col items-center justify-center text-lg gap-2">
            <div className="w-full h-1/4 flex items-center justify-center gap-2 p-1">
              <div
                className="relative h-full w-full mobile:max-w-[120px] desktop:max-w-[180px] aspect-[7/5] opacity-70 hover:opacity-100 overflow-hidden shadow-xl hover:scale-105 rounded-xl trantirion duration-500"
                onClick={() => handleClick(1)}
              >
                <Image
                  className="object-cover object-center"
                  alt="Sample image"
                  src={My_Works[id].img[picture[1]]}
                  fill={true}
                />
              </div>
              <div
                className="relative h-full w-full mobile:max-w-[120px] desktop:max-w-[180px] aspect-[7/5] opacity-70 hover:opacity-100 overflow-hidden shadow-xl hover:scale-105 rounded-xl trantirion duration-500"
                onClick={() => handleClick(2)}
              >
                <Image
                  className="object-cover object-center"
                  alt="Sample image"
                  src={My_Works[id].img[picture[2]]}
                  fill={true}
                />
              </div>
              <div
                className="relative h-full w-full mobile:max-w-[120px] desktop:max-w-[180px] aspect-[7/5] opacity-70 hover:opacity-100 overflow-hidden shadow-xl hover:scale-105 rounded-xl trantirion duration-500"
                onClick={() => handleClick(3)}
              >
                <Image
                  className="object-cover object-center"
                  alt="Sample image"
                  src={My_Works[id].img[picture[3]]}
                  fill={true}
                />
              </div>
            </div>
            <div className="overflow-hidden relative desktop:h-3/4 w-full desktop:min-w-[360px] mobile-max-w-[600px] aspect-[7/5] flex shadow-xl rounded-xl">
              <Image
                className="object-cover object-center"
                alt="Sample image"
                src={My_Works[id].img[picture[0]]}
                fill={true}
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default WorksDetailPage;
