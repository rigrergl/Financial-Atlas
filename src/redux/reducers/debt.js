const debtReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1000;
    case "DECREMENT":
      return state - 1000;
    default:
        return state;
  }
};
export default debtReducer;
