import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { getCards, updateCard } from "../services/api";

export default function EditCard() {
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
    } finally {
      setBusy(false);
    }
  };
  
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