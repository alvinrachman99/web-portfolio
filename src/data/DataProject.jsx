import a1 from "../assets/project/a1.png";
import b1 from "../assets/project/b1.png";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

export const dataProject = [
  {
    id: 1,
    title: "Personal Website",
    description: `My personal website portfolio, i created this to display my profile, skills and projects. As well as my place to try new technology. Through this website, I hope to share my work and connect with people who share the same interests.`,
    image: a1,
    linkdetail: "",
    github: "https://github.com/alvinrachman99/web-portfolio",
    skill: [
      {
        label: "ReactJS",
        icon: <GrReactjs />,
      },
      {
        label: "Tailwind",
        icon: <SiTailwindcss />,
      },
    ],
  },
  {
    id: 2,
    title: "Task App",
    description: `A web application that helps users efficiently manage their daily tasks, providing a responsive and functional user experience`,
    image: b1,
    linkdetail: "",
    github: "https://github.com/alvinrachman99/todolist",
    skill: [
      {
        label: "Golang",
        icon: <FaGolang />,
      },
      {
        label: "ReactJS",
        icon: <GrReactjs />,
      },
      {
        label: "Tailwind",
        icon: <SiTailwindcss />,
      },
    ],
  },
];
