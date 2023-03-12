import React, { useState } from "react";
import { Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { LoadingButton } from "@mui/lab/LoadingButton";
import myImage1 from "./combineteeth.PNG";
// import myImage2 from "./teeth3.jpg";
// import myImage3 from "./teeth4.jpg";

import "./regionOfInterest.css";

// function Popup(props) {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         zIndex: "9999",
//         top: "0",
//         left: "0",
//         width: "100vw",
//         height: "100vh",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//       }}
//     >
//       <div
//         style={{
//           position: "relative",
//           top: "55%",
//           left: "51.9%",
//           width: "93vw",
//           height: "80vh",
//           transform: "translate(-50%, -50%)",
//           backgroundColor: "#1E1E20",
//           borderRadius: "0.5rem",
//           padding: "1rem",
//         }}
//       >
//         {props.children}
//       </div>
//     </div>
//   );
// }

export default function RegionOfInterest() {
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
              <PrintIcon />
              Print
            </b>
          </Button>
          <a href="#">
            EN <KeyboardArrowDownIcon />{" "}
          </a>
          <AccountCircleIcon />
        </div>
      </div>
      <div className="teeth__inner">
        <div className="teeth__inner__left">
          <table>
            <tr>
              <td>
                <span>
                  Patient name: <b>John Doe</b>
                </span>
              </td>
              <td>
                <span>
                  Patient ID: <b>001</b>
                </span>
              </td>
              <td>
                <span>
                  Age: <b>25</b>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span>
                  Date of birth: <b>06/01/1998</b>
                </span>
              </td>
              <td>
                <span>
                  Scan date: <b>08/05/2022</b>
                </span>
              </td>
              <td>
                <span>
                  Gender: <b>Male</b>
                </span>
              </td>
            </tr>
          </table>

          <img src={myImage1} alt="teeth" />
          <div className="teeth__chart">
            <div className="teeth__chart__title">
              <div className="teeth__chart__title__left">
                <h6>Tooth Chart</h6>
              </div>
              <div className="teeth__chart__title__right">
                <Button variant="contained">
                  <b>Edit teeth numbers</b>
                </Button>
                <Button variant="contained">
                  <b>Choose region of interest</b>
                </Button>
              </div>
            </div>
            <div className="teeth__chart__chart__inner"></div>
          </div>
        </div>
        <div className="teeth__inner__right">
          <div className="referal__recommendation"></div>
          <div className="fullImage__cropped"></div>
          <div className="teeth__detail1"></div>
          <div className="teeth__detail2"></div>
        </div>
      </div>
    </div>
  );
}
