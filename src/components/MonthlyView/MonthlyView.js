import React from "react";

//Bootsrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//Custom components
import Checking from "./Checking";
import Savings from "./Savings";
import Prize from "./Prize";

import "../../styles/MonthlyView.css";

export default function MonthlyView() {
  const savingsAmt = 2555;
  const checkingAmt = 1354;

  return (
    <div>
      <div>
        <Container>
          <Row style={{ paddingTop: "20px", paddingBottom: "70px" }}>
            <Savings savingsAmt={savingsAmt} />
            <Checking checkingAmt={checkingAmt} />
          </Row>

          <div className="advanceButtonContainer">
            <Button className="advanceButton">Advance Month</Button>
          </div>
          <Prize />
        </Container>
      </div>
    </div>
  );
}
