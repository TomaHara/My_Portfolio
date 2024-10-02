import Image from "next/image";

const Skills = () => {
  return (
    <main className="w-11/12 sm:w-5/6 2xl:w-4/5 flex flex-col md:flex-row gap-8 md:gap-4 xl:gap-8 md:items-stretch">
      <div className="flex-auto basis-1/3 flex flex-col justify-start items-center gap-4 p-4 text-black bg-gray-200">
        <label className="text-3xl font-oswald">Cording</label>
        <div className="relative w-11/12 aspect-[7/5] rounded-xl overflow-hidden">
          <Image
            className="object-cover object-center"
            alt="Sample image"
            src="/Profile/skills/coding.png"
            fill={true}
          />
        </div>
        <hr className="w-full" />
        <p className="text-base font-noto_sans_jp">
          大学の授業で、C言語、Java、Pythonをそれぞれ1年間ほど学習しました。基本的なソートや探索などのアルゴリズム、ポーカーゲームの実装を学びました。また、PythonでWebサイトへの自動ログインやデータを自動で取得するスクレイピングを実装することができます。
        </p>
        <div className="w-full flex flex-col gap-1 text-left">
          <label className="text-base font-oswald underline">Tools</label>
          <p className="text-base font-noto_sans_jp">C / C++ / Java / Python</p>
        </div>
      </div>
      <div className="flex-auto basis-1/3 flex flex-col justify-start items-center gap-4 p-4 text-black bg-gray-200">
        <label className="text-3xl font-oswald">Web application</label>
        <div className="relative w-11/12 aspect-[7/5] rounded-xl overflow-hidden">
          <Image
            className="object-cover object-center"
            alt="Sample image"
            src="/Profile/skills/web.png"
            fill={true}
          ></Image>
        </div>
        <hr className="w-full" />
        <p className="text-base font-noto_sans_jp">
          Reactを学習しており、簡単なWebサイトやWebアプリケーションを作成することができます。スタイリングはTailwindCSSを触ったことがあり、レスポンシブを意識したデザインやシンプルなアニメーションを実装できます。動画学習サイトなどを参考にしながら実際に手を動かして日々スキルを磨いています。
        </p>
        <div className="w-full flex flex-col gap-1 text-left">
          <label className="text-base font-oswald underline">Tools</label>
          <p className="text-base font-noto_sans_jp">
            TypeScript / React / Next.js / Tailwind css / Figma
          </p>
        </div>
      </div>
      <div className="flex-auto basis-1/3 flex flex-col justify-start items-center gap-4 p-4 text-black bg-gray-200">
        <label className="text-3xl font-oswald">Data analysis</label>
        <div className="relative w-11/12 aspect-[7/5] rounded-xl overflow-hidden">
          <Image
            className="object-cover object-center"
            alt="Sample image"
            src="/Profile/skills/data_analysis.png"
            fill={true}
          ></Image>
        </div>
        <hr className="w-full" />
        <p className="text-base font-noto_sans_jp">
          大学の授業で統計学を学び、研究で実際のデータを扱っています。研究では、OuraRingという指輪型のウェアラブルデバイスを使用して睡眠データを測定して、日中の行動との関係性の調査を行なっています。言語は主にPythonを使用しており、データの可視化や回帰分析などのデータ操作を行うことができます。
        </p>
        <div className="w-full flex flex-col gap-1 text-left">
          <label className="text-base font-oswald underline">Tools</label>
          <p className="text-base font-noto_sans_jp">
            Visual Studio Code / Python / OuraRing
          </p>
        </div>
      </div>
    </main>
  );
};

export default Skills;
