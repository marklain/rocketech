import React, { Component } from 'react';

export default class SearchForm extends Component {

    render() {
        let input = null;
        const { addCity } = this.props;
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                addCity(input.value);
            }} className="search-form">
                <input className="search-form__input" ref={node => (input = node)} type="text" placeholder="Enter the city name"/>
                <button className="search-form__btn" type="submit">Search</button>
            </form>
        );
    }

}
