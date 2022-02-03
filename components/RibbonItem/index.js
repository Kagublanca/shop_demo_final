function RibbonItem({ name, direct }) {
  function handleClick() {
    console.log("you clicked me");
  }
  return (
    <h1 className="item">
      <li onClick={handleClick}>{name}</li>
    </h1>
  );
}

export default RibbonItem;
