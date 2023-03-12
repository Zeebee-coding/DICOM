import React from "react";
import { Button } from "@mui/material";
import "./dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard__header">
          <ul>
            <Link to="/patientOverview">
              <Button variant="contained">
                <b>Patient Overview</b>
              </Button>
            </Link>
            <Link to="/patientHistory">
              <Button variant="contained">
                <b>Patient History</b>
              </Button>
            </Link>
            <Link to="/annotatedChangeNumber">
              <Button variant="contained">
                <b>Annotated Change Number</b>
              </Button>
            </Link>
            <Link to="/annotatedRegoinOfInterest">
              <Button variant="contained">
                <b>Annotated Regoin of Interest</b>
              </Button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
