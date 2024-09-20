import React, { SVGProps } from "react";

export function MaterialSymbolsHome(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0.5 0.5 23 23"
      {...props}
    >
      <path
        className="group-hover:fill-blue-400"
        fill="currentColor"
        d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"
      ></path>
    </svg>
  );
}
export default MaterialSymbolsHome;
