const checkingAmtReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT_CHECKING':
            return state + 1;
        case 'DECREMENT_CHECKING':
            return state - 1;
        default:
            return state;
    }
}
export default checkingAmtReducer;