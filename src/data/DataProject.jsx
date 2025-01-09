import a1 from "../assets/project/a1.png";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";

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
    title: "Lorem, Ipsum",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vero deleniti perferendis reiciendis est cum blanditiis?`,
    image: "https://picsum.photos/300/300",
    linkdetail: "",
    github: "",
    skill: [
      {
        label: "ReactJS",
        icon: <GrReactjs />,
      },
      {
        label: "Tailwind",
        icon: <SiTailwindcss />,
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
