import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
<<<<<<< HEAD
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCards();
  }, []);

  async function loadCards() {
    try {
      setLoading(true);
      const data = await getCards();
      console.log("Cards loaded:", data); // Debug log
      setCards(data);
    } catch (err) {
      console.error("Error loading cards:", err); // Debug log
      setError("Failed to load cards");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(card) {
    // Changed from card.gamename to card.card_name
    if (!window.confirm(`Delete "${card.cardname}"?`)) return;

    try {
      setBusy(true);
      console.log("Deleting card with ID:", card.id); // Debug log
      await deleteCard(card.id);
      setCards(cards.filter(c => c.id !== card.id));
      console.log("Card deleted successfully"); // Debug log
    } catch (err) {
      console.error("Error deleting card:", err); // Debug log
      alert("Failed to delete card");
    } finally {
      setBusy(false);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="card-grid">
      {cards.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <h3>No cards yet</h3>
          <p>Click "Add Card" to create your first card!</p>
        </div>
      ) : (
        cards.map(card => (
=======
  const [error, setError] = useState("");

  useEffect(() => {
    getCards()
      .then(setCards)
      .catch(() => setError("Failed to load cards"))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (card) => {
    setBusy(true);
    try {
      await deleteCard(card.id);
      setCards(cards.filter(c => c.id !== card.id));
    } catch {
      setError("Failed to delete card");
    } finally {
      setBusy(false);
    }
  };

  if (loading) return <main>Loading...</main>;
  if (error) return <main>{error}</main>;

  return (
    <main style={styles.container}>
      <h2>All Cards</h2>

      <div style={styles.grid}>
        {cards.map(card => (
>>>>>>> 64f503c242e25f668b2ce912cc9a4f9cade165f5
          <Card
            key={card.id}
            card={card}
            onDelete={() => handleDelete(card)}
            disabled={busy}
          />
<<<<<<< HEAD
        ))
      )}
    </main>
  );
}
=======
        ))}
      </div>
    </main>
  );
}

const styles = {
  container: {
    padding: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1rem",
  },
};
>>>>>>> 64f503c242e25f668b2ce912cc9a4f9cade165f5
