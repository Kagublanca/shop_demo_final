import styles from "./DealBanner.module.css";
import items from "../../libs/DealBannerItem";
import DealBannerItem from "../DealBannerItem";
function DealBanner() {
  return (
    <div className={styles.banner}>
      <ul>
        {items.map((item) => {
          return (
            <DealBannerItem
              name={item.itemName}
              isdropdown={item.isDropDown}
              key={item.itemId}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default DealBanner;
