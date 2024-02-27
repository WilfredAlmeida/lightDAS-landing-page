import { FaPuzzlePiece } from "react-icons/fa6";
import { GiTrophy } from "react-icons/gi";
import { GoPersonFill } from "react-icons/go";
import { TbCurrencySolana } from "react-icons/tb";

interface DataItem {
    icon: JSX.Element;
    point: string;
  }

  interface founderItem {
    name : string,
    image: string,
    intro: string,
    twitter:string,
    github:string,
    about: DataItem []
  }

export const founders: founderItem[]= [
    {
        name: "Aale peelo",
        image: '/Assets/person.jpeg',
        intro: "Co-founder light DAS",
        twitter:"/",
        github:"/",
        about: [
            {
                icon: <GoPersonFill /> ,
                point: "Lorem ipsum dolor sit amet "
            },
            {
                icon:<FaPuzzlePiece />,
                point:"Lorem ipsum dolor sit amet"
            },
            {
                icon:<TbCurrencySolana />,
                point:"Lorem ipsum dolor sit amet"
            },
            {
                icon:<GiTrophy />,
                point:"Lorem ipsum dolor sit amet"
            },
        ]
        },    

    {
        name: "Aale peelo",
        image: '/Assets/person.jpeg',
        intro: "Co-founder light DAS",
        twitter:"/",
        github:"/",
        about: [
            {
                icon: <GoPersonFill /> ,
                point: "Lorem ipsum dolor sit amet"
            },
            {
                icon:<FaPuzzlePiece />,
                point:"Lorem ipsum dolor sit amet"
            },
            {
                icon:<TbCurrencySolana />,
                point:"Lorem ipsum dolor sit amet"
            },
            {
                icon:<GiTrophy />,
                point:"Lorem ipsum dolor sit amet"
            },
        ]
    }
]