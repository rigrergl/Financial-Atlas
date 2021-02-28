const savingsAmtReducer = (state=0, action) => {
  switch (action.type) {
    case "INCREMENT_SAVINGS":
      return state + 1;
    case "DECREMENT_SAVINGS":
      return state - 1;
    case "ACCRUE_SAVIGNS_INTEREST":  
        return Math.trunc(state *1.25 * 100) /100 ;
    default:
        return state;
  }
};
export default savingsAmtReducer;


