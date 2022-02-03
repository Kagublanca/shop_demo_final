import ribbonItems from "../../libs/RibbonItems";
import RibbonItem from "../RibbonItem";

function TopRibbon() {
  return (
    <div className="ribbonbackground">
      <ul>
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
