import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Transfer from "./Transfer";
import "../../styles/MonthlyView.css";

const CardFlip = () => {
  return (
    <div>
      <div className="flip-main-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>Checking</h1>
              <img
                src="/checking.png"
                alt="Avatar"
                style={{ width: "296px", height: "310px", marginLeft: "0" }}
              />
            </div>
            <div className="flip-card-back">
              <Transfer destination="Savings"/>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>Savings</h1>
              <img
                src="/save.png"
                alt="Avatar"
                style={{ width: "296px", height: "310px", marginLeft: "0" }}
              />
            </div>
            <div className="flip-card-back">
              <Transfer destination="Checking" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
