import styles from "./Main.module.css";
import icon from "../../images/109613.png";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import measureIcon from "../../images/4158502.png";
import humidityIcon from "../../images/1582886.png";
import windIcon from "../../images/2011448.png";
import { IWeather } from "@/app/types";

interface ICityProps {
  city: string;
}

export const Main: React.FC<ICityProps> = ({ city }) => {
  const [weather, setWeather] = useState<IWeather>();
  const apiKey = "ae02d4775b3017654d6972c13a1ce89b";

  const getWeather = useCallback(async () => {
    try {
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      if (result.data) {
        setWeather(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  }, [city]);

  useEffect(() => {
    getWeather();
  }, []);

  const detectKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        console.log("clicked on enter");
        getWeather();
      } else {
        console.log("not clicked");
      }
    },
    [getWeather]
  );

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown);

    return () => {
      document.removeEventListener("keydown", detectKeyDown);
    };
  }, [detectKeyDown]);

  return (
    <div>
      <div className={styles.mainCont}>
        <p className={styles.textCont}>
          <Image className={styles.clockIcon} src={icon} alt="" />
          <span>Current Conditions in {weather && weather.name}</span>
        </p>
        <div>
          {weather && (
            <div className={styles.weatherCont}>
              <Image
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                width={100}
                height={100}
                alt=""
              />
              <div className={styles.mainInfo}>
                <Image src={measureIcon} width={20} height={20} alt="" />
                <h1 className={styles.temp}>{weather.main.temp.toFixed(0)}°</h1>
                <p>Feels Like {weather.main.feels_like.toFixed(0)}°</p>
              </div>
              <div className={styles.mainInfo}>
                <Image src={humidityIcon} width={20} height={20} alt="" />
                <h1 className={styles.humidity}>{weather.main.humidity}%</h1>
                <p>Humidity</p>
              </div>
              <div className={styles.mainInfo}>
                <Image src={windIcon} width={20} height={20} alt="" />
                <h1 className={styles.wind}>{weather.wind.speed.toFixed(1)}</h1>
                <p>m/s</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
