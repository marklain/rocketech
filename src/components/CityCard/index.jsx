import React from 'react';
import PropTypes from 'prop-types';

// Here is CityCard component. So it's a card of City which we will add from SearchForm input, and which we can delete by the "-" button
const CityCard = ({ name, tempToday, tempTomorrow, id, deleteFromList }) => (
            <div className="city-list__item">
                <div className="city-card">
                    <h1 className="city-card__name">{name}</h1>
                    <p className="city-card__weather">Today at 12.00 pm: {tempToday}</p>
                    <p className="city-card__weather">Tomorrow at 12.00 pm: {tempTomorrow}</p>
                    <button onClick={() => {deleteFromList(id)}} className="city-card__btn">-</button>
                </div>
            </div>
        );

// Here is we write all PropTypes for our component.

CityCard.propTypes = {
    name: PropTypes.string.isRequired,
    tempToday: PropTypes.string.isRequired,
    tempTomorrow: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    deleteFromList: PropTypes.func.isRequired
};

export default CityCard;
