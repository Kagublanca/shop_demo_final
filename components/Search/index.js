import styles from "./Search.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

function Search() {
  const [state, setState] = useState("");
  const [isCancel, setIsCancel] = useState(false);

  function handleTyping(e) {
    setState(e.target.value);
    console.log(state);
  }

  useEffect(() => {
    if (state.length > 0) {
      console.log(state.length);
      return setIsCancel(
        <div
          onClick={() => {
            setState("");
          }}
        >
          <Image
            className={styles.cancel}
            src="/Cancel.png"
            alt="cancelButton"
            width="30px"
            height="30px"
          />
        </div>
      );
    }
    return setIsCancel(false);
  }, [state]);

  return (
    <form>
      <input
        className={styles.searchbox}
        placeholder="Search for groceries"
        onChange={handleTyping}
      ></input>
      {isCancel}
    </form>
  );
}

export default Search;
