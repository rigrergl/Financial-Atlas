import debtReducer from "./debt";
import checkingAmtReducer from "./checkingAmt";
import savingsAmtReducer from "./savingsAmt";
import lostReducer from "./lost";
import wonReducer from "./won";
import roundReducer from "./round"

import { combineReducers } from "redux";

const allReducers = combineReducers({
  round: roundReducer,
  debt: debtReducer,
  checkingAmt: checkingAmtReducer,
  savingsAmt: savingsAmtReducer,
  lost: lostReducer,
  won: wonReducer,
});

export default allReducers;
