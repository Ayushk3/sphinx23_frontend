import "./table.css";
import React, {useState} from "react";
import Schedule from "./Schedule";
import DAYS from "./days.js"
import HomeNav from "../homeNav";

const TimeTable = () => {
  const Tabs = ["Home", "Events", "Profile"];
  const [currTab, setCurrTab] = useState("SCHEDULE");
  return (
    <>
    <HomeNav
        setCurrTab={setCurrTab}
        currTab={currTab}
        Tabs={Tabs}
        notanimation={true}
        landing={false}
        setLand={() => {}}
      />
    <div className= "time-table">
      
      
      <div className="one-day">
    <h1 className="day-num">DAY 1</h1>
    <Schedule events = {DAYS.DAY_1}/>
    </div>
    <div>
    <h1 className="day-num">DAY 2</h1>
    <Schedule events = {DAYS.DAY_2}/>
    </div>
    <div>
    <h1 className="day-num">DAY 3</h1>
    <Schedule events = {DAYS.DAY_3}/>
    </div>
    </div>
    </>
  );
};

export default TimeTable;
