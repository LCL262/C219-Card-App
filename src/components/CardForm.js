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
