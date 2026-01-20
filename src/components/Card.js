// components/Card.js - Should work with cardname and cardpic
export default function Card({ card, onDelete, disabled }) {
  return (
    <div className="card">
      <h3>{card.cardname || "No Title"}</h3>
      
      {card.cardpic ? (
        <img 
          src={card.cardpic}
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
        {disabled ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};