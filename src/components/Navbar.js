import { Link } from "react-router-dom";

export default function Navbar() {
  return (
<<<<<<< HEAD
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="navbar-brand">
          <NavLink to="/" className="logo-link">
            <strong>Card App</strong>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <nav className="navbar-nav">
          <ul className="nav-links">
            <li className="nav-item">
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => 
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/allcards" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Cards
              </NavLink>
            </li>
            {/* ADD THIS LINK FOR ADD CARD */}
            <li className="nav-item">
              <NavLink 
                to="/addcard" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Add Card
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Optional: User profile or additional items */}
        <div className="navbar-extra">
          {/* You can add user profile, theme toggle, etc. here */}
        </div>
      </div>
    </header>
  );
}
=======
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
>>>>>>> 64f503c242e25f668b2ce912cc9a4f9cade165f5
