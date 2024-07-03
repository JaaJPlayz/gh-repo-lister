import styles from "./styles/footer.module.css";

export const Footer = (props: {}) => {
  return (
    <div className={styles["footer"]}>
      <p>
        Made by{" "}
        <a href="https://github.com/JaaJPlayz" target="_blank" rel="noreferrer">
          Hiago Augusto &copy;
        </a>
      </p>
    </div>
  );
};
