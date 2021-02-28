const won = (state = false, action) => {
  switch (action.type) {
    case "SET_LOST":
      return !state;
    default:
      return state;
  }
};
export default won;
