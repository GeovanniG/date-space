import React, { useReducer } from 'react';
import cardReducer from '../reducer/cardReducer';

const initialState = [];

const CardContext = React.createContext(initialState);

const CardProvider = (props) => {
    const [cards, dispatchCards] = useReducer(cardReducer, initialState);

    return (
        <CardContext.Provider value={[ cards, dispatchCards ]} >
            {props.children}
        </CardContext.Provider>
    )
}

export { CardContext, CardProvider };