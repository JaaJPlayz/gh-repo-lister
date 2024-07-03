import { useState, useEffect } from "react";
import { Repo } from "./types/RepoType";
import styles from "./styles/app.module.css";
import { RepoCard } from "./components/RepoCard";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/JaaJPlayz/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div className={styles["app"]}>
      <Navbar />
      <ul className={styles["repo-list"]}>
        {repos.map((repo: Repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
