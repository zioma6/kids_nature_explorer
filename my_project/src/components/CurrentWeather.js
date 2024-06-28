import React, {useEffect, useState} from 'react';
import "../sass/_currentWeather.scss";

const CurrentWeather = ({setWeatherData}) => {

    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const apiKey = '4d2438a46251d3dc68d4fdaad1ecfd91';

    useEffect(() => {
        const getWeather = async (lat, lon) => {
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pl`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Problem z pobraniem danych');
                }
                const data = await response.json();
                setWeather(data);
                setWeatherData(data);
            } catch (error) {
                setError(error.message);
            }
        };

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        getWeather(lat, lon);
                    },
                    () => {
                        setError('Nie udało się uzyskać lokalizacji');
                    }
                );
            } else {
                setError('Geolokacja nie jest wspierana przez tę przeglądarkę.');
            }
        };

        getLocation();
    }, [setWeatherData]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!weather) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className="weather__title">Aktualna Pogoda</h1>
            <div className="weather__details">
                <div className="weather__details--place">
                    <p>Miejsce:</p>
                    <p>{weather.name}</p>
                </div>
                <div className="weather__details--temperature">
                    <p>Temperatura:</p>
                    <p>{weather.main.temp} °C</p>
                </div>
                <div className="weather__details--description">
                    <p>Opis:</p>
                    <p> {weather.weather[0].description}</p>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;