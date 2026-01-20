import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/allCards">Cards</Link>
      <Link to="/addCards">Add Card</Link>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "1.5rem",
    padding: "1rem",
    borderBottom: "1px solid #ccc",
  },
};
