// This is a main component which name is 'APP', it's a Class, because it have a State, other components are functional components, which haven't state and just get props and render HTML;

// Import block

import React, { Component } from 'react';
import Header from '../Header';
import SearchForm from '../SearchForm';
import CityList from '../CityList';
import { getWeatherByCityName, getWeatherByCoords } from '../../fetch';

class App extends Component {

    state = {
        cityWeatherList: []
    }

    // when component did mount we will get cityWeaterList from localStorage and get user coordinates from obj navigator.coordinates

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            getWeatherByCoords(`${position.coords.latitude.toFixed()}`, `${position.coords.longitude.toFixed()}`).then(data => this.setState({
                currentWeather: `Temerature in your city: ${data}`
            }));
        });
        setTimeout(() => {
            this.setState({
                cityWeatherList: JSON.parse(localStorage.getItem('city-weather-list')) || []
            })
        }, 200);
    }

    // function for delete any card from CityList

    _deleteFromCityList = id => {
        const list = this.state.cityWeatherList.filter(city => city.id !== id)
        this.setState({
            cityWeatherList: list
        });
        setTimeout(() => {
            let cityList = JSON.stringify(this.state.cityWeatherList);
            localStorage.setItem('city-weather-list', cityList);
        }, 100);
    }

    // function for add cityCard to CityList

    _addToCityList = name => {
        getWeatherByCityName(name).then(data => {
            if (data === undefined) {
                return;
            }
            if (this.state.cityWeatherList.find(city => city.id === data.id) === undefined) {
                this.setState(prevState => ({
                    cityWeatherList: [...prevState.cityWeatherList, data]
                }));
            } else alert('This city is already in your list :)')

        });
        setTimeout(() => {
            let cityList = JSON.stringify(this.state.cityWeatherList);
            localStorage.setItem('city-weather-list', cityList);
        }, 100);
    }
        render() {
            return (
                <div className="container">
                    <Header currentWeather={this.state.currentWeather}/>
                    <SearchForm addCity={this._addToCityList}/>
                    <CityList
                        cityWeatherList={this.state.cityWeatherList}
                        deleteFromList={this._deleteFromCityList}
                    />
                </div>
            );
      }
}

export default App;
