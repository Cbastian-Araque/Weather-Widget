import desing from './weatherApp.module.css';

export default function WeatherMainInfo({weather, time}){
  return(
    <div className={desing.containerInfo}>
      <div className={desing.location}>{weather?.location.name}</div>
      <div className={desing.location}>{`, ${weather?.location.country}`}</div>

      <div className={desing.contentConditionInfo}>
        <div className={desing.cntIcon}>
          <img className={desing.iconCondition} src={`http://${weather?.current.condition.icon}`} alt="" width="80" />
        </div>
        <div className={desing.conditionVal}>
          <div>{weather?.current.condition.text}</div>
          <div>{weather?.current.temp_c}°</div>
          <div className={desing.time}>{time}</div>
        </div>
      </div>
      <iframe 
      title="Mapa"
        src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d312970.10581311025!2d${weather?.location.lon}9!3d${weather?.location.lat}6!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1740363720220!5m2!1ses!2sco`}
        width="600"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}