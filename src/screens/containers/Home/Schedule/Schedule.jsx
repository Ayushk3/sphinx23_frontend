import React from 'react'
import { useState, useEffect } from 'react';
import "./schedule.css"

const Schedule = ({events}) => {
    const [unit, setUnit] = useState(0);
    const colors = {FLAGSHIP: "#5CE1E6", CLUB:"#9EDDFF", WORKSHOPS: "#5EC7FF",
  DEPARTMENT: "#85B6FF", "FUN ACTIVITIES": "#AF9FFD", "FAIRS/EXHIBITIONS": "#D5B8FF",
  CULTURAL: "#F8B6ED", CONCLAVE: "#5EFFC0"};
    const changeUnit = () => {
      const row =
        document.getElementById("schedule");
      if (row)
        setUnit(Math.floor(row.clientWidth / 30));
    };
    useEffect(()=>{
      window.addEventListener("resize", changeUnit);
      return ()=>{
        window.removeEventListener("resize", changeUnit)
      }
    },[])
    useEffect(()=>{
      changeUnit()
    },[])
    return (
      <div className="container">
        <div
          id="schedule"
          style={{ color: "black" }}
        >
          <div className="table-row">
            <div
              className="row-header"
              style={{
                minWidth: `${unit * 3}px`,
              }}
            ></div>
            <div
              className="row-events"
              style={{
                display: "flex",
              }}
            >
              {[...Array(14).keys()].map((item) => {
                return (
                  <div
                    key={item}
                    style={{
                      display: "block",
                      position: "relative",
                      color: "white",
                      width: `${unit * 2}px`,
                    }}
                  >
                    {item + 9 < 12
                      ? `${item + 9}AM`
                      : item + 9 - 12 === 0
                      ? `12PM`
                      : `${item + 9 - 12}PM`}
                  </div>
                );
              })}
            </div>
          </div>
    
          {Object.keys(events).map((typeEvent, idx) => {
            return <div key={idx} className="table-row" >
              <div
                className="row-header"
                style={{
                  width: `${unit * 3}px`,
                  backgroundColor: colors[typeEvent],
                  transform: `translateX(${- unit * 0.3}px)`,
                }}
              >
                {typeEvent}
              </div>
              <div className="row-events" style={{width: `${unit*27}px`}}>
                {events[typeEvent].map((it) =>  {
                  return <div className="event-sub-row" 
                  > {it.map(
                    (
                      {
                        name,
                        startTime,
                        endTime,
                        organiser,
                        location
                      },
                      ind
                    ) => {
                      let prev = ind===0 ? {name:"0th",startTime: "00:00", endTime: "09:00"} : it[ind-1];
                      return (<div
                       className="event-card"
                    
                        key={ind}
                        style={{
                          zIndex: `${ind}`,
                          backgroundColor: colors[typeEvent],
                          left: `${ (parseInt(startTime.slice(0,2)) + parseInt(startTime.slice(3,5))/60 - 9)*unit*2
                          }px`,
                          width: `${
                            Math.abs(  ( parseInt(endTime.slice(0, 2)) + parseInt(endTime.slice(3,5))/60 - parseInt(startTime.slice(0, 2))  )
                            *
                            unit *
                            2) 
                          }px`,
                        }}
                      >
                        <div className="organiser-name">{organiser==="" ?  ``:`${organiser}'s` }</div>
                        <div className="event-name">{name}</div>
                        <div className="event-loc" style={{fontSize: `${unit*0.2}px`}}>
                          {location ? `[${location}]` : ``}</div>
                      </div>);
                    }
                  ) }</div>
                })
                }
              </div>
            </div>;
          })}
            
        </div>
        
      </div>
    );
}

export default Schedule
