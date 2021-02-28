import React from "react";

//Bootsrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//Custom components
import Checking from "./Checking";
import Savings from "./Savings";
import Debt from "./Debt";
import Prize from "./Prize";
import Round from "./Round"

import "../../styles/MonthlyView.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementDebt, decrementRound } from "../../redux/actions";


export default function MonthlyView() {
  const round = useSelector((state) => state.round);
  const debt = useSelector((state) => state.debt);
  const savingsAmt = useSelector((state) => state.savingsAmt);
  const checkingAmt = useSelector((state) => state.checkingAmt);
 

  // const converter = 1;
  // const roundNumber = round / converter;

  // useEffect(() => {
  //   fetch("http://localhost:9090/test").then(async (res) =>
  //     console.log(await res.text())
  //   );
  // }, []);

  const dispatch = useDispatch();

  const advanceMonth = () => {
    dispatch(incrementDebt());
    dispatch(decrementRound());
  };

  return (
    <div>
      <div>
        <Container>
          <Row style={{ paddingTop: "20px", paddingBottom: "70px" }}>
            <Savings savingsAmt={savingsAmt} />
            <Checking checkingAmt={checkingAmt} />
          </Row>

          <h1>{`Debt: ${debt}`}</h1>
          <h1>{`Round: ${round}`}</h1>

          <Debt />

          <div className="advanceButtonContainer">
            <Button onClick={advanceMonth} className="advanceButton">
              Advance Month
            </Button>
          </div>
          <Prize />
        </Container>
      </div>
    </div>
  );
}
