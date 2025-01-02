import Image from "next/image";
import styles from "./page.module.css";
import { WeatherApp } from "./components/weatherApp/WeatherApp";

export default function Home() {
  return (
    <main className={styles.main}>
      <WeatherApp/>
    </main>
  );
}
