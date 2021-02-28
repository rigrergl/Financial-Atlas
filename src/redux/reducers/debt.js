const debtReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_DEBT":
      return state + 1;
    case "DECREMENT_DEBT":
      return state - 1;
    default:
        return state;
  }
};
export default debtReducer;
