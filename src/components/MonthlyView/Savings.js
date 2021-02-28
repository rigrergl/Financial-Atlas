import React from "react";
import NumberFormat from 'react-number-format';

//Bootstrap components
import Col from "react-bootstrap/Col";

export default function Savings({savingsAmt}) {
  return (

      <Col>
        <p className="accountTitle">Savings:</p>
        <NumberFormat value={savingsAmt} displayType={'text'} thousandSeparator={true} prefix={'$'} className="money"/>
      </Col>

  );
}
