//debt
export const incrementDebt = () => {
  return {
    type: "INCREMENT_DEBT",
  };
};

//round
export const decrementRound = () => {
  return {
    type: "DECREMENT_ROUND",
  };
};

//savings
export const incrementSavings = () => {
  return {
    type: "INCREMENT_SAVINGS",
  };
};

export const decrementSavings = () => {
  return {
    type: "DECREMENT_SAVINGS",
  };
};

export const accrueSavingsInterest = () => {
  return {
    type: "ACCRUE_SAVIGNS_INTEREST",
  };
};


//checking
export const incrementChecking = () => {
  return {
    type: "INCREMENT_CHECKING",
  };
};

export const decrementChecking = () => {
  return {
    type: "DECREMENT_CHECKING",
  };
};


