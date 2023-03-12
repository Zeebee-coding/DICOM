import React, { Fragment } from "react";
import "./header.css";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
function Header() {
  return (
    <Fragment>
      <div className="header-container">
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontWeight: "bold", mb: "0px" }}
        >
          Monica <br /> Adamson
        </Typography>
        <p>
          <strong>January 12 1998, 33 y.o ID 23965</strong>
        </p>
        <div className="buttons-section">
          <div className="left">
            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#7A69F5ff" }}
            >
              Overview
            </Button>
            <Button
              size="small"
              style={{ color: "#7A69F5ff", backgroundColor: " #D9DCE3ff" }}
              sx={{ m: 0.5 }}
            >
              History
            </Button>
          </div>
          <div className="right">
            <Button
              style={{
                color: "#7A69F5ff",
                backgroundColor: " #D9DCE3ff",
                padding: "8px",
              }}
              size="small"
              color="secondary"
              sx={{ m: 0.5 }}
            >
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ margin: 0 }}
              ></i>
            </Button>
            <Button
              variant="contained"
              size="small"
              style={{ backgroundColor: "#7A69F5ff" }}
            >
              Upload new study
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
