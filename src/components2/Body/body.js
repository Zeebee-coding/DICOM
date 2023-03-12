import React from "react";
import { Button } from "@mui/material";
import { TextField, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import Card from "../Card/card";
import DropdownMenu from "../Dropdown/dropdown";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

import "./body.css";

function Body() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const formattedDate = `${monthName} ${day} ${year}`;

  return (
    <div className="main">
      <div className="app">
        <div className="image"></div>

        <p>
          <b>{formattedDate}, 33 y.o ID 23965</b>
        </p>

        <div className="topNavButtons">
          <div className="topNavButtons_left">
            <Button variant="contained" id="overviewBTN">
              <b>Overview</b>
            </Button>
            <Button variant="contained" id="historyBTN">
              <b>History</b>
            </Button>
          </div>
          <div className="topNavButtons_right">
            <ZoomOutMapIcon />
            <Button variant="contained" id="uploadNewstudy_btn">
              <b>Upload New Study</b>
            </Button>
          </div>
        </div>

        <div className="navbarBtnGroup_and_Searchbar">
          <div className="navbarBtnGroup">
            <Button variant="contained" id="all_btn">
              <b>
                All <span>103</span>
              </b>
            </Button>
            <Button variant="contained" id="" className="common_style">
              <b>
                Patients <span>103</span>
              </b>
            </Button>
            <Button variant="contained" id="" className="common_style">
              <b>
                Tasks <span>103</span>
              </b>
            </Button>
            <Button variant="contained" id="" className="common_style">
              <b>
                Reports <span>103</span>
              </b>
            </Button>
            <Button variant="contained" id="" className="common_style">
              <b>
                Comments <span>103</span>
              </b>
            </Button>
          </div>
          <div className="inputField">
            <TextField
              fullWidth
              id="standard-bare"
              variant="outlined"
              defaultValue=""
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchOutlined />
                  </IconButton>
                ),
              }}
            />
          </div>
        </div>
        <DropdownMenu />
        <div className="today_cardsList">
          <h1>Today</h1>
          <div className="cardssss">
            <Card
              avatar="https://unsplash.com/photos/WNoLnJo7tS8"
              name="John Doe"
              time="2:30 PM"
              type="file"
              message="https://example.com/file.pdf"
            />
            <Card
              avatar="https://unsplash.com/photos/iEEBWgY_6lA"
              name="John Doe"
              time="2:30 PM"
              type="file"
              message="https://example.com/file.pdf"
            />
            <Card
              avatar="https://unsplash.com/photos/ZHvM3XIOHoE"
              name="Jane Doe"
              time="3:00 PM"
              type="message"
              message="Hi, how are you?"
            />
            <Card
              avatar="https://unsplash.com/photos/MTZTGvDsHFY"
              name="Jane Doe"
              time="4:00 PM"
              type="message"
              message="Hi, how are you?"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
