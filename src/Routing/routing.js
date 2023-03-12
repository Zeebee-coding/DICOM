import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../Pages/Dashboard/dashboard";
import PatientOverview from "../ahmad";
import PatientHistory from "../zeeshan";
import AnnotatedChangeNumber from "../components3/teeth";
import AnnotatedRegoinOfInterest from "../components4/regionOfInterest";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/patientOverview" element={<PatientOverview />} />
        <Route path="/patientHistory" element={<PatientHistory />} />
        <Route
          path="/annotatedChangeNumber"
          element={<AnnotatedChangeNumber />}
        />
        <Route
          path="/annotatedRegoinOfInterest"
          element={<AnnotatedRegoinOfInterest />}
        />
      </Routes>
    </>
  );
}

export default Routing;
