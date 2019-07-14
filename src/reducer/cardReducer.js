const cardReducer = (state, action) => {
    switch (action.type) {
        case 'REMOVE_CARD':
            return state.filter(card => card.title !== action.title);
        case 'ADD_CARD':
            return [ ...state, action.card ];
        default:
            return state;
    }
}

export default cardReducer;