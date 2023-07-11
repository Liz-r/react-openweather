import React from "react";
import sunny from "../assets/img/sunny.jpg"

const Info = ({ showData, weather, forecast }) => {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    var dateForecast1 = "";
    var dateForecast2 = "";
    var dateForecast3 = "";

    var url = "";
    var imgUrl = "";

    if (showData) {
        url = "http://openweathermap.org/img/w/";
        imgUrl = url + weather.weather[0].icon + ".png"

        dateForecast1 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
        dateForecast2 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);
        dateForecast3 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' + forecast.list[3].dt_txt.substring(11, 13);
    }

    return (
        <div className="mt-5">
            {
                showData === true ? (
                    <div className="container">

                        <div className="row g-0 top">
                            <div className="col-md-6">
                                <h1>{weather.name}</h1>

                            </div>
                            <div className="col-md-6">
                                <h1 > {weather.main.temp}°c</h1>

                            </div>
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <p>{date}</p>

                                </div>

                                <div className="col-md-6">
                                    <p><img src={imgUrl} />{weather.weather[0].description}</p>

                                </div>
                            </div>

                        </div>
                        <div className="row g-0">
                            <div className="col-md-8 title">
                                <h2>Predicción meteorológica para: {weather.name}</h2>
                            </div>
                        </div>


                        <div className="row prediccion" >
                            <div className="col-md-4">
                                {dateForecast1}:00 hr
                                <p >{forecast.list[1].main.temp}°c</p>

                            </div>
                            <div className="col-md-4">
                                {dateForecast2}:00 hr
                                <p >{forecast.list[2].main.temp}°c</p>
                            </div>
                            <div className="col-md-4">
                                {dateForecast3}:00 hr
                                <p >{forecast.list[3].main.temp}°c</p>
                            </div>

                        </div>
                    </div>
                ) : (
                    <>
                        <div className="container">
                            <div className="row g-0">
                            </div>
                            <h3 className="text-light">Favor de introducir una ciudad</h3>
                        </div>
                    </>
                )
            }
        </div>
    )

}
export default Info;