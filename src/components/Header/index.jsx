import React, { Component } from 'react';

export default class Header extends Component {

    render() {
        return (
            <header className="header">
                <h1 className="header__title">Weather App</h1>
                <div className="current-weather"> {/* block with current weather by coordinates */}
                    <h1 className="current-weather__city">Kyiv</h1>
                    <p className="current-weather__temperature">Temerature: 70 C</p>
                </div>
            </header>
        );
    }

}
