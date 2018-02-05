import React from 'react';
import PropTypes from 'prop-types';

// Here is a Header component. It gets current weather as prop, from FETCH API, when APP did mount (you can read about it in App/index.jsx). So it's just a header, very simple :)

const Header = ({ currentWeather }) => (
            <header className="header">
                <h1 className="header__title">Weather App</h1>
                <div className="current-weather"> {/* block with current weather by coordinates */}
                    <h1 className="current-weather__city">Kyiv</h1>
                    <p className="current-weather__temperature">{currentWeather}</p>
                </div>
            </header>
        );

// Here we write all PropTypes for our component.

Header.propTypes = {
    currentWeather: PropTypes.string
}
export default Header;
