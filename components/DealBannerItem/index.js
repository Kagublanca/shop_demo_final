import styles from "./DealBannerItem.module.css";

function DealBannerItem({ name }) {
  return <li className={styles.item}>{name}</li>;
}

export default DealBannerItem;
