import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import desing from "./weatherApp.module.css";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [time, setTime] = useState(null);
  const [readableTime, setReadableTime] = useState(''); // Nuevo estado para la hora legible

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  const unixTimeToReadable = (unixTime) => {
    const date = new Date(unixTime * 1000);
    return date.toLocaleTimeString();
  };

  async function loadInfo(city = "Bogota") {
    try {
      const request = await fetch(
        `${import.meta.env.VITE_REACT_APP_URL}&key=${import.meta.env.VITE_REACT_APP_KEY}&q=${city}`
      );

      const json = await request.json();
      setWeather(json);
      setTime(json.location.localtime_epoch);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  useEffect(() => {
    if (time) {
      const intervalId = setInterval(() => {
        setReadableTime(unixTimeToReadable(time));
        setTime((prevTime)=> prevTime + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [time]);

  return (
    <div className={desing.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather} time={readableTime} />
    </div>
  );
}