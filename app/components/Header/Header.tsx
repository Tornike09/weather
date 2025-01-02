import Image from "next/image";
import icon from "../../images/YR_blaa_rgb.png";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
    const router = usePathname()
    console.log(router);
    
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainCont}>
        <div>
          <Image src={icon} alt="" />
          <div>
            <h3>Weather</h3>
            <p>Around The World</p>
          </div>
        </div>
        <div className={styles.navBar}>
           <Link className={router === '/' ? styles.active : styles.nonActive} href={''}>Forecast</Link>
           <Link className={router === '' ? styles.active : styles.nonActive} href={''}>Other Conditions</Link>
           <Link className={router === '' ? styles.active : styles.nonActive} href={''}>Map</Link>
           <Link className={router === '' ? styles.active : styles.nonActive} href={''}>Details</Link>
        </div>
      </div>
    </div>
  );
};
