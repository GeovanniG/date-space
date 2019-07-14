import React, { useState, useContext } from 'react';
import { CardContext } from '../../context/cardContext';

const DateForm = () => {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [msg, setMsg] = useState('Enter a date and receive a picture or video');
    const [ , dispatchCards] = useContext(CardContext);
    
    const callApi = async (year, month, day) => {
        try {
            const date = new Date(year, month-1, day).toJSON().split("T")[0];
            const link = `https://api.nasa.gov/planetary/apod?api_key=KlW1riylQ5ITY3IL2JaW0H045rpSJduLfqvaHd0i&date=${date}`;
            const response = await fetch(link);
            const { media_type, url, title, explanation } = await response.json();
            const card = { media_type, url, title, explanation };
            dispatchCards({ 
                type: 'ADD_CARD', 
                card 
            });
            return card;
        } catch (e) {
            setMsg('Unable to make request, server issues. Please try again later or tomorrow')
        }
    }

    const onClick = () => {
        if (!isFormValid()) return;

        callApi(year, month, day);
        clearInput('');
    }

    const isFormValid = () => {
        let err = '';
        const [ startYear, endYear ] = [ 1996, 2019 ];
        const [ startMonth, endMonth ] = [ 1, 12 ];
        const [ startDay, endDay ] = [ 1, 30 ]
        const currentYear = parseInt(new Date().getFullYear());
        const inputYear = parseInt(year);
        const currentMonth = new Date().getMonth() + 1;
        const currentDay = new Date().getDate();

        if (year === '' || month === '' || day === '') {
            err = 'Missing input';
        } else if (isNaN(year) || isNaN(month) || isNaN(day)) {
            err = 'Wrong format, use YYYY/MM/DD';
        } else if (year < startYear || year > endYear) {
            err = `Year must be within ${startYear} and ${endYear}`;
        } else if (month < startMonth || month > endMonth) {
            err = `Month must be within ${startMonth} and ${endMonth}`;
        } else if (day < startDay || day > endDay) {
            err = `Day must be within ${startDay} and ${endDay}`;
        } else if (inputYear === currentYear) {
            if (month > currentMonth || day > currentDay) {
                err = 'Date must not lie in the future'
            }
        }

        setMsg(err);
        return !err;
    }

    const clearInput = () => {
        setYear('');
        setMonth('');
        setDay('');
        setMsg('');
    } 

    return (
        <div className="mt-3">
            <form>
                <h3 className="mb-3">Astronomy Fun Facts</h3>
                {msg && <p>{msg}</p>}
                <div className="form-row">
                    <div className="col-4 col-md-3">
                        <input type="text" className="form-control" placeholder="YYYY" 
                            value={year} onChange={(e) => setYear(e.target.value)}
                        />
                    </div>
                    <div className="col-4 col-md-3">
                        <input type="text" className="form-control" placeholder="MM" 
                            value={month} onChange={(e) => setMonth(e.target.value)}
                        />
                    </div>
                    <div className="col-4 col-md-3">
                        <input type="text" className="form-control" placeholder="DD" 
                            value={day} onChange={(e) => setDay(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3 d-flex justify-content-center mt-3 mt-md-0">
                        <div className="btn-group" role="group" >
                            <button type="button" className="btn btn-primary" onClick={onClick}>Submit</button>
                            <button type="button" className="btn btn-primary" onClick={clearInput}>Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DateForm;