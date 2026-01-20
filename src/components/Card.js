<<<<<<< HEAD
// components/Card.js
export default function Card({ card, onDelete, disabled }) {
  return (
    <div className="card">
      <h3>{card.cardname || "No Title"}</h3> {/* Changed to cardname */}
      
      {card.cardpic ? ( // Changed to cardpic
        <img 
          src={card.cardpic} // Changed to cardpic
          alt={card.cardname || "Card image"}
          style={{ 
            width: "100%", 
            height: "auto", 
            objectFit: "contain",
            borderRadius: "4px"
          }}
        />
      ) : (
        <div>No Image</div>
      )}
      
      <button onClick={onDelete} disabled={disabled}>
        Delete
      </button>
    </div>
  );
}
=======
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
>>>>>>> 64f503c242e25f668b2ce912cc9a4f9cade165f5
