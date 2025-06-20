// _app.js or _app.tsx
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer ,faDownload } from "@fortawesome/free-solid-svg-icons";
import descriptions from './constants/landingPageConst'
export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-[#000000] flex flex-col m-auto justify-center items-center">
        <h1 className="text-7xl text-[#939392]">
          Welcome to <text className="text-[#117104]">HuggingPack</text>
        </h1>
        <div className="h-auto w-3/4 mt-15 justify-center items-center text-center font-mono">
          {descriptions.intro}
        </div>
        <div className="flex flex-row w-100 h-20 justify-center items-center mt-10 font-mono">
          <button className="w-30 h-15 bg-[#117104] mr-4 rounded-xl text-[#000000] justify-center items-center ">
            <FontAwesomeIcon
              icon={faHammer}
              size="xl"
              style={{ color: "#000000" }}
              className="mr-2"
            />
            Build
          </button>
          <button className="w-30 h-15 bg-[#117104] ml-4 rounded-xl text-[#000000]">
            <FontAwesomeIcon icon={faDownload} size="lg" className="mr-2"/>
            Download
          </button>
        </div>
      </div>
    </>
  );
}
