import styles from "./RibbonItem.module.css";
import Link from "next/link";

function RibbonItem({ name, direct }) {
  function handleClick() {
    console.log("you clicked me");
  }
  return (
    <h1 className={styles.item}>
      <Link href={direct} passHref>
        <li onClick={handleClick}>{name}</li>
      </Link>
    </h1>
  );
}

export default RibbonItem;
