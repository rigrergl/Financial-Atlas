import React from "react";

//Bootstrap components
import Row from "react-bootstrap/Row"

export default function AccountsReport() {
  return (
    <div>
      <Row style={{ paddingTop: "20px", paddingBottom: "70px" }}>
        <Savings savingsAmt={savingsAmt} />
        <Checking checkingAmt={checkingAmt} />
      </Row>
    </div>
  );
}
