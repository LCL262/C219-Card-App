import { Link } from "react-router-dom";

export default function Home() {
  return (
<<<<<<< HEAD
    <main className="home-page">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Card App</h1>
          <p className="home-description">
            A simple app to create, view, and manage your cards.
          </p>
          
          <div className="home-instructions">
            <h2>How to use:</h2>
            <ol className="instructions-list">
              <li>Click "Cards" in the navigation to view all cards</li>
              <li>Click "Add Card" to create a new card</li>
              <li>Click on any card to edit it</li>
              <li>Use the form to add or update card details</li>
            </ol>
          </div>
          
          <div className="home-actions">
            <Link to="/cards" className="home-button primary">
              View Cards
            </Link>
            {/* CHANGE THIS LINE FROM /addCard to /add */}
            <Link to="/add" className="home-button secondary">
              Add New Card
            </Link>
          </div>
          
          <div className="home-features">
            <h3>Features:</h3>
            <ul className="features-list">
              <li>Create unlimited cards</li>
              <li>Edit existing cards</li>
              <li>Simple and clean interface</li>
              <li>Easy to use</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
=======
    <main style={styles.container}>
      <h1 style={styles.title}>Card Management App</h1>

      <p style={styles.text}>
        This application allows you to view, add, edit, and delete cards stored
        in the system.
      </p>

      <p style={styles.text}>
        Use the button below to view all cards.
      </p>

      <Link to="/cards">
        <button style={styles.button}>View Cards</button>
      </Link>
    </main>
  );
}

const styles = {
  container: {
    padding: "4rem",
    textAlign: "center",
  },
  title: {
    marginBottom: "1rem",
  },
  text: {
    marginBottom: "1rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
>>>>>>> 64f503c242e25f668b2ce912cc9a4f9cade165f5
