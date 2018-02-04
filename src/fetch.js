//It's a fetch.js file, where we keep our fetch request functions.


// Here is function which get cityName as parameter and send a FETCH API Request for weather info by CityName for today at 12.00 pm and for tomorrow at 12.00 pm too.

export function getWeatherByCityName(city) {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=f20b2ce546addf698745b61dc8d186a7`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            alert('Incorrect. Please enter correct city name');
            throw new Error(`Error while fetching ${response.statusText}`);
        })
        .then(data => {
            const newCity = {
                id: data.city.id,
                name: data.city.name,
                tempToday: `${(data.list[0].main.temp - 273.15).toFixed()} C`,
                tempTomorrow: `${(data.list[8].main.temp - 273.15).toFixed()} C`
            }
            return newCity;

        })
        .catch(err => console.error(err));

};

// Here is function which get lat(latitude) and lon(longitude) as parameters and send a FETCH API Reques for weather info by coordinates;

export function getWeatherByCoords(lat, lon) {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=f20b2ce546addf698745b61dc8d186a7`)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(`Error while fetching ${response.statusText}`);
    })
    .then(data => {
            let temp = `${(data.main.temp - 273.15).toFixed()} C`
            return temp;
    })
    .catch(err => console.error(err));
};
