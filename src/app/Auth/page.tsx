"use client";

import { useState } from "react";

import SignUp from "@/app/components/signUp";
import Login from "@/app/components/logIn";

export default function AuthPage() {
  const [mode, setMode] = useState(true);

  function changeMode() {
    setMode(!mode);
  }
  return (
    <>
      <div className="h-screen w-screen bg-[#000000] flex flex-col justify-center items-center font-mono">
        <div className="h-4/5 w-1/4 min-w-85 bg-[#1a1a1a] rounded-2xl flex flex-col">
          <div className="w-auto h-1/7  rounded-xl m-1 flex flex-row justify-center items-center">
            <button
              className={
                mode
                  ? "h-1/2 w-1/4 m-1 bg-[#117104] ml-1 rounded-xl"
                  : "h-1/2 w-1/4 m-1 bg-white ml-1 rounded-xl"
              }
              onClick={changeMode}
            >
              SignUp
            </button>
            <button
              className={
                mode
                  ? "h-1/2 w-1/4 m-1 bg-white ml-1 rounded-xl"
                  : "h-1/2 w-1/4 m-1 bg-[#117104] ml-1 rounded-xl"
              }
              onClick={changeMode}
            >
              Login
            </button>
          </div>

          <div className="flex flex-col w-auto h-3/4   m-1 bg-[#000] top-10 rounded-xl">
            {mode ? <SignUp /> : <Login />}
          </div>
        </div>
      </div>
    </>
  );
}
