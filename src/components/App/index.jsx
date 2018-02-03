import React, { Component } from 'react';
import Header from '../Header';
import SearchForm from '../SearchForm';
import CityList from '../CityList';
import getWeatherByCityName from '../../fetch';

class App extends Component {

    state = {
        cityWeatherList: []
    }

    componentDidMount() {
        this.setState({
            cityWeatherList: JSON.parse(localStorage.getItem('city-weather-list')) || []
        })
        {/* when component did mount we will get cityWeaterList from localStorage */}
    }

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

    _addToCityList = name => {
        getWeatherByCityName(name).then(data => {
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
                    <Header />
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
