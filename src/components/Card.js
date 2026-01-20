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