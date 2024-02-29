import { FaPuzzlePiece } from "react-icons/fa6";
import { GiTrophy } from "react-icons/gi";
import { GoPersonFill } from "react-icons/go";
import { TbCurrencySolana } from "react-icons/tb";

interface DataItem {
  icon: JSX.Element;
  point: string;
}

interface founderItem {
  name: string;
  image: string;
  intro: string;
  twitter: string;
  github: string;
  about: DataItem[];
}

export const founders: founderItem[] = [
  {
    name: "Wilfred Almeida",
    image: "/Assets/wilfred.jpeg",
    intro: "Co-founder LightDAS",
    twitter: "https://twitter.com/WilfredAlmeida_",
    github: "https://github.com/WilfredAlmeida/",
    about: [
      {
        icon: <GoPersonFill />,
        point: "Developer @ Triton One",
      },
      {
        icon: <FaPuzzlePiece />,
        point: "Prev: Underdog Protocol, Saganize",
      },
      {
        icon: <TbCurrencySolana />,
        point: "Member @SuperteamDAO",
      },
      {
        icon: <GiTrophy />,
        point: "Buildooor",
      },
    ],
  },

  {
    name: "Kartik Soneji",
    image: "/Assets/solana.png",
    intro: "Co-founder LightDAS",
    twitter: "https://twitter.com/KartikSoneji_",
    github: "https://github.com/KartikSoneji",
    about: [
      {
        icon: <GoPersonFill />,
        point: "Contributor to Metaplex Libraries",
      },
      {
        icon: <FaPuzzlePiece />,
        point: "Member @SuperteamDAO",
      },
      {
        icon: <TbCurrencySolana />,
        point: "Solana Maxi",
      },
      {
        icon: <GiTrophy />,
        point: "Everything Computer Science",
      },
    ],
  },
];
