import React from "react";
import Col from "react-bootstrap/Col";
import NumberFormat from 'react-number-format';

export default function Checking({checkingAmt}) {
  return (

      <Col>
        <p className="accountTitle">Checking:</p>
        <NumberFormat value={checkingAmt} displayType={'text'} thousandSeparator={true} prefix={'$'} className="money"/>
      </Col>

  );
}
