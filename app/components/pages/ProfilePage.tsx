import Image from "next/image";
import icons from "../../iconlist";
import Link from "next/link";
// import SNSLink from "../SNSLink";

const ProfilePage = () => {
  return (
    <section className="w-full h-screen shrink-0 relative overflow-hidden flex flex-col items-center justify-center desktop:min-h-[700px] mobile:min-h-[640px]">
      <main className="w-full relative overflow-hidden flex flex-col items-center justify-center p-14 box-border desktop:gap-16 mobile:gap-8  text-black ">
        <h1 className="relative desktop:text-5xl mobile:text-4xl [text-decoration:underline] font-oswald text-center [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          About me
        </h1>
        <main className="w-[80vw] relative flex desktop:flex-row flex-col items-center justify-center gap-8 ">
          <div className=" desktop:w-[300px] aspect-square shrink-0 rounded-full desktop:overflow-hidden mobile:w-[250px] relative items-start justify-start ">
            <Image
              className="object-cover object-center"
              alt="Sample image"
              src="/picture/animal.jpg"
              fill={true}
            />
          </div>
          <div className="flex-1 w-full relative overflow-hidden shrink-0 flex flex-col items-start justify-start desktop:gap-4 mobile:gap-2 max-w-[1312px] ">
            <h2 className="w-full relative desktop:text-2xl mobile:text-xl font-noto_sans_jp text-left flex items-center overflow-hidden text-ellipsis whitespace-nowrap ">
              原 透真/Toma Hara
            </h2>
            <p className="w-full relative desktop:text-lg mobile:text-base font-noto_sans_jp text-left [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:8] [-webkit-box-orient:vertical] desktop:min-h-[105px] mobile:min-h-[60px] ">
              大阪府立大学(現大阪公立大学)の4年生。情報工学を学んでおり、現在はウェアラブルデバイスであるOura
              Ringを用いた研究をしています。大学の授業ではC言語、JavaやPythonなどを学びました。最近では、研究で用いるWebアプリの開発のためにReactを勉強しています。積極的に新しい技術に触れ、知識やスキルを身につけられるように日々励んでいます。
            </p>

            <address className="mt-2 overflow-hidden flex flex-row items-center justify-start flex-wrap content-center desktop:gap-4 mobile:gap-3 ">
              <Link
                href="/"
                className="w-auto flex flex-row items-center justify-start desktop:gap-2 mobile:gap-1 opacity-[0.8] hover:opacity-100 border-b-2 hover:border-blue-300 border-blue-300/0 trantirion duration-500 group"
              >
                <icons.github className="desktop:size-6 size-5" />
                <div className="w-auto text-left whitespace-nowrap desktop:text-lg mobile:text-xs text-black group-hover:text-blue-400 font-noto_sans_jp">
                  Github
                </div>
              </Link>
              <Link
                href="/"
                className="w-auto flex flex-row items-center justify-start desktop:gap-2 mobile:gap-1 opacity-[0.8] hover:opacity-100 border-b-2 hover:border-blue-300 border-blue-300/0 trantirion duration-500 group"
              >
                <icons.twitter className="desktop:size-6 size-5" />
                <div className="w-auto text-left whitespace-nowrap desktop:text-lg mobile:text-xs text-black group-hover:text-blue-400 font-noto_sans_jp">
                  X(旧Twitter)
                </div>
              </Link>
              <Link
                href="/"
                className="w-auto flex flex-row items-center justify-start desktop:gap-2 mobile:gap-1 opacity-[0.8] hover:opacity-100 border-b-2 hover:border-blue-300 border-blue-300/0 trantirion duration-500 group"
              >
                <icons.mail className="desktop:size-6 size-5" />
                <div className="w-auto text-left whitespace-nowrap desktop:text-lg mobile:text-xs text-black group-hover:text-blue-400 font-noto_sans_jp">
                  Mail　
                </div>
              </Link>
            </address>
            <div className="w-full relative overflow-hidden flex flex-row items-center justify-end ">
              <button className="relative py-1 px-2 text-left desktop:text-2xl mobile:text-xl text-black font-oswald rounded-lg hover:bg-blue-300 trantition duration-500">
                Read more
              </button>
            </div>
          </div>
        </main>
      </main>
    </section>
  );
};

export default ProfilePage;
