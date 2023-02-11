import React, { useEffect, useState } from "react";
import style from "../../../styles/menu.module.css";
import colseBtn from "../../../images/navClose.png";
import navLogo from "../../../images/navLogo.png";
import { RandomReveal } from "react-random-reveal";
import { useNavigate } from "react-router-dom";
import Session from "../../../Session";
import { logout } from "../../../store/modules/auth/auth.action";
import { useSelector } from "react-redux";
function Menu(props) {
  const { menu, setMenu, currTab, setCurrTab } = props;
  const [anim, setAnim] = useState(true);
  const [close, setClose] = useState(false);
  const navigate = useNavigate();
  const curruser = useSelector((state) => state.auth.curruser);
  useEffect(() => {
    if (curruser == null) {
      setLog("LOGIN/REGISTER");
    } else {
      setLog("LOGOUT");
    }
  }, [curruser]);
  const tabs = [
    "HOME",
    "ABOUT",
    "CONTACT",
    "AMBASSADOR",
    "EVENTS",
    "SCHEDULE",
    "TEAM",
    "THEME",
    "SPONSORS",
  ];
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  const [hover, setHover] = useState("");
  const TimeInterval = 0.02;
  const ChkLog = () => {
    console.log("log");
    if (log == "LOGOUT") {
      console.log("logout");
      Session.remove("profile");
      logout();
      window.location.href = "/";
      setLog("LOGIN/REGISTER");
    } else {
      navigate("/login");
    }
  };
  const random = (value, interval) => {
    return (
      <RandomReveal
        isPlaying
        duration={0.9}
        revealDuration={0.9}
        updateInterval={interval}
        characterSet={alphabet}
        characters={value}
        // onComplete={() => {
        //   setHover("");
        // }}
      />
    );
  };
  useEffect(() => {
    setTimeout(() => {
      setAnim(false);
    }, 900);
  }, []);
  const [log, setLog] = useState(
    curruser == null ? "LOGIN/REGISTER" : "LOGOUT"
  );
  const activeTab = useEffect(() => {}, []);

  console.log(
    tabs.findIndex((val, i) => {
      if (val == currTab.toUpperCase()) return currTab.toUpperCase();
    })
  );
  return (
    <div
      className={style.container}
      style={
        !close
          ? {
              WebkitAnimation: "slideInNav 400ms ease-in-out",
              WebkitAnimationFillMode: "forwards",
            }
          : {
              WebkitAnimation: "slideOutNav 400ms ease-in-out",
              WebkitAnimationFillMode: "forwards",
            }
      }
    >
      <div className={style.sec1}>
        <div className={style.secUp}>
          <div
            className={style.sideInfo}
            onMouseEnter={() => {
              setHover("discover");
            }}
          >
            <div className={style.whiteBox}></div>
            {hover == "discover" || anim ? (
              random("DISCOVER", 0.008)
            ) : (
              <span>DISCOVER</span>
            )}
          </div>{" "}
          <div className={style.menuRoutes}>
            {tabs.map((value, i) => {
              return (
                <div className={style.ele}>
                  <div
                    key={i}
                    className={
                      hover == value
                        ? style.linkActive2
                        : currTab.toUpperCase() == value.toUpperCase()
                        ? style.linkActive
                        : style.links
                    }
                    onClick={() => {
                      setCurrTab(value);
                    }}
                    onMouseEnter={() => setHover(value)}
                    onMouseLeave={() => setHover("")}
                  >
                    {hover == value || anim ? (
                      <>
                        <span style={{ opacity: 0 }}>{value}</span>
                        <div
                          style={{
                            position: "absolute",
                            overflowX: "hidden",
                            top: 0,
                            bottom: 0,
                            margin: "auto",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <RandomReveal
                            isPlaying
                            revealEasing={"linear"}
                            duration={0.9}
                            revealDuration={0.9}
                            updateInterval={0.003}
                            characterSet={alphabet}
                            characters={value}
                          />
                        </div>
                      </>
                    ) : (
                      <>{value}</>
                    )}
                  </div>
                  {(currTab.toUpperCase() == value || hover == value) && (
                    <div
                      className={style.page}
                      style={hover == value ? {} : { color: "#C1FF5C" }}
                    >
                      {random(`PAGE`)}
                      <br></br>
                      {random(`0${i}`)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.lineH2}></div>
        <div className={style.secSocial}>
          <div
            className={style.sideInfo}
            style={{ marginTop: "29px" }}
            onMouseEnter={() => {
              setHover("connect");
            }}
          >
            <div className={style.whiteBox}></div>
            {hover == "connect" || anim ? (
              random("CONNECT", 0.008)
            ) : (
              <span>CONNECT</span>
            )}
          </div>{" "}
          <div className={style.linksSocial}>
            <a
              onMouseEnter={() => {
                setHover("INSTA");
              }}
            >
              {hover == "INSTA" || anim ? (
                random("INSTAGRAM", 0.008)
              ) : (
                <span>INSTAGRAM</span>
              )}
            </a>
            <a
              onMouseEnter={() => {
                setHover("DISCORD");
              }}
            >
              {hover == "DISCORD" || anim ? (
                random("DISCORD", 0.02)
              ) : (
                <span>DISCORD</span>
              )}
            </a>
          </div>
        </div>
        <div className={style.lineH2}></div>
        <button
          className={hover != "login" ? style.login : style.logActive}
          onClick={() => {
            ChkLog();
          }}
          onMouseEnter={() => {
            setHover("login");
          }}
        >
          {hover == "login" || anim ? random(log, 0.009) : log}
        </button>
      </div>
      <div className={style.lineV}></div>
      <div
        className={style.sec2}
        onClick={() => {
          setClose(true);
          setTimeout(() => {
            setMenu(false);
          }, 350);
        }}
      >
        <div className={style.closebtn}>
          <img src={colseBtn} />
        </div>
        <div className={style.lineH2}></div>
        <div className={style.navLogo}>
          {" "}
          <img src={navLogo} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
