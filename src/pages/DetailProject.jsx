import { useParams } from "react-router-dom";
import { dataProject } from "../data/DataProject";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FixedButton from "../components/FixedButton";
import ScrollToTop from "../components/ScrollToTop";
import { useState } from "react";

function DetailProject() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
  };

  const { id } = useParams();
  const data = dataProject.find((item) => item.id == id);
  const details = data.detail;

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? details.image.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === details.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={`${dark && "dark"}`}>
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main className="dark:bg-sky-950 transition-colors duration-300 container max-w-full">
        <div className="text-sky-950 dark:text-white grid">
          {/* slider */}
          <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
            {/* Images */}
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {details.image.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full flex-shrink-0 h-1/4 object-cover object-center"
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-sky-500 bg-opacity-50 text-white p-2 rounded-full"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-sky-500 bg-opacity-50 text-white p-2 rounded-full"
            >
              ❯
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {details.image.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
          {/* description */}
          <div className="max-w-3xl mx-auto p-4 text-sm">
            <div className="pt-2">
              <h4 className="font-semibold">Description</h4>
              <p className="py-2">{details.desc}</p>
            </div>
            <div className="pt-2">
              <h4 className="font-semibold">Technologies Used</h4>
              <div className="py-2">
                <p>
                  This application is built with the following technologies:
                </p>
                <ul className="py-1 pl-6">
                  {details.tech.map((item, i) => (
                    <li className="list-disc" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pt-2">
              <h4 className="font-semibold">Key Features</h4>
              <div className="py-2">
                <p>Here are the main features of the application:</p>
                <ul>
                  {details.feat.map((item, i) => (
                    <li className="list-item py-1" key={i}>
                      <label>
                        {i + 1}. {item.name}
                      </label>
                      <ul className="px-12">
                        {item.desc.map((desc, index) => (
                          <li className="list-disc py-0.5" key={index}>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FixedButton />
      <ScrollToTop />
    </div>
  );
}

export default DetailProject;
