import styles from "./Greeting.module.css";

function Greeting() {
  return (
    <div className={styles.greeting}>
      <h1 className={styles.welcome}>Welcome to Ralphs!</h1>
      <h2>
        For the best experience please <a href="google.com">Log-in</a>. Not yet
        with us? <a href="google.com">Sign-up</a> here!
      </h2>
    </div>
  );
}

export default Greeting;
