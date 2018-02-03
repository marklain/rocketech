export default function getWeatherByCityName(city) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f20b2ce546addf698745b61dc8d186a7`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(`Error while fetching ${response.statusText}`);
        })
        .then(data => {
            const newCity = {
                id: data.id,
                name: data.name,
                temp: `${(data.main.temp - 273.15).toFixed()} C`
            }
            return newCity;
        })
        .catch(err => console.error(err));

};
