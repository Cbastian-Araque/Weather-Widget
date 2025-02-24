export default function WeatherMainInfo({weather}){
  return(
    <div>
      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>

      <div>
        <div>
          <img src={`http://${weather?.current.condition.icon}`} alt="" width="128" />
        </div>
        <div>
            <div>{weather?.current.condition.text}</div>
            <div>{weather?.current.temp_c}°</div>
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