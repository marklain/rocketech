import React, { Component } from 'react';
import CityCard from '../CityCard';

export default class CityList extends Component {

    render() {
        const { cityWeatherList, deleteFromList } = this.props;
        return (
            <div className="city-list">
                {cityWeatherList.map(city => <CityCard key={city.id} id={city.id} name={city.name} temp={city.temp} deleteFromList={deleteFromList} />)}
            </div>
        );
    }

};
