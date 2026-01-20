import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import CardForm from "../components/CardForm";
import { updateCard } from "../services/api";

export default function EditCard() {
<<<<<<< HEAD
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  
  // Fetch card data on component mount
  useEffect(() => {
    const fetchCard = async () => {
      try {
        setLoading(true);
        const cards = await getCards();
        const foundCard = cards.find(c => c.id === id);
        
        if (!foundCard) {
          setError("Card not found");
          return;
        }
        
        setCard(foundCard);
      } catch (err) {
        setError("Failed to load card. Please try again.");
        console.error("Error fetching card:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCard();
  }, [id]);
  
  // Handle form submission
  const handleSubmit = async (cardData) => {
    try {
      setBusy(true);
      setError("");
      
      await updateCard(id, cardData);
      
      // Navigate back to card list after successful update
      navigate("/cards");
    } catch (err) {
      setError("Failed to update card. Please try again.");
      console.error("Error updating card:", err);
=======
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
>>>>>>> 64f503c242e25f668b2ce912cc9a4f9cade165f5
    } finally {
      setBusy(false);
    }
  };
<<<<<<< HEAD
  
  // Handle cancel action
  const handleCancel = () => {
    navigate("/cards");
  };
  
  // Loading state
  if (loading) {
    return (
      <main className="edit-card-page">
        <div className="container">
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading card details...</p>
          </div>
        </div>
      </main>
    );
  }
  
  // Error state (card not found)
  if (error && !card) {
    return (
      <main className="edit-card-page">
        <div className="container">
          <div className="error-container">
            <h2>Error</h2>
            <p>{error}</p>
            <button 
              className="btn btn-primary"
              onClick={() => navigate("/cards")}
            >
              Back to Cards
            </button>
          </div>
        </div>
      </main>
    );
  }
  
  // Main form
  return (
    <main className="edit-card-page">
      <div className="container">
        <div className="page-header">
          <h1>Edit Card</h1>
          <p className="subtitle">Update the details of your card</p>
        </div>
        
        {error && (
          <div className="alert alert-error">
            <p>{error}</p>
          </div>
        )}
        
        <div className="card-form-container">
          <CardForm
            initialData={card}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            isSubmitting={busy}
            submitButtonText={busy ? "Updating..." : "Update Card"}
          />
        </div>
      </div>
    </main>
  );
}
=======

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
>>>>>>> 64f503c242e25f668b2ce912cc9a4f9cade165f5
