import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";

export default function AddCard() {
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [cardData, setCardData] = useState({
    card_name: "",
    card_pic: ""
  });



  const handleSubmit = async (data) => {
    try {
      setBusy(true);
      setError("");
      await addCard(data);
      navigate("/cards"); 
    } catch (err) {
      setError("Failed to add card"); 
    } finally {
      setBusy(false);
    }
  };

  return (
    <main>
      <h1>Add New Card</h1>
      <CardForm
        values={cardData}
        onChange={setCardData}
        onSubmit={() => handleSubmit(cardData)}
        busy={busy}
        error={error}
        submitText="Add Card"
      />
    </main>
  );
}