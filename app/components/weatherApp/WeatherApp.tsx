"use client";
import styles from "./WeatherApp.module.css";
import { useState } from "react";
import Image from "next/image";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import XIcon from '../../images/x_circle_icon_172785.webp'
import { Hourly } from "../Hourly/Hourly";

export const WeatherApp = () => {
  const [city, setCity] = useState("gori");

  const getCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const clearInput = () => {
    setCity('')
  }

  {
    /*const [city, setCity] = useState("");
  const [weather, setWeather] = useState<IWeather | null>(null);
  const apiKey = "8ac28d34f59557839d1ffab34fb9df33";

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const getWeather = async () => {
    try {
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
      );
      if (result.data) {
        setWeather(result.data);
      }
    } catch (err) {
      alert('oops, Check network connection')
    }
  };

  console.log(weather); */
  }
  

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.cityCont}>
          <div className={styles.inputCont}>
          <input type="text" value={city} onChange={getCity} /> 
          <Image width={20} onClick={clearInput} src={XIcon} alt="" />
          </div>
          <div>
            <Main city={city}/>
            <Hourly city={city}/>
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /*<div className={styles.blur}>
      <div className={styles.mainCont}>
        <div className={styles.margin}>
          <div className={styles.cont}>
            <div className={styles.inputCont}>
              <input
                type="text"
                onChange={onChange}
                value={city}
                placeholder="City"
              />
              <FontAwesomeIcon
                onClick={getWeather}
                className={styles.icon}
                icon={faMagnifyingGlass}
              />
            </div>
          </div>
        </div>
        <div>
          <p className={styles.aCont}>
            <Link href={"/FiveDay"}>5 Day Forecast</Link>
          </p>
        </div>
        {weather && weather.weather && (
          <>
            <div>
              <div>
                <div className={styles.infoCont}>
                  <div className={styles.iconCont}>
                    <Image
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt={weather.weather[0].description}
                      width="150"
                      height="150"
                    />
                    <p>{weather.weather[0].main}</p>
                  </div>
                  <div className={styles.tempCont}>
                    <p>{(((weather.main.temp.toFixed(0)) - 32) / 1.8).toFixed(0)}°</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.container}>
                <div>
                  <p className={styles.inCity}>Weather In {weather.name}</p>
                </div>
                <div className={styles.infoContainer}>
                  <div>
                    <p>Feels Like</p>
                    <p>{(((weather.main.feels_like.toFixed(0)) - 32) / 1.8).toFixed(0)}°</p>
                  </div>
                  <div>
                    <p>Humidity</p>
                    <p>{weather.main.humidity.toFixed(0)}%</p>
                  </div>
                  <div>
                    <p>Winds</p>
                    <p>{((weather.wind.speed) / 1.6).toFixed(0)}Kph</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div> */
}
