import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";

export default function Debt({ MAX_DEBT }) {
  const debt = useSelector((state) => state.debt);
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
