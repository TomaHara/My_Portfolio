"use client";
import MobileNavigationMenu from "./MbileNavigationMenu";
import { useState } from "react";
import icons from "../iconlist";
import Link from "next/link";

const Header = () => {
  const [isActived, setIsActived] = useState(false);
  const [firstMounted, setFirstMounted] = useState(true);
  const handleClick = () => {
    setFirstMounted(false);
    setIsActived(!isActived);
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 drop-shadow-md bg-white h-16 overflow-y-auto shrink-0 flex flex-row items-center justify-between py-1 desktop:px-8 mobile:px-6 box-border text-center  text-black font-oswald">
        <Link href={"/"}>
          {" "}
          <h1 className="relative text-3xl whitespace-pre-wrap ">
            Toma.H Portfolio
          </h1>
        </Link>

        <ul className="mobile:hidden self-stretch flex flex-row items-center justify-center gap-6 z-[0] text-[24px] ">
          <li className="relative border-b-2 hover:text-blue-400 hover:border-blue-400 border-blue-400/0 trantirion duration-500">
            <Link href="/">Home</Link>
          </li>
          <li className="relative border-b-2 hover:text-blue-400 hover:border-blue-400 border-blue-400/0 trantirion duration-500">
            <Link href="/">About</Link>
          </li>
          <li className="relative border-b-2 hover:text-blue-400 hover:border-blue-400 border-blue-400/0 trantirion duration-500">
            <Link href="/">Works</Link>
          </li>
          <li className="relative border-b-2 hover:text-blue-400 hover:border-blue-400 border-blue-400/0 trantirion duration-500">
            <Link href="/">Contact</Link>
          </li>
        </ul>

        <button
          className="desktop:hidden p-1 rounded-md hover:bg-gray-200 transition-colors duration-500"
          type="button"
          onClick={() => handleClick()}
        >
          {isActived ? (
            <icons.close className="size-10 hover:text-red-500" />
          ) : (
            <icons.humburger className="size-10" />
          )}
        </button>
      </header>
      <div
        className={`fixed top-0 left-0 w-full h-screen shrink-0 z-40 ${
          firstMounted ? "hidden" : ""
        } ${
          isActived
            ? "animate-slide-in-bck-right"
            : "animate-slide-out-bck-right"
        }`}
      >
        <MobileNavigationMenu />
      </div>
    </>
  );
};

export default Header;
