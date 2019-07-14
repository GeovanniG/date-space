import React from 'react';
// import Header from '../Header/Header';
import CardFormProvider from '../../provider/CardFormProvider';


const Home = () => {
    return (
        <div className="container">
            {/* <Header /> */}
            <CardFormProvider />
        </div>
    )
}

export default Home;