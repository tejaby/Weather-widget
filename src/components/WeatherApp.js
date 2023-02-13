import { useState, useEffect } from "react";
import WeatherForm from "./WeatherForm";
import WeatherCard from "./WeatherCard";

function WeatherApp() {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [city, setCity] = useState("");

  useEffect(() => {
    getCity("guatemala");
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.name ?? ""}`;
  }, [weather]);

  let urlWeather =
    "https://api.openweathermap.org/data/2.5/weather?appid=41fc4089cd465c42cc8c8b728cb8df8a&lang=es";
  let urlCity = "&q=";

  const getCity = async (city) => {
    setCity(city);
    setLoading(true);

    // weather

    urlWeather = urlWeather + urlCity + city;

    try {
      const request = await fetch(urlWeather);
      if (!request.ok) {
        throw request;
      }
      const response = await request.json();
      // console.log(response);
      setWeather(response);
      setLoading(false);
      setShow(true);
    } catch (error) {
      setLoading(false);
      setShow(false);
      console.log(error);
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-md-5">
      <WeatherForm getCity={getCity} />
      <WeatherCard weather={weather} loading={loading} show={show} />
    </div>
  );
}

export default WeatherApp;
