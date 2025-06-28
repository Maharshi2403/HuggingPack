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
} from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  const [activeTab, setActiveTab] = useState("Projects");

  const menuItems = [
    { name: "NameSpace", icon: faTableColumns },
    { name: "Model Selection", icon: faGear },
    { name: "Pipeline Configuration", icon: faCreditCard },
    { name: "Api setup", icon: faRightFromBracket },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "NameSpace":
        return <div>namespace</div>;
      case "Model Selection":
        return <div>⚙️ User settings go here...</div>;
      case "Configuration":
        return <div>💳 Billing information goes here...</div>;
      case "Logout":
        return <div>🔒 You have been logged out (simulate).</div>;
      default:
        return <div>Welcome to the dashboard!</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#161616]  text-[#117104] ">
      <div className="w-64  bg-[#000] shadow-md p-5 rounded-r-2xl">
        <h2 className="text-2xl font-bold mb-8">Project</h2>
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
