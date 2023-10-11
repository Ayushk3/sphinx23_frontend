import React from "react";
import roboWars from "../../../../images/events/roboWars.png";
import qr from "../../../../images/events/qr_1.jpg";
import "../../../../styles/profile.css";
import QRCode from "react-qr-code";
import "./../../../../styles/profile.css";

function Qrcard({ Code, name }) {
  return (
    <div>
      <div
        class="pass"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignContent: "center",
          height: "300px",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={Code}
          viewBox={`0 0 256 256`}
        />
        <br></br>
        <p
          class="id-text"
          style={{
            fontSize: "1.5rem",
            margin: "auto",
            letterSpacing: "0.6rem",
            fontFamily: "wity2",
          }}
        >
          #{Code}
        </p>
      </div>
      <div class="pass-id">
        <p
          class="id-text"
          // style={{
          //   fontSize: "1.2rem",
          //   fontFamily: "sans-serif",
          //   margin: "auto",
          //   fontWeight: "500",
          // }}
        >
          {/* {name} */}
          CAMPUS AMBASSADOR
        </p>
      </div>
      <div className="referral-stats">
        <p className="stats-row1">
          <span className="top">#1</span> <span>15</span> referrals
        </p>
        <p className="stats-row2">
          <span>#3</span> 12 Referrals
        </p>
        <p className="stats-row3">Refer more to ace the leaderboard</p>
        <button className="btn">VIEW LEADERBOARD</button>
      </div>
    </div>
  );
}

export default Qrcard;
