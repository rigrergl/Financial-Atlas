import React from "react";

//Bootsrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//Custom components
import Checking from "./Checking";
import Savings from "./Savings";
import Debt from "./Debt";

import "../../styles/MonthlyView.css";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../redux/actions";

export default function MonthlyView() {
  const savingsAmt = 2555;
  const checkingAmt = 1354;

  // useEffect(() => {
  //   fetch("http://localhost:9090/test").then(async (res) =>
  //     console.log(await res.text())
  //   );
  // }, []);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Container>
          <Row style={{ paddingTop: "20px", paddingBottom: "70px" }}>
            <Savings savingsAmt={savingsAmt} />
            <Checking checkingAmt={checkingAmt} />
          </Row>

          <Debt />

          <div className="advanceButtonContainer">
            <Button onClick={() => dispatch(increment())} className="advanceButton">Advance Month</Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
