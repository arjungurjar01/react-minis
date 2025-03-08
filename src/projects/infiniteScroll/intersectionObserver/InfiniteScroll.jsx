import React, { useEffect, useRef, useState } from "react";

function InfiniteScroll({ data, setPageNo  }) {
  const imageRef = useRef([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
        //   console.log(entries);
          setLoading(true);
          observer.unobserve(entries[0].target);
          setPageNo((prevPageNo) => prevPageNo + 1);
        }
      },
      {
        threshold: 0.6,
      }
    );

    const lastElement = imageRef.current.at(-1);
    // console.log(lastElement)
    if (!lastElement) {
      return;
    }
    observer.observe(lastElement);

    return () =>{
        if(lastElement){
            setLoading(false);
            // observer.unobserve(lastElement);
            observer.disconnect();
        }
        observer.disconnect();
    }
  }, [data,setPageNo]);

  return (
    <div  className="flex flex-col justify-center items-center h-full mt-10 bg-red pt-10 overflow-auto">
     
      {data.map((item, index) => {
        return ( 
          <img
          id={item.id}
            key={index}
            ref={(el) => {if (el) imageRef.current[item.id] = el;
             }}
            className="w-1/2 mb-2 rounded-md"
            src={item.download_url}
            alt="image"
          /> 
        
        );
      })}
      {loading && <p className='text-xl text-black'>Loading...</p>}
    </div>
  );
}

export default InfiniteScroll;
