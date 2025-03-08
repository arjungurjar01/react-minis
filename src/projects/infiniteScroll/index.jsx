import React from "react";
import { useState } from "react";
import InterSectionObserver from "./intersectionObserver/InterSectionObserver";
import InfiniteScrollJs from "./infiniteScrollUsingJs/infiniteScrollJs";

function InfiniteScroll() {
  const [type, setType] = useState(false);

  return (
    <div className="bg-[#f1f1f1] h-screen w-1/2 ml-100 pt-10">
      <div className="flex  justify-between px-10">
        <h1 className="text-center font-medium text-md">Infinite Scroll ({type ? 'using JS':'using InterSection Observer'}
        ) </h1>
        <button
          className="bg-[#1f1f1f] p-1 text-white rounded-md cursor-pointer"
          onClick={() => setType(!type)}
        >
          {type ? 'InterSection Observer Scroll':'Infinite scroll usin JS'}
        </button>
      </div>

      {type ? <InfiniteScrollJs /> : <InterSectionObserver />}
    </div>
  );
}

export default InfiniteScroll;
