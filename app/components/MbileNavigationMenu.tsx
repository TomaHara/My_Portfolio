//ハンバーガーボタンを押して表示される、モバイル用のナビゲーションメニュー
import React from "react";
import icons from "../iconlist";
import Link from "next/link";

const MobileNavigationMenu = () => {
  return (
    <nav className="w-full h-svh bg-blue-200 flex flex-col items-center justify-center">
      <ul className="flex flex-col items-start justify-center gap-10 text-3xl text-black">
        <li className=" hover:text-blue-400 transition duration-500">
          <Link className="flex gap-2" href="/">
            <icons.home className="size-8" />
            Home
          </Link>
        </li>
        <li className=" hover:text-blue-400 transition duration-500">
          <Link className="flex gap-2" href="/AbouMe">
            <icons.person className="size-8" />
            About
          </Link>
        </li>
        <li className=" hover:text-blue-400 transition duration-500">
          <Link className="flex gap-2" href="/">
            <icons.works className="size-8" />
            Works
          </Link>
        </li>
        <li className=" hover:text-blue-400 transition duration-500">
          <Link className="flex gap-2" href="/">
            <icons.mail className="size-8" />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavigationMenu;
