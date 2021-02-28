const won = (state = false, action) => {
  switch (action.type) {
    case "SET_WON":
      return true;
    default:
      return state;
  }
};
export default won;
