import React, { useState } from "react";
import create from "../../../../../images/create_event.png";
import { storage } from "../../../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";
import EventTab from "./EventTab";
import Dashboard_Header from "../../../../components/Dashboard_Header";
function SuperEvent() {
  const [tabActive, setTab] = useState("All Events");

  const events = useSelector((state) => state.auth.events);
  const onUpload = () => {
    const file = document.getElementById("eventImg");
    const storageRef = ref(storage, `events/pass2`);
    if (file != null) {
      const uploadTask = uploadBytesResumable(storageRef, file.files[0]);
      uploadTask.on(
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log(downloadURL);
          });
        }
      );
    }
  };

  return (
    <div className="super-event">
      <Dashboard_Header
        settab={setTab}
        tabactive={tabActive}
        title={"Tech Events"}
        tabs={["All Events", "Past Events"]}
        createEventBool={true}
      />
      {/* <input type={"file"} id="eventImg"></input> */}

      {
        {
          "All Events": (
            <section className="desktop14-about">
              <EventTab all={true} />
            </section>
          ),
          "Past Events": <EventTab all={false} />,
        }[tabActive]
      }
    </div>
  );
}

export default SuperEvent;