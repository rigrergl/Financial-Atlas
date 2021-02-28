import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";
import { } from "../../redux/actions";


export default function Debt() {
  const debt = useSelector((state) => state.debt);

  const MAX_DEBT = 25000;
  const debtRatio = debt / MAX_DEBT;

  return (
    <div>
      <ProgressBar
        variant="danger"
        animated
        now={debtRatio * 100}
        label={`Debt: \$${debt}`}
      />
    </div>
  );
}
