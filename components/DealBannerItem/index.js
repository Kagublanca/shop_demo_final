import styles from "./DealBannerItem.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

function DealBannerItem({ name, isdropdown }) {
  const [dropDown, setDropdown] = useState("");

  useEffect(() => {
    if (isdropdown == true) {
      setDropdown(
        <Image
          src="/BurgerMenu.png"
          alt="A buger menu"
          width="20px"
          height="19px"
          className={styles.picture}
        />
      );
    }
  }, []);

  return (
    <li className={styles.item}>
      <strong>{name}</strong>
      {dropDown}
    </li>
  );
}

export default DealBannerItem;
