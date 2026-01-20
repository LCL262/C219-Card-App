import { Link } from "react-router-dom";

export default function Card({ card, onDelete, disabled }) {
  return (
    <div style={styles.card}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>

      <div style={styles.actions}>
        <Link to={`/editCards/${card.id}/edit`}>
          <button>Edit</button>
        </Link>

        <button onClick={onDelete} disabled={disabled}>
          Delete
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "1rem",
  },
  actions: {
    display: "flex",
    gap: "0.5rem",
    marginTop: "1rem",
  },
};
