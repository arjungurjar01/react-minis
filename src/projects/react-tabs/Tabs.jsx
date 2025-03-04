import React, { useState } from "react";
import Button from "./Button";

function Tabs({ tabs }) {
    const [selectedIndex,setSelectedIndex] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
//    console.log(tabs);

    const handleSelectedIndex = (index) =>{
        return () =>{
             setSelectedIndex(index);
             setActiveTab(index)
            }
    } 

    const Component = tabs[selectedIndex].content ;   //here we can use jsx component content
  return (
    <div role="tablist" className="p-10 bg-[#f1f1f1] rounded-b-lg w-100 h-100">
       <div className="flex">
      {tabs.map((tab, index) => {
        return (
            <Button 
            key={tab.id}
            role="tab"
            aria-selected={index === selectedIndex}
            activeTab={activeTab}
            index={index}
            label={tab.label}
            onClick={handleSelectedIndex(index)}
            />
        );
      })}
       </div>

       <div role="tabpanel" className="m-2">
       {Component}
       </div>
     
    </div>
  );
}

export default Tabs;
