import Image from "next/image";
import icons from "./iconlist";
import Link from "next/link";

const Plofile = () => {
  return (
    <div className="contents relative sm:w-5/6 2xl:w-4/5 md:flex items-center gap-16">
      <div className="relative sm:w-3/4 md:w-1/3 sm:min-w-48 w-11/12 flex justify-center items-center overflow-hidden aspect-square shrink-0 rounded-xl">
        <Image
          className="object-cover object-center"
          alt="Sample image"
          src="/Profile/Profile.jpg"
          fill={true}
        />
      </div>
      <div className="w-11/12 flex flex-col items-start justify-start text-black gap-2 sm:gap-4">
        <h2 className="sm:text-2xl text-xl font-noto_sans_jp">
          原 透真 / Toma Hara
        </h2>
        <p className="sm:text-lg text-base font-noto_sans_jp [display:-webkit-inline-box] overflow-hidden text-ellipsis sm:[-webkit-line-clamp:7] [-webkit-box-orient:vertical]">
          大阪府立大学(現大阪公立大学)の4年生。情報工学を学んでおり、現在はウェアラブルデバイスであるOura
          Ringを用いた研究をしています。大学の授業ではC言語、JavaやPythonなどを学びました。最近では、研究で用いるWebアプリの開発のためにReactを勉強しています。積極的に新しい技術に触れ、知識やスキルを身につけられるように日々励んでいます。
        </p>

        <address className="mt-4 flex flex-row items-center justify-start flex-wrap content-center sm:gap-4 gap-3 text-black font-noto_sans_jp">
          <Link
            href="https://github.com/TomaHara"
            className="flex flex-row items-center justify-start sm:gap-2 gap-1 border-b-2 hover:border-blue-300 border-blue-300/0 hover:text-blue-400 trantirion duration-500 group"
          >
            <icons.github className="sm:size-6 size-5" />
            <div className="text-left whitespace-nowrap sm:text-lg text-xs">
              Github
            </div>
          </Link>
          <Link
            href=""
            className="flex flex-row items-center justify-start sm:gap-2 gap-1 border-b-2 hover:border-blue-300 border-blue-300/0 hover:text-blue-400 trantirion duration-500 group"
          >
            <icons.twitter className="sm:size-6 size-5" />
            <div className="text-left whitespace-nowrap sm:text-lg text-xs">
              X(旧Twitter)
            </div>
          </Link>
          <Link
            href="mailto:pyonsuke0720@gmail.com"
            className="flex flex-row items-center justify-start sm:gap-2 gap-1 border-b-2 hover:border-blue-300 border-blue-300/0 hover:text-blue-400 trantirion duration-500 group"
          >
            <icons.mail className="sm:size-6 size-5" />
            <div className="text-left whitespace-nowrap sm:text-lg text-xs">
              Mail　
            </div>
          </Link>
        </address>
      </div>
    </div>
  );
};

export default Plofile;
