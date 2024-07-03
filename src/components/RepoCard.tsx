import styles from "./styles/repo-card.module.css";

export const RepoCard = (props: { repo: any }) => {
  const { repo } = props;
  return (
    <div className={styles["repo-card"]}>
      <img
        src={repo.owner.avatar_url}
        alt={repo.owner.login}
        className={styles["avatar"]}
      />
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        {repo.name} by {repo.owner.login}{" "}
        <img src="/goto-link.svg" className={styles["goto-link"]} />
      </a>
      {repo.description ? <p>{repo.description}</p> : <p>No description</p>}
    </div>
  );
};
