import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { DiCodeigniter } from "react-icons/di";
import { dataProject } from "../data/DataProject";

function Experiance() {
  const lenDataProject = dataProject.length - 1;
  const section = lenDataProject + 1;

  return (
    <>
      <div
        id="Experiance"
        className={`flex items-center justify-center pt-8 md:col-span-2 ${
          section % 2 !== 0 && "bg-gray-100 border-t"
        } `}
      >
        <div className="flex-grow border-t border-gray-300"></div>
        <span
          className={`mx-4 text-2xl font-bold ${
            section % 2 !== 0 && "text-sky-950"
          }`}
        >
          📋 EXPERIANCE
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* sky-500: #0ea5e9, sky-950: #082f49, gray-100: #f3f4f6 */}
      <div
        className={`py-10 px-8 xl:px-32 md:col-span-2 ${
          section % 2 !== 0 && "bg-gray-100 border-b"
        } `}
      >
        <VerticalTimeline lineColor={section % 2 !== 0 ? "#082f49" : "#f3f4f6"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              color: "#082f49",
              borderTop: "5px solid #082f49",
              background: "#f3f4f6",
            }}
            contentArrowStyle={{ borderRight: "7px solid #f3f4f6" }}
            date="2021 - 2024"
            iconStyle={{ background: "#EF4223", color: "#fff" }}
            icon={<DiCodeigniter />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              PT Shan Informasi Sistem
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-semibold">
              Web Developer
            </h4>
            <p>
              Manage ERP system from planning, design, coding, testing, to
              deployment
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Experiance;
