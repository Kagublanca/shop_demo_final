import ribbonItems from "../../libs/RibbonItems";
import RibbonItem from "../RibbonItem";
import styles from "./TopRibbon.module.css";

function TopRibbon() {
  return (
    <div className={styles.ribbonbackground}>
      <ul className={styles.item}>
        {ribbonItems.map((item) => {
          return (
            <RibbonItem
              name={item.itemName}
              direct={item.direct}
              key={item.itemName}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TopRibbon;
