import React, { useState } from "react";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
// import { LoadingButton } from "@mui/lab/LoadingButton";
import myImage1 from "./teeth2.jpg";
import myImage2 from "./teeth3.jpg";
import myImage3 from "./teeth4.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./teeth.css";

function Popup(props) {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: "9999",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          position: "relative",
          top: "55%",
          left: "51.9%",
          width: "93vw",
          height: "80vh",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#1E1E20",
          borderRadius: "0.5rem",
          padding: "1rem",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default function Teeth() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="teeth">
      <div className="teeth__navbar">
        <div className="navbar__left">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
        </div>
        <div className="navbar__right">
          <a href="#">Back</a>

          <Button
            onClick={() => setShowPopup(true)}
            variant="contained"
            id="overviewBTN"
          >
            <b>
              <AddCircleOutlineIcon />
              Upload X-ray
            </b>
          </Button>
          {showPopup && (
            <Popup>
              <div className="popup__outer__div">
                <div className="popup__header">
                  <div className="heading__and__closeBtn">
                    <h5>Teeth Numbering Validation</h5>
                    <CloseIcon onClick={() => setShowPopup(false)} />
                  </div>
                  <div className="one__by__one__x-ray">
                    AI X-Rays One by One
                  </div>
                </div>
                <div className="teeth__x__rays">
                  <img src={myImage1} alt="teeth" />
                  <img src={myImage1} alt="teeth" />
                  <img src={myImage1} alt="teeth" />
                  <img src={myImage2} alt="teeth" />
                  <img src={myImage2} alt="teeth" />
                  <img src={myImage2} alt="teeth" />
                  <img src={myImage1} alt="teeth" />
                  <img src={myImage1} alt="teeth" />
                  <img
                    src={myImage3}
                    alt="teeth"
                    className="vertical__image1"
                  />
                  <img src={myImage3} alt="teeth" className="vertical__image" />
                  <img
                    src={myImage3}
                    alt="teeth"
                    className="vertical__image3"
                  />

                  <img src={myImage2} alt="teeth" />
                  <img src={myImage2} alt="teeth" />
                </div>
                <div className="popup__footer">
                  <div>AI X-Rays One by One</div>
                  <Button variant="contained">
                    <b>Confirm</b>
                  </Button>
                </div>
              </div>
            </Popup>
          )}
          <a href="#">
            EN <KeyboardArrowDownIcon />
          </a>
        </div>
      </div>
      <div className="teeth__inner"></div>
    </div>
  );
}
