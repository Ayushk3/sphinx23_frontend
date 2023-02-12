import "./../../../../styles/userDashboard.css";
import Events from "./Events";
import Profile from "./Profile";
import Queries from "./Queries";
import HomeNav from "../../Home/homeNav";
import { useState } from "react";
import back from '../../../../images/userBack.png'

const UserDashboard = () => {
  const Tabs = ["Home", "Events", "Contact"];
  const [currTab, setCurrTab] = useState("");
  return (
    <div className="dashBack">
      <img className="dashImg" src={back}></img>
      {" "}
      <HomeNav setCurrTab={setCurrTab} currTab={currTab} Tabs={Tabs} />
      <div className="ud__containing-grid">
        <Profile />
        <Events />
        <Queries />
      </div>
    </div>
  );
};

export default UserDashboard;
