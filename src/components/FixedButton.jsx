import { scrollToTop } from "../components/ScrollToTop";
import { BiSolidUpArrow } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function FixedButton() {
  return (
    <>
      <div
        onClick={scrollToTop}
        className="fixed bottom-6 right-4 cursor-pointer rounded-full shadow-xl text-sky-950 dark:text-white bg-sky-500 hover:bg-sky-400"
      >
        <div className="p-2 font-bold md:p-3 text-xl">
          <BiSolidUpArrow />
        </div>
      </div>

      <div className="fixed right-4 bottom-1/3 cursor-pointer shadow-xl rounded-full">
        <div className="rounded-t-full p-2 font-bold md:p-3 text-xl text-sky-950 dark:text-white bg-sky-500 hover:bg-sky-400">
          <FaGithub />
        </div>
        <div className="p-2 font-bold md:p-3 text-xl text-sky-950 dark:text-white bg-sky-500 hover:bg-sky-400 my-0.5">
          <FaLinkedin />
        </div>
        <div className="rounded-b-full p-2 font-bold md:p-3 text-xl text-sky-950 dark:text-white bg-sky-500 hover:bg-sky-400">
          <FaInstagram />
        </div>
      </div>
    </>
  );
}

export default FixedButton;
