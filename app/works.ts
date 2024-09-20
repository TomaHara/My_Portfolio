//作品のデータを入れておくファイル

export interface works {
  id: number;
  title: string;
  description: string;
  img: string[];
  url: string;
}

const My_Works: works[] = [
  {
    id: 0,
    title: "Balloon Analogue Risk Task",
    description:
      "ボタンを押して風船を膨らませるゲーム。風船を膨らませるほど獲得できる金額は増えていき、破裂前に回収ボタンで回収することができる。ただし破裂させてしまうと獲得できない。各風船が破裂するまでのボタンの回数はランダムとなっており、プレイヤーはできるだけ風船を多く膨らませることを目指しつつ、風船を破る前にお金を回収しなければならない。",
    img: [
      "/picture/sunflower.jpg",
      "/picture/travel.jpg",
      "/picture/街.jpg",
      "/picture/animal.jpg",
    ],
    url: "",
  },
  {
    id: 1,
    title: "My Portfolio",
    description:
      "ボタンを押して風船を膨らませるゲーム。風船を膨らませるほど獲得できる金額は増えていき、破裂前に回収ボタンで回収することができる。ただし破裂させてしまうと獲得できない。各風船が破裂するまでのボタンの回数はランダムとなっており、プレイヤーはできるだけ風船を多く膨らませることを目指しつつ、風船を破る前にお金を回収しなければならない。",
    img: [
      "/picture/animal.jpg",
      "/picture/sunflower.jpg",
      "/picture/travel.jpg",
      "/picture/街.jpg",
    ],
    url: "",
  },
  {
    id: 2,
    title: "Quiz Game",
    description:
      "ボタンを押して風船を膨らませるゲーム。風船を膨らませるほど獲得できる金額は増えていき、破裂前に回収ボタンで回収することができる。ただし破裂させてしまうと獲得できない。各風船が破裂するまでのボタンの回数はランダムとなっており、プレイヤーはできるだけ風船を多く膨らませることを目指しつつ、風船を破る前にお金を回収しなければならない。",
    img: [
      "/picture/travel.jpg",
      "/picture/街.jpg",
      "/picture/animal.jpg",
      "/picture/sunflower.jpg",
    ],
    url: "",
  },
  {
    id: 3,
    title: "Search System",
    description:
      "ボタンを押して風船を膨らませるゲーム。風船を膨らませるほど獲得できる金額は増えていき、破裂前に回収ボタンで回収することができる。ただし破裂させてしまうと獲得できない。各風船が破裂するまでのボタンの回数はランダムとなっており、プレイヤーはできるだけ風船を多く膨らませることを目指しつつ、風船を破る前にお金を回収しなければならない。",
    img: [
      "/picture/shapes.jpg",
      "/picture/sunflower.jpg",
      "/picture/travel.jpg",
      "/picture/animal.jpg",
    ],
    url: "",
  },
  {
    id: 4,
    title: "API System",
    description:
      "ボタンを押して風船を膨らませるゲーム。風船を膨らませるほど獲得できる金額は増えていき、破裂前に回収ボタンで回収することができる。ただし破裂させてしまうと獲得できない。各風船が破裂するまでのボタンの回数はランダムとなっており、プレイヤーはできるだけ風船を多く膨らませることを目指しつつ、風船を破る前にお金を回収しなければならない。",
    img: [
      "/picture/街.jpg",
      "/picture/animal.jpg",
      "/picture/sunflower.jpg",
      "/picture/travel.jpg",
    ],
    url: "",
  },
];

export default My_Works;
