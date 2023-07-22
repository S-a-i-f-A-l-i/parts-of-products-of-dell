import styles from "./../assets/styles/PageNotFound.module.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>The page you are looking for could not be found 😢</h1>
        <button onClick={() => navigate("/")}>Go back</button>
      </div>
    </main>
  );
}

export default PageNotFound;
