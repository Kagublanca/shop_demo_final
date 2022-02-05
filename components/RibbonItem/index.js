import styles from "./RibbonItem.module.css";
import Link from "next/link";
import Image from "next/image";
function RibbonItem({ name, direct, picture }) {
  return (
    <h1 className={styles.item}>
      <Link href={direct} passHref>
        <li>
          {/* <Image
            src={picture}
            alt=""
            height="30px"
            width="30px"
            className={styles.image}
          /> */}
          {name}
        </li>
      </Link>
    </h1>
  );
}

export default RibbonItem;
