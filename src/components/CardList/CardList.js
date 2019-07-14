import React, { useContext } from 'react';
import Card from '../Card/Card';
import { CardContext } from '../../context/cardContext';

const CardList = () => {
    const [cards] = useContext(CardContext);

    return (
        <div className="d-flex flex-wrap justify-content-around align-items-start">
            {cards.map(({ media_type, url, title, explanation }) => (
                <Card media_type={media_type} url={url} title={title} explanation={explanation} key={url} />                    
            ))}
        </div>
    )
}

export default CardList;