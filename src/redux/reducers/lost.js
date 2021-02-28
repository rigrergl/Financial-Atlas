const lost = (state = false, action) => {
  switch (action.type) {
    case "SET_LOST":
      return !state;
  }
};
export default lost;    