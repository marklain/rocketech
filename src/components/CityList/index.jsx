import React from 'react';
import PropTypes from 'prop-types';
import CityCard from '../CityCard';

// It's a CityList Component, which renders a collection of our CityCards, with props, which we get from FETCH API :)

const CityList = ({ cityWeatherList, deleteFromList }) => (
            <div className="city-list">
                {cityWeatherList.map(city => <CityCard key={city.id} id={city.id} name={city.name} tempToday={city.tempToday} tempTomorrow={city.tempTomorrow} deleteFromList={deleteFromList} />)}
            </div>
        );

// Here we write all PropTypes for our component.

CityList.propTypes = {
    cityWeatherList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        tempToday: PropTypes.string.isRequired,
        tempTomorrow: PropTypes.string.isRequired,
    })),
    deleteFromList: PropTypes.func.isRequired
};
export default CityList;
