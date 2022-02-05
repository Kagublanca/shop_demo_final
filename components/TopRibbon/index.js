import ribbonItems from "../../libs/RibbonItems";
import RibbonItem from "../RibbonItem";
import styles from "./TopRibbon.module.css";
import Search from "../Search";
function TopRibbon() {
  return (
    <div>
      <div className={styles.ribbonbackground}>
        <Search className={styles.search} />
        <ul className={styles.item}>
          {ribbonItems.map((item) => {
            return (
              <RibbonItem
                name={item.itemName}
                direct={item.direct}
                picture={item.pictire}
                key={item.itemName}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TopRibbon;
