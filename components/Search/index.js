import styles from "./Search.module.css";
import { useState } from "react";

function Search() {
  const [state, setState] = useState("");

  function handleTyping(e) {
    setState(e.target.value);
    console.log(state);
  }

  return (
    <form>
      <input
        className={styles.searchbox}
        placeholder="Search for groceries"
        onChange={handleTyping}
      ></input>
    </form>
  );
}

export default Search;
