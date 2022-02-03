import styles from "./RibbonItem.module.css";

function RibbonItem({ name, direct }) {
  function handleClick() {
    console.log("you clicked me");
  }
  return (
    <h1 className={styles.item}>
      <li onClick={handleClick}>{name}</li>
    </h1>
  );
}

export default RibbonItem;
