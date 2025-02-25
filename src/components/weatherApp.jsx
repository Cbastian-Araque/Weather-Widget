import { useEffect, useState } from "react"
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import desing from './weatherApp.module.css';

export default function WeatherApp(){
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo()
  
    // return () => {
    //   console.log("LKAJSDLKSAD");
    // }
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`
  }, [weather])
  
  

  async function loadInfo(city = 'Bogota'){
    try {
      const request = await fetch(
        `${import.meta.env.VITE_REACT_APP_URL}&key=${import.meta.env.VITE_REACT_APP_KEY}&q=${city}`
      );
      
      const json = await request.json();

      setWeather(json);

      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeCity(city){
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={desing.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />

      <WeatherMainInfo weather={weather} />
    </div>
  )
}