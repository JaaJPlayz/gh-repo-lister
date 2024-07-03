import styles from "./styles/navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["logo-container"]}>
        <img src="/computer-logo.svg" className={styles["logo"]} />
        <h1>GitHub Repos</h1>
      </div>
    </div>
  );
};
