import { useEffect, useState } from "react";
import photo_profile from "../assets/photo_profile.jpg";
import { motion } from "motion/react";

function Header() {
  const handleDownload = () => {
    const fileUrl = "/cv.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const texts = ["Programmer", "Web Developer"]; // Teks yang akan ditampilkan
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (typing) {
      // Logika mengetik
      timeout = setTimeout(() => {
        setCurrentText((prev) =>
          texts[index].substring(0, prev.length + 1)
        );
        if (currentText === texts[index]) {
          setTyping(false);
        }
      }, 50); // Kecepatan mengetik
    } else {
      // Logika menghapus teks setelah selesai mengetik
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.substring(0, prev.length - 1));
        if (currentText === "") {
          setTyping(true);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Berganti teks
        }
      }, 150); // Kecepatan menghapus teks
    }

    return () => clearTimeout(timeout);
  }, [currentText, typing, index, texts]);

  return (
    <>
      {/* description */}
      <div
        data-aos="fade-right"
        id="Header"
        className="py-4 px-8 xl:px-32 flex flex-col md:pt-14 md:order-first"
      >
        <span className="text-base font-semibold text-sky-500 py-1">
          Hello World, I'm
        </span>
        <span className="text-3xl font-bold py-1">Alvin Rachman Septian</span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-xl font-semibold py-1 text-sky-500 tracking-wider"
        >
          {currentText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-0.5 h-7 ml-1 align-middle bg-sky-500"
          />
        </motion.div>
        <p className="text-sm py-1">
          <span className="font-semibold">3 years</span> of experiance in Web
          Development, using{" "}
          <span className="font-semibold">Codeigniter and Jquery</span> for
          developing a website and web applications
        </p>
        <div className="flex flex-col py-1 gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "easeInOut" }}
            className="w-fit py-2 px-3 lg:text-sm text-xs border-2 border-dashed border-sky-950 dark:border-white dark:hover:bg-gray-100 dark:hover:text-sky-950 rounded-md hover:bg-sky-950 hover:text-white"
          >
            📱 +62 858 9244 2489
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "easeInOut" }}
            className="w-fit py-2 px-3 lg:text-sm text-xs border-2 border-dashed border-sky-950 dark:border-white dark:hover:bg-gray-100 dark:hover:text-sky-950 rounded-md hover:bg-sky-950 hover:text-white tracking-wider"
          >
            📩 alvinrachman16@gmail.com
          </motion.button>
        </div>
      </div>
      {/* image */}
      <div
        
        data-aos="fade-left"
        className="py-4 justify-items-center order-first"
      >
        <div className="w-80 h-80 md:h-96 rounded-full shadow-xl md:rounded-md overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{
              ease: "easeInOut",
            }}
            src={photo_profile}
            className="w-full h-full object-cover object-bottom"
            alt="Photo Profile"
          />
        </div>
      </div>
      {/* CV */}
      <div className="bg-gray-100 border-y py-10 text-center md:col-span-2">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleDownload}
          type="button"
          className="border-2 border-sky-950 border-dashed p-3 rounded-md hover:bg-sky-950 hover:text-white dark:text-sky-950 dark:hover:text-white"
        >
          🖇️ Download CV
        </motion.button>
      </div>
    </>
  );
}

export default Header;
