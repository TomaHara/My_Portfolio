//作品のデータを入れておくファイル

export interface works {
  id: number;
  title: string;
  description: string;
  img: string[];
  skills: string[];
  url: string;
}

const My_Works: works[] = [
  {
    id: 0,
    title: "Balloon Analogue Risk Task",
    description:
      "風船を割らずに膨らませるゲーム。人間のリスク選択の度合いを測るために開発された意思決定課題である「バルーンアナログリスクタスク」を参考にして作成しました。データベースにはFirebaseを使用しており、ログインしてゲームをプレイすることで得点や膨らませた回数などをデータベースに保存することができます。",
    img: [
      "/Works/BART/MainGame.png",
      "/Works/BART/Login.png",
      "/Works/BART/Burst.png",
      "/Works/BART/Firebase.png",
    ],
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Firebase"],
    url: "",
  },
  {
    id: 1,
    title: "My Portfolio",
    description:
      "Toma Haraのポートフォリオサイト。Next.jsを使用して作成し、Vercelでデプロイしました。スタイリングには、TailwindCSSを使用しています。モバイル用にヘッダーのメニューをハンバーガーボタンに切り替えたりレイアウトを変えるなど、レスポンシブ対応を意識してなるべくシンプルで見やすいデザインで作成しました。プロフィールページの写真のスライドショーの部分は、前の写真を徐々に透過させ、滑らかな切り替えとなるようにこだわって実装しました。",
    img: [
      "/Works/Portfolio/home.png",
      "/Works/Portfolio/profile.png",
      "/Works/Portfolio/mobile.png",
      "/Works/Portfolio/slideshow.png",
    ],
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    url: "",
  },
  {
    id: 2,
    title: "準備中",
    description: "準備中",
    img: [
      "/samples/travel.jpg",
      "/samples/街.jpg",
      "/samples/animal.jpg",
      "/samples/sunflower.jpg",
    ],
    skills: [],
    url: "",
  },
  {
    id: 3,
    title: "準備中",
    description: "準備中",
    img: [
      "/samples/shapes.jpg",
      "/samples/sunflower.jpg",
      "/samples/travel.jpg",
      "/samples/animal.jpg",
    ],
    skills: [],
    url: "",
  },
  {
    id: 4,
    title: "準備中",
    description: "準備中",
    img: [
      "/samples/街.jpg",
      "/samples/animal.jpg",
      "/samples/sunflower.jpg",
      "/samples/travel.jpg",
    ],
    skills: [],
    url: "",
  },
];

export default My_Works;
