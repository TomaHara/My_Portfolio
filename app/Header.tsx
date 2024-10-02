"use client";
import { useState } from "react";
import icons from "./iconlist";
import Link from "next/link";

const Header = () => {
  const [isActived, setIsActived] = useState(false);
  const [firstMounted, setFirstMounted] = useState(true);
  const handleClick = () => {
    setFirstMounted(false);
    setIsActived(!isActived);
  };

  const MobileNavigationMenu = () => {
    return (
      <nav className="w-full h-svh bg-blue-200 flex flex-col items-center justify-center">
        <ul className="flex flex-col items-start justify-center gap-10 text-3xl text-black">
          <li className=" hover:text-blue-400 transition duration-500">
            <Link className="flex gap-2" href="/" onClick={() => handleClick()}>
              <icons.home className="size-8" />
              Home
            </Link>
          </li>
          <li className=" hover:text-blue-400 transition duration-500">
            <Link
              className="flex gap-2"
              href="/Profile"
              onClick={() => handleClick()}
            >
              <icons.person className="size-8" />
              About
            </Link>
          </li>
          <li className=" hover:text-blue-400 transition duration-500">
            <Link
              className="flex gap-2"
              href="/#Works"
              onClick={() => {
                handleClick();
              }}
            >
              <icons.works className="size-8" />
              Works
            </Link>
          </li>
          <li className=" hover:text-blue-400 transition duration-500">
            <Link
              className="flex gap-2"
              href="mailto:pyonsuke0720@gmail.com"
              onClick={() => handleClick()}
            >
              <icons.mail className="size-8" />
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 drop-shadow-md bg-white h-16 flex items-center justify-between py-1 px-8">
        <Link href={"/"}>
          {" "}
          <h1 className="text-3xl font-oswald text-black">Toma.H Portfolio</h1>
        </Link>

        <ul className="hidden self-stretch sm:flex flex-row items-center justify-center gap-6 z-[0] text-[24px] text-black">
          <li className=" border-b-2 hover:text-blue-400 hover:border-blue-400 border-blue-400/0 trantirion duration-500">
            <Link href="/">Home</Link>
          </li>
          <li className=" border-b-2 hover:text-blue-400 hover:border-blue-400 border-blue-400/0 trantirion duration-500">
            <Link href="/Profile">About</Link>
          </li>
          <li className=" border-b-2 hover:text-blue-400 hover:border-blue-400 border-blue-400/0 trantirion duration-500">
            <Link href="/#Works">Works</Link>
          </li>
          <li className=" border-b-2 hover:text-blue-400 hover:border-blue-400 border-blue-400/0 trantirion duration-500">
            <Link href="mailto:pyonsuke0720@gmail.com">Contact</Link>
          </li>
        </ul>

        <button
          className="sm:hidden p-1 rounded-md text-black hover:bg-gray-200 transition-colors duration-500"
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
        className={`fixed top-0 left-0 w-full h-svh z-40 ${
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
