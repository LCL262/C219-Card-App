import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { updateCard } from "../services/api";

export default function EditCard() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [cardData, setCardData] = useState({
    cardname: "", // CHANGED: card_name → cardname
    cardpic: ""   // CHANGED: card_pic → cardpic
  });

  useEffect(() => {
    loadCard();
  }, [id]);

  async function loadCard() {
    try {
      // You'll need to add getCardById to api.js
      const card = await getCardById(id);
      setCardData({
        cardname: card.cardname,
        cardpic: card.cardpic
      });
    } catch (err) {
      console.error("Error loading card:", err);
      setError("Failed to load card");
    }
  }

  const handleSubmit = async (data) => {
    try {
      setBusy(true);
      setError("");
      await updateCard(id, data);
      navigate("/cards");
    } catch (err) {
      console.error("Error updating card:", err);
      setError("Failed to update card");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main>
      <h1>Edit Card</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <CardForm
        values={cardData}
        onChange={setCardData}
        onSubmit={() => handleSubmit(cardData)}
        busy={busy}
        submitText="Update Card"
      />
    </main>
  );
};