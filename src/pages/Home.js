import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Card Management App</h1>

      <p style={styles.text}>
        This application allows you to view, add, edit, and delete cards stored
        in the system.
      </p>

      <p style={styles.text}>
        Use the button below to view all cards.
      </p>

      <Link to="/cards">
        <button style={styles.button}>View Cards</button>
      </Link>
    </main>
  );
}

const styles = {
  container: {
    padding: "4rem",
    textAlign: "center",
  },
  title: {
    marginBottom: "1rem",
  },
  text: {
    marginBottom: "1rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
