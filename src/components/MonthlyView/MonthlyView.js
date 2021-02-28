import React from "react";
import { useHistory  } from "react-router-dom";

//Bootsrap components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//Custom components
import Checking from "./Checking";
import Savings from "./Savings";
import Debt from "./Debt";
import PrizeList from "./PrizeList";
import SavingsOpen from "./SavingsOpen"
import Income from "./Income"

import "../../styles/MonthlyView.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementDebt, decrementRound, accrueSavingsInterest, incrementChecking, decrementChecking } from "../../redux/actions";


export default function MonthlyView() {
  const round = useSelector((state) => state.round);
  const debt = useSelector((state) => state.debt);
  const savingsAmt = useSelector((state) => state.savingsAmt);
  const checkingAmt = useSelector((state) => state.checkingAmt);
 
  let isSavingsOpen = round === 0;
  const MONTHLY_INCOME = 1000;
  const MAX_DEBT = 25000;
  const MONTHLY_DEBT = 5000;
  let history = useHistory();

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
    dispatch(accrueSavingsInterest());
    
    earnIncome();
    checkLost();
    accrueDebt();
  };

  const earnIncome = () => {
    let i;
    for(i = 0; i < MONTHLY_INCOME; i++){
      dispatch(incrementChecking());
    }
  }

  const accrueDebt = () => {

    let i;
    for(i = 0; i < MONTHLY_DEBT; i++)
      dispatch(incrementDebt());
  }

  const checkLost = () => {
      if(debt > MAX_DEBT){
        console.log("lost")
        history.push('/lose')
      }
  }

  return (
    <div>
      <div>
        <Container>
          <Row style={{ paddingTop: "20px", paddingBottom: "70px" }}>
            <Savings savingsAmt={savingsAmt} />
            <Income MONTHLY_INCOME={MONTHLY_INCOME}/>
            <Checking checkingAmt={checkingAmt} />
          </Row>

          <SavingsOpen isSavingsOpen={isSavingsOpen} round={round}/>

          <Debt MAX_DEBT={MAX_DEBT}/>

          <div className="advanceButtonContainer">
            <Button onClick={advanceMonth} className="advanceButton">
              Advance Month
            </Button>
          </div>
          
          <PrizeList />
        </Container>
      </div>
    </div>
  );
}
