import React, { useState } from "react";
import "../../../styles/ambass-leaderboard.css";
import user from "../../../images/user_1.png";
import HomeNav from "./homeNav";

const AmbassadorLeaderboard = () => {
  const Tabs = ["Home", "Events", "Profile"];
  const [currTab, setCurrTab] = useState(
    "LEADERBOARD"
  );
  return (
    <div>
      <HomeNav
        setCurrTab={setCurrTab}
        currTab={currTab}
        Tabs={Tabs}
        notanimation={true}
        landing={false}
        setLand={() => {}}
      />
      <div className="path">
        <span>Campus Ambassador</span> {"<"} Leaderboard
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a className="active" href="#">
              Leaderboard
            </a>
          </li>
        </ul>
      </nav>

      <div className="leaderboard-header">
        <div className="rank">Rank</div>
        <div className="user">
          <div className="user-header">USER NAME</div>
        </div>
        <div className="college-name moveX">College Name</div>
        <div className="referrals">Referrals</div>
      </div>

      <div className="leaderboard-container">
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
        <div className="board-item">
          <div className="rank"># 0001</div>
          <div className="user">
            <div className="user-img">
              <img src={user} alt="user-image" />
            </div>
            <div className="username">Kishan Srivastava</div>
          </div>
          <div className="college-name">MNIT Jaipur</div>
          <div className="referrals">10 referrals</div>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorLeaderboard;
