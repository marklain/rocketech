import React, { Component } from 'react';

export default class CityCard extends Component {

    render() {
        const { name, temp, id, deleteFromList } = this.props;
        return (
            <div className="city-list__item">
                <div className="city-card">
                    <h1 className="city-card__name">{name}</h1>
                    <p className="city-card__weather">Today: {temp}</p>
                    <p className="city-card__weather">Tomorrow: {id}</p>
                    <button onClick={() => {deleteFromList(id)}} className="city-card__btn">-</button>
                </div>
            </div>
        );
    }

};
