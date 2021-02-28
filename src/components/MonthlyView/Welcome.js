import React from "react";
import Heading from "./Heading";
import "../../styles/MonthlyView.css";
import CardFlip from "./CardFlip";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Heading />
      <p>Which account would you like to access?</p>
      <CardFlip />
    </div>
  );
};

export default Welcome;
