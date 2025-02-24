import React, { useEffect, useState } from "react";

function CarouselUsingApi() {
  const [image, setImage] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLocading] = useState(false);

  const fetchApiData = async () => {
    setLocading(true);
    const response = await fetch(
      "https://www.reddit.com/r/aww/top/.json?t=all"
    );
    const result = await response.json();
    const data = result.data.children;

    const imageUrlList = data
      .filter((item) => item.data.url_overridden_by_dest.includes(".jpg"))
      .map((item) => item.data.url_overridden_by_dest);

    // console.log(imageUrlList);
    setImage(imageUrlList);
    setLocading(false);
  };
  useEffect(() => {
    fetchApiData();
  }, []);

  const handleLeftSlide = () => {
    const lastIndex = image.length - 1;
    if (index == 0) {
      setIndex(lastIndex);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleRightSlide = () => {
    // console.log('crr index',index)
    if (index == image.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRightSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="w-screen h-screen pt-10 pb-10">
      <div className="flex items-center justify-center ">
        {loading == true ? (
          <div className="relative w-[80vw] mb-4 flex justify-center items-center bg-gray-300 animate-pulse">
            <svg
              className="w-[80%] h-[80vh] text-gray-200 dark:text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              {" "}
            </svg>
          </div>
        ) : (
          <>
            <button
              onClick={handleLeftSlide}
              className="bg-amber-300 text-white h-10 w-10 text-2xl left-40 z-2 absolute"
            >
              {"<"}
            </button>

            <img
              className="w-[80%] h-[80vh] object-cover relative"
              src={image[index]}
              alt="apiImage"
            />

            <button
              onClick={handleRightSlide}
              className="bg-amber-300 text-white h-10 w-10 text-2xl right-40 absolute"
            >
              {">"}{" "}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CarouselUsingApi;
