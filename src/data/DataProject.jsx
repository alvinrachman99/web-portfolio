import a1 from "../assets/project/a1.png";
import b1 from "../assets/project/b1.png";
import b2 from "../assets/project/b2.png";
import c1 from "../assets/project/c1.png";
import c2 from "../assets/project/c2.png";
import c3 from "../assets/project/c3.png";
import c4 from "../assets/project/c4.png";
import d1 from "../assets/project/d1.png";
import d2 from "../assets/project/d2.png";
import d3 from "../assets/project/d3.png";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";

export const dataProject = [
  {
    id: 1,
    title: "Personal Website",
    description: `My personal website portfolio, i created this to display my profile, skills and projects. As well as my place to try new technology. Through this website, I hope to share my work and connect with people who share the same interests.`,
    image: a1,
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
    detail: "",
  },
  {
    id: 2,
    title: "Task App",
    description: `A web application that helps users efficiently manage their daily tasks, providing a responsive and functional user experience`,
    image: b1,
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
        label: "PostgreSQL",
        icon: <BiLogoPostgresql />,
      },
      {
        label: "Tailwind",
        icon: <SiTailwindcss />,
      },
    ],
    detail: {
      image: [b1, b2],
      desc: `The ToDo List application is a web-based tool that allows users to record, manage, and delete their daily tasks. It is built using modern technologies to ensure high performance, a responsive design, and ease of use.`,
      tech: ["Backend: Golang Fiber", "Frontend: React JS", "Database: PostgreSQL", "Styling: Tailwind CSS"],
      feat: [
        {
          name: "Add Tasks",
          desc: ["Users can add new tasks by providing a task name and description."]
        },
        {
          name: "View Task List",
          desc: [
            "All added tasks are displayed in a clean and organized list.",
            "Tasks can be ordered by criteria such as creation time."
          ]
        },
        {
          name: "Edit Tasks",
          desc: [
            "Users can modify the name or description of existing tasks."
          ]
        },
        {
          name: "Delete Tasks",
          desc: [
            "Users can remove tasks that are no longer needed or completed."
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: "Login System",
    description: `The Login System is a web-based application that allows users to register and securely authenticate their accounts. The system uses modern technologies to ensure robust security, seamless user experience, and scalability.`,
    image: c2,
    github: "https://github.com/alvinrachman99/login-system",
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
        label: "PostgreSQL",
        icon: <BiLogoPostgresql />,
      },
      {
        label: "Tailwind",
        icon: <SiTailwindcss />,
      },
    ],
    detail: {
      image: [c1, c2, c3, c4],
      desc: `The Login System is a web-based application that allows users to register and securely authenticate their accounts. The system uses modern technologies to ensure robust security, seamless user experience, and scalability.`,
      tech: ["Backend: Golang Fiber", "Frontend: React JS", "Database: PostgreSQL", "Styling: Tailwind CSS"],
      feat: [
        {
          name: "User Registration",
          desc: [
            "Users can create an account by providing their email, password, first name and lastname.",
            "Passwords are securely hashed using libraries like bcrypt before being stored in the database."
          ]
        },
        {
          name: "User Login",
          desc: [
            "Users can log in with their email and password.",
            "Upon successful login, a JWT is issued and sent to the client for session management."
          ]
        },
        {
          name: "JWT Authentication",
          desc: [
            "The backend generates a JWT token upon successful login.",
            "The token is used to authenticate protected routes and verify the user's identity."
          ]
        },
        {
          name: "Session Management",
          desc: [
            "Users remain authenticated as long as the JWT token is valid.",
            "Tokens can be stored in localStorage, sessionStorage, or HTTP-only cookies for enhanced security."
          ]
        },
        {
          name: "Edit User Profile",
          desc: [
            "Users can update their profile information, such as their firstname and lastname",
            "Users can also upload or change their profile picture. The backend stores the new image in a designated folder, and the database is updated with the filename.",
          ]
        },
      ]
    }
  },
  {
    id: 4,
    title: "IMDB Clone",
    description: `A web application inspired by IMDb, allowing users to search for movies and view detailed information, including plot, genre, director, cast, release year, and IMDb rating. Built with React and TypeScript, using the OMDb API for dynamic movie data.`,
    image: d1,
    github: "https://github.com/alvinrachman99/imdb-clone",
    skill: [
      {
        label: "ReactJS",
        icon: <GrReactjs />,
      },
      {
        label: "Typescript",
        icon: <SiTypescript />,
      },
      {
        label: "Tailwind",
        icon: <SiTailwindcss />,
      },
    ],
    detail: {
      image: [d1, d2, d3],
      desc: `A web application inspired by IMDb, allowing users to search for movies and view detailed information, including plot, genre, director, cast, release year, and IMDb rating. Built with React and TypeScript, using the OMDb API for dynamic movie data.`,
      tech: ["React & TypeScript: For building a dynamic and type-safe UI.", "OMDb API: For fetching movie data.", "Context API: For global state management.", "Styling: Tailwind CSS"],
      feat: [
        {
          name: "Movie Search",
          desc: [
            "Search for movies by title with results showing posters, release year, and titles."
          ]
        },
        {
          name: "Movie Details",
          desc: [
            "View detailed movie information by selecting a specific movie."
          ]
        },
        {
          name: "Responsive Design",
          desc: [
            "Works seamlessly across devices."
          ]
        }
      ]
    }
  },
];
