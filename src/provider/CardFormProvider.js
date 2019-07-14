import React from 'react';
import CardList from '../components/CardList/CardList';
import { CardProvider } from  '../context/cardContext';
import DateForm from '../components/DateForm/DateForm';

const CardFormProvider = () => {
    return (
        <CardProvider>
            <DateForm />
            <CardList />
        </CardProvider>
    );
}

export default CardFormProvider;
