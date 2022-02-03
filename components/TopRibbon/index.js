import ribbonItems from "../../libs/RibbonItems";
import RibbonItem from "../RibbonItem";
import styles from "./TopRibbon.module.css";
import Image from "next/image";
function TopRibbon() {
  return (
    <div>
      <div className={styles.ribbonbackground}>
        <div className="ralph"></div>
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
    </div>
  );
}

export default TopRibbon;
