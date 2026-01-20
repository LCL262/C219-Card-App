import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import CardForm from "../components/CardForm";
import { updateCard } from "../services/api";

export default function EditCard() {
  const { state: card } = useLocation();
  const navigate = useNavigate();

  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  if (!card) {
    return <main>No card selected</main>;
  }

  const handleSubmit = async (data) => {
    setBusy(true);
    try {
      await updateCard(card.id, data);
      navigate("/cards");
    } catch {
      setError("Failed to update card");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Edit Card</h2>
      {error && <p>{error}</p>}

      <CardForm
        initialData={card}
        onSubmit={handleSubmit}
        busy={busy}
      />
    </main>
  );
}
