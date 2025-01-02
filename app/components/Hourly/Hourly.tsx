"use client";

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./Hourly.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { IWeatherProps } from "@/app/types";

interface ICityProps {
  city: string;
}

export const Hourly: React.FC<ICityProps> = ({ city }) => {
  const [weather, setWeather] = useState<{ list: IWeatherProps[] }>({
    list: [],
  });
  const apiKey = "ae02d4775b3017654d6972c13a1ce89b";

  
  const getWeather = useCallback(async () => {
    try {
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${apiKey}`
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
    // eslint-disable-next-line
  }, [])

  const detectKeyDown = useCallback((e: KeyboardEvent) => {
    if(e.key === 'Enter') {
      console.log('clicked on enter');
      getWeather()
    } else {
      console.log('not clicked');
    }
  }, [getWeather])

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown)

    return () => {
      document.removeEventListener('keydown', detectKeyDown)
    }
  }, [detectKeyDown])

  console.log(weather);
  return (
    <div className={styles.mainCont}>
      <div className={styles.cont}>
        <li className={styles.titles}>
          <p>Night</p>
          <p>Morning</p>
          <p>Afternoon</p>
          <p>Evening</p>
          <p>Temperature hogh/low</p>
          <p>Precip.</p>
          <p>Wind</p>
        </li>
      </div>
      <ul>
        {weather &&
          weather.list.map((hourlyWeather, index) => (
            <li key={index}>
              <div className={styles.listItem}>
              <Image
                    src={`https://openweathermap.org/img/wn/${hourlyWeather.weather[0].icon}@2x.png`}
                    width={40}
                    height={40}
                    alt=""
                  />
                <div>
                  
                  
                  <p className={styles.temp}>
                    {hourlyWeather.main.temp_max.toFixed(0)}/
                    {hourlyWeather.main.temp_min.toFixed(0)}
                  </p>
                  <p className={styles.humidity}>{hourlyWeather.main.humidity}%</p>
                  <p>{hourlyWeather.wind.speed.toFixed(1)}ms</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
