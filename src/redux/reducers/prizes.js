const prizeReducer = (state = 3, action) => {
  switch (action.type) {
    case "DECREMENT_PRIZES":
      return state - 1;
    default:
      return state;
  }
};
export default prizeReducer;
