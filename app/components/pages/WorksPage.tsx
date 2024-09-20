"use client";

import Image from "next/image";
import { useState } from "react";
import My_Works from "../../works";
import WoeksDetailPage from "./WorksDetailPage";
import icons from "../../iconlist";

//制作物を紹介するページ
const WorksPage = () => {
  const ScreenShot = ({ id }: { id: number }) => {
    const [worksId, setWorksId] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = (id: number | null) => {
      id ? setWorksId(id) : setWorksId(0);
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };
    const img = My_Works[id].img[0];
    const explanation = My_Works[id].description;
    const title = My_Works[id].title;
    return (
      <>
        <div
          className="h-full desktop:aspect-square aspect-[5/7] items-stretch relative  overflow-hidden opacity-70 hover:opacity-100 shrink-0 flex flex-col justify-start p-3 box-border desktop:gap-4 gap-3 text-left text-black rounded-2xl cursor-pointer trantiton hover:translate-x-1 hover:-translate-y-1 duration-300"
          onClick={() => openModal(id)}
        >
          <div className="relative aspect-[7/4] shrink-0 overflow-hidden rounded-2xl shadow-xl">
            <Image
              className="object-cover object-center"
              alt="Sample image"
              src={img}
              fill={true}
            />
          </div>

          <div className="desktop:text-2xl/normal text-xl text-left font-oswald border-t border-gray-300">
            {title}
          </div>
          <div className="desktop:text-lg text-base text-left font-noto-sans-jp line-clamp-3">
            {explanation}
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-screen overflow-y-auto flex justify-center items-center z-50 bg-white ${
            isModalOpen ? "" : "hidden"
          }`}
        >
          <main className="relative mobile:mt-56 w-full flex flex-col justify-start items-center z-[70]">
            <button
              type="button"
              className=" self-end mr-20 desktop:mr-36 desktop:mt-28 z-[80] p-1 rounded-md bg-gray-200 transition-colors duration-500"
              onClick={() => closeModal()}
            >
              <icons.close className="size-12 hover:text-red-500" />
            </button>
            <WoeksDetailPage id={worksId} />
          </main>
        </div>
      </>
    );
  };
  return (
    <section className="w-full h-screen shrink-0 relative overflow-hidden flex flex-col items-center justify-center desktop:min-h-[700px] mobile:min-h-[640px]">
      <main className="w-full overflow-hidden flex flex-col items-center justify-center p-14 box-border desktop:gap-16 mobile:gap-8  text-black ">
        <h1 className="relative desktop:text-5xl mobile:text-4xl [text-decoration:underline] font-oswald text-center [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          Works
        </h1>
        <div className="w-full h-[50vh] relative overflow-x-auto overscroll-x-contain flex items-center justify-start p-2 box-border desktop:gap-10 gap-4">
          <ScreenShot id={0} />
          <ScreenShot id={1} />
          <ScreenShot id={2} />
          <ScreenShot id={3} />
          <ScreenShot id={4} />
        </div>
      </main>
    </section>
  );
};

export default WorksPage;
