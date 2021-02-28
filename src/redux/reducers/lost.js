const lost = (state = false, action) => {
  switch (action.type) {
    case "SET_LOST":
      return true;
    default:
      return state;
  }
};
export default lost;
