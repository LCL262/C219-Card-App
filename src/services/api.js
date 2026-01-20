const API_BASE_URL = process.env.REACT_APP_API_URL;
// The rest of your code stays the same

// Get all cards
export const getCards = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/allcards`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw error;
  }
};

// Add a new card
export const addCard = async (cardData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/addcard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cardData),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to add card: ${response.status} - ${errorText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error adding card:", error);
    throw error;
  }
};

// Update a card
// Update a card
export const updateCard = async (id, cardData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/editcard/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cardData),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to update card: ${response.status} - ${errorText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error updating card:", error);
    throw error;
  }
};

// Delete a card
export const deleteCard = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/deletecard/${id}`, {
      method: "DELETE",
    });
    
    if (!response.ok) {
      throw new Error(`Failed to delete card: ${response.status}`);
    }
    
    return true;
  } catch (error) {
    console.error("Error deleting card:", error);
    throw error;
  }
};