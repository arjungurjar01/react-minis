import React, { useEffect, useState } from "react";
import Progress from "./Progress";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      if (progress < 100) {
        setProgress((p) => p + 1);
      }
    }, 100);

    return () => {
      clearInterval(time);
    };
  }, [progress]);
  return (
    <div className="w-full flex justify-center pt-50 ">
    
        <Progress progress={progress} color={"lightgreen"} />
    </div>
  );
}

export default ProgressBar;
