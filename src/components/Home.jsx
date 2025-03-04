import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-b min-h-screen flex flex-col items-center justify-center p-4 ">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-8 bg-gradient-to-r from-[#9A8D9B] via-[#575A79] to-[#2C2E4D] inline-block text-transparent bg-clip-text">
        React Mini Projects
      </h1>
      <p className="m-10 text-white text-center">
        {" "}
        Scroll Down to See{" "}
        <strong className="text-lime-400 underline text-xl">minis</strong>.
      </p>{" "}
      {/* <Footer /> */}
    </div>
  )
}

export default Home