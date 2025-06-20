"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faDownload,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import descriptions from "./constants/landingPageConst";
import { useRouter } from "next/navigation";


export default function Home() {
  const route = useRouter();

  function direct() {
    route.push("/Auth");
  }

  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden overflow-y-hidden">
        <nav className="h-16 w-screen flex flex-row bg-[#000000]  top-0 ">
          <div className="flex float-left ml-4 bg-[#117104] h- 10  w-50 rounded-2xl mt-3 mb-3 justify-center items-center text-center">
            <span className="text-white text-2xl ">
              <FontAwesomeIcon
                icon={faRobot}
                style={{ color: "#000000" }}
                className="mr-2"
              />
              HuggingPack
            </span>
          </div>
        </nav>
        <div className="w-full h-screen bg-[#000000] flex flex-col  justify-center items-center ">
          <h1 className="text-7xl text-[#939392]">
            Welcome to <span className="text-[#117104]">HuggingPack</span>
          </h1>
          <div className="h-auto w-3/4 mt-15 justify-center items-center text-center font-mono text-white">
            {descriptions.intro}
          </div>
          <div className="flex flex-row w-100 h-20 justify-center items-center mt-10 font-mono">
            <button
              className="w-30 h-15 bg-[#117104] mr-4 rounded-xl text-[#000000] justify-center items-center "
              onClick={direct}
            >
              <FontAwesomeIcon
                icon={faHammer}
                size="xl"
                style={{ color: "#000000" }}
                className="mr-2"
              />
              Build
            </button>
            <button
              className="w-30 h-15 bg-[#117104] ml-4 rounded-xl text-[#000000]"
              onClick={direct}
            >
              <FontAwesomeIcon icon={faDownload} size="lg" className="mr-2" />
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
