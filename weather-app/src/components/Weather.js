import React, { useState } from "react";
import Form from './Form';
import Info from "./Info";

const Weather = () => {
    let currentUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=e9935268e967aefadf899cd56a2db9d6&lang=es";
    let cityUrl = "&q=";
    let forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?&units=metric&appid=e9935268e967aefadf899cd56a2db9d6&lang=es";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        //current
        currentUrl = currentUrl + cityUrl + loc;

        await fetch(currentUrl).then((response) => {
            if (!response.ok) throw { response }
            return response.json();
        }).then((weatherData) => {
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        //forecast
        forecastUrl = forecastUrl + cityUrl + loc;

        await fetch(forecastUrl).then((response) => {
            if (!response.ok) throw { response }
            return response.json();
        }).then((forecastData) => {
            console.log(forecastData);
            setForecast(forecastData);
            setLoading(false);
            setShow(true);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        setLocation('')
    }

    return (
        <>
            <Form
                newLocation={getLocation}
            />
            <Info
                showData={show}
                loadingData={loading}
                weather={weather}
                forecast={forecast}
            />
        </>
    )

}
export default Weather