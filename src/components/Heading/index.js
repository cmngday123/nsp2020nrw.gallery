import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { withRouter } from "react-router-dom";
import infoSVG from "../../assets/icons/info.svg";
import volUp from "../../assets/icons/vol_up.svg";
import volOff from "../../assets/icons/vol_off.svg";
import music from "../../assets/audio/music.mp3";
import UoMLogo from "../UoMLogo";

const Heading = ({ history, playMusic, toggleMusic }) => {
  return (
    <div className="heading">
      <div
        className="umlogo-heading"
        onClick={() =>
          (window.location.href =
            "https://students.unimelb.edu.au/student-precinct/home ")
        }
      >
        <UoMLogo />
      </div>
      <div className="right">
        National Reconciliation Week 2020 Virtual Gallery
        <img
          style={{ cursor: "pointer" }}
          src={infoSVG}
          onClick={() => history.push("/info")}
        />
        <div
          onClick={toggleMusic}
          style={{ cursor: "pointer", marginTop: "1%" }}
        >
          {!playMusic ? <img src={volOff} /> : <img src={volUp} />}
        </div>
      </div>
    </div>
  );
};
export default withRouter(Heading);
