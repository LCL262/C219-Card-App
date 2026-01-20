// SimpleCardForm.js
import { useState } from "react";

export default function CardForm({ onSubmit, onCancel, initialData = {} }) {
  const [cardname, setCardName] = useState("");
  const [cardpic, setCardPic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ card_name, card_pic });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={cardname}
          onChange={(e) => setCardName(e.target.value)}
          placeholder="cardname"
          required
        />
      </div>
      
      <div>
        <input
          value={cardpic}
          onChange={(e) => setCardPic(e.target.value)}
          placeholder="Picture URL"
          type="url"
        />
      </div>

      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}