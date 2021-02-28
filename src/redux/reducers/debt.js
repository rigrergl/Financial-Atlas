const debtReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_DEBT":
      return state + 1000;
    case "DECREMENT_DEBT":
      return state - 1000;
    default:
        return state;
  }
};
export default debtReducer;
