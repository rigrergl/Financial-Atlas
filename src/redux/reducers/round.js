const round = (state = 3, action) => {
    switch(action.type){
        case 'DECREMENT_ROUND':
            return state===0? 3 : state - 1;
        default:
            return state;
    }
}
export default round;