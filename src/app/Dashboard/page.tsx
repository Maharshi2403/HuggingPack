"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Prevents FA from injecting CSS twice
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableColumns,
  faGear,
  faCreditCard,
  faRightFromBracket,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

function Project() {
  const router = useRouter();

  function redirect() {
    router.push("/Project");
  }

  const [hovered, setHovered] = useState(false);
  return (
    <>
      <div className="flex flex-row ">
        <div className="bg-black h-50 w-50 p-6 rounded-lg shadow m-10 flex justify-center items-center border-0">
          Project List
        </div>
        <button
          onClick={redirect}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        >
          <div
            className={`h-50 w-50 flex justify-center items-center bg-black rounded-xl border-2 transition-all duration-200  ${
              hovered ? "scale-105" : ""
            }`}
          >
            <FontAwesomeIcon
              icon={faHammer}
              size="4x"
              style={{ color: "#117104" }}
              className="size-30"
            />
          </div>
        </button>
      </div>
    </>
  );
}
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Projects");

  const menuItems = [
    { name: "Projects", icon: faTableColumns },
    { name: "Settings", icon: faGear },
    { name: "Billing", icon: faCreditCard },
    { name: "Logout", icon: faRightFromBracket },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Projects":
        return <Project />;
      case "Settings":
        return <div> User settings go here...</div>;
      case "Billing":
        return <div> Billing information goes here...</div>;
      case "Logout":
        return <div> You have been logged out (simulate).</div>;
      default:
        return <div>Welcome to the dashboard!</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#1e1e1e]  text-[#117104] ">
      <div className="w-64  bg-[#000] shadow-md p-5 rounded-r-2xl">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition hover:bg-gray-100 ${
                activeTab === item.name ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              <FontAwesomeIcon icon={item.icon} size="lg" />
              <span className="ml-3">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 rounded-2xl">
        <h1 className="text-2xl font-semibold mb-6">{activeTab}</h1>
        {renderContent()}
      </div>
    </div>
  );
}
