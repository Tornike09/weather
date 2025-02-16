"use client";
import styles from "./WeatherApp.module.css";
import { useState } from "react";
import Image from "next/image";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import XIcon from "../../images/x_circle_icon_172785.webp";

export const WeatherApp = () => {
  const [city, setCity] = useState("Tbilisi");

  const getCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const clearInput = () => {
    setCity("");
  };

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
            <Main city={city} />
          </div>
        </div>
      </div>
    </div>
  );
};
