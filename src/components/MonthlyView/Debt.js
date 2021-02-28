import React from "react";

import ProgressBar from "react-bootstrap/ProgressBar";

export default function Debt( {debt} ) {
    const MAX_DEBT = 25000;
    const debtPercentage = debt/MAX_DEBT;

  return (
    <div>
      <ProgressBar variant="danger" animated now={debtPercentage * 100} label=""/>
    </div>
  );
}
