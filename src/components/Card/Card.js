import React, { useContext, useState }  from 'react';
import { CardContext } from '../../context/cardContext';
import './Card.css';

const Card = ({  media_type, url, title, explanation }) => {
    const [ , dispatchCards ] = useContext(CardContext);
    const [showMore, setShowMore] = useState(false)

    const onClick = (e) => {
        const text = e.target.textContent;
        console.log('here', e.target);
        if (text === 'Remove') {
            dispatchCards({ 
                type: 'REMOVE_CARD', 
                title
            });
        } else if (text === 'Show More') {
            setShowMore(true);
        } else if (text === 'Show Less') {
            setShowMore(false);
        }
    }

    const showMoreTextVis = showMore ? '' : 'hide-text';
    const showMoreBtnVis = showMore ? 'hide-btn' : '';
    const showLessBtnVis = showMore ? '' : 'hide-btn';

    return (
        <div className="card my-3" style={{width: `18rem`}}>
            {media_type === 'image' && <img src={url} className="card-img-top" alt="space" />}
            {media_type === 'video' && <iframe title="space" src={url}></iframe>}
            <div className={`card-body ${showMoreTextVis}`} >
                {title && <h5 className="card-title">{title}</h5>}
                {explanation && <p className="card-text">{explanation}</p>}
            </div>
            <div className="btn-group" role="group" onClick={onClick}>
                <button type="button" className="btn btn-light">Remove</button>
                <button type="button" className={`btn btn-light ${showMoreBtnVis}`}>Show More</button>
                <button type="button" className={`btn btn-light ${showLessBtnVis}`}>Show Less</button>
            </div>
        </div>
    )
}

export default Card;