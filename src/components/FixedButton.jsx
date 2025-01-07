import { scrollToTop } from "../components/ScrollToTop";
import { BiSolidUpArrow } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function FixedButton() {
  return (
    <>
      <div
        onClick={scrollToTop}
        className="fixed bottom-6 right-4 cursor-pointer border-2 border-sky-950 rounded-full shadow-xl hover:bg-sky-950 hover:text-white z-10"
      >
        <div className="p-2 font-bold md:p-3 text-xl">
          <BiSolidUpArrow />
        </div>
      </div>

      <div className="fixed right-4 bottom-1/3 cursor-pointer shadow-xl rounded-full z-10">
        <div className="border-2 border-b-0 border-sky-950 rounded-t-full hover:bg-sky-950 hover:text-white p-2 font-bold md:p-3 text-xl">
          <FaGithub />
        </div>
        <div className="border-x-2 border-sky-950 hover:bg-sky-950 hover:text-white p-2 font-bold md:p-3 text-xl">
          <FaLinkedin />
        </div>
        <div className="border-2 border-t-0 border-sky-950 rounded-b-full hover:bg-sky-950 hover:text-white p-2 font-bold md:p-3 text-xl">
          <FaInstagram />
        </div>
      </div>
    </>
  );
}

export default FixedButton;
