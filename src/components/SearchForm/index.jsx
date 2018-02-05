import React from 'react';
import PropTypes from 'prop-types';

let input = null;

// Here is a SearchForm component. It's a form, where we put the city name, which we want. And send this information to API request, to get weather info for out CityCard ;)

const SearchForm = ({ addCity }) =>(
            <form onSubmit={(e) => {
                e.preventDefault();
                addCity(input.value);
            }} className="search-form">
                <input className="search-form__input" ref={node => (input = node)} type="text" placeholder="Enter the city name"/>
                <button className="search-form__btn" type="submit">Search</button>
            </form>
        );

// Here we write all PropTypes for our component.

SearchForm.propTypes = {
    addCity: PropTypes.func.isRequired
};

export default SearchForm;
