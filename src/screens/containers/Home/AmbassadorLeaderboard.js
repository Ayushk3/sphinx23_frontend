import React, { useState } from "react";
import "../../../styles/ambass-leaderboard.css";
import user from "../../../images/user_1.png";
import HomeNav from "./homeNav";

const AmbassadorLeaderboard = () => {
  const Tabs = ["Home", "Events", "Profile"];
  const [currTab, setCurrTab] = useState("LEADERBOARD");
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

      <div className="top-ambassador">
        <div className="ambassador-rank2">
          <div className="rank2-user">
            <img
              src={user}
              className="rank2-user-photo"
              alt="rank2-user-img"
            ></img>
            <div className="rank2-user-details">
              <p className="rank2-user-name">Kishan Srivastava</p>
              <p className="rank2-user-college">MNIT Jaipur</p>
            </div>
          </div>
          <div className="rank2-referrals">
            <span>12</span> Referrals
            <p>#2</p>
          </div>
        </div>
        <div className="ambassador-rank1">
          <div className="rank1-user">
            <img
              src={user}
              className="rank1-user-photo"
              alt="rank1-user-img"
            ></img>
            <div className="rank1-user-details">
              <p className="rank1-user-name">Kishan Srivastava</p>
              <p className="rank1-user-college">MNIT Jaipur</p>
            </div>
          </div>
          <div className="rank1-referrals">
            <span>12</span> Referrals
            <p>#1</p>
          </div>
        </div>
        <div className="ambassador-rank3">
          <div className="rank3-user">
            <img
              src={user}
              className="rank3-user-photo"
              alt="rank3-user-img"
            ></img>
            <div className="rank3-user-details">
              <p className="rank3-user-name">Kishan Srivastava</p>
              <p className="rank3-user-college">MNIT Jaipur</p>
            </div>
          </div>
          <div className="rank3-referrals">
            <span>12</span> Referrals
            <p>#3</p>
          </div>
        </div>
      </div>

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
          <div className="rank"># 01</div>
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
          <div className="rank"># 02</div>
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
          <div className="rank"># 03</div>
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
          <div className="rank"># 04</div>
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
          <div className="rank"># 05</div>
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
          <div className="rank"># 06</div>
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
          <div className="rank"># 07</div>
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
          <div className="rank"># 08</div>
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
          <div className="rank"># 09</div>
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
          <div className="rank"># 10</div>
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
          <div className="rank"># 11</div>
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
          <div className="rank"># 12</div>
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
          <div className="rank"># 13</div>
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
          <div className="rank"># 14</div>
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
          <div className="rank"># 15</div>
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
          <div className="rank"># 16</div>
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
          <div className="rank"># 17</div>
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
