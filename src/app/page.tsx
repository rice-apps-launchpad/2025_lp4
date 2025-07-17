import styles from "./page.module.css";
import {LoginButton} from "./client";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Log in</h1>
        <p>Enter your password and log in</p>
        <input name="password" type="password"/>
        <LoginButton/>
      </main>
    </div>
  );
}
