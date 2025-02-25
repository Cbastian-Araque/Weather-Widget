import { useState } from "react";
import desing from './weatherApp.module.css';

export default function WeatherForm({onChangeCity}){
  const [city, setCity] = useState('');

  function onChange(e){
    const value = e.target.value;

    if(value !== ''){
      setCity(value);
    }
  }

  function handleSubmit(e){
    e.preventDefault();

    onChangeCity(city);
  }

  return(
    <form onSubmit={handleSubmit} className={desing.formSearch}>
      <h1>Search City</h1>
      <input type="text" placeholder="London" onChange={onChange} />
    </form>
  )
}