<<<<<<< HEAD
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
=======
import { useState } from "react";

export default function CardForm({ initialData = {}, onSubmit, busy }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(
    initialData.description || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label>
        Title
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label>
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>

      <button disabled={busy}>
        {busy ? "Saving..." : "Submit"}
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "400px",
  },
};
>>>>>>> 64f503c242e25f668b2ce912cc9a4f9cade165f5
