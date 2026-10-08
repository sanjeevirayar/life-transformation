import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="spiritual-greeting">
        Sadhguruvey Namaha | Hare Krishna 
      </div>

      <header className="site-header">
        <div className="header-inner">

          <Link to="/" className="brand">
            <img
              src="/images/jigna-logo.png"
              alt="Jigna Thakkar"
              className="brand-logo"
            />

            <div className="brand-copy">
              <span className="brand-name">Jigna Thakkar</span>
              <span className="brand-subtitle">
                Conscious Living & Inner Transformation
              </span>
            </div>
          </Link>

          <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
            <Link to="/approach" onClick={() => setMenuOpen(false)}>
              Our Approach
            </Link>

            <Link to="/programs" onClick={() => setMenuOpen(false)}>
              Programs
            </Link>

            <Link to="/women" onClick={() => setMenuOpen(false)}>
              Women
            </Link>

            <Link to="/young-minds" onClick={() => setMenuOpen(false)}>
              Young Minds
            </Link>

            <Link to="/her-story" onClick={() => setMenuOpen(false)}>
              Her Story
            </Link>

            <Link to="/giving-back" onClick={() => setMenuOpen(false)}>
              Giving Back
            </Link>
          </nav>

          <div className="header-actions">
            <Link to="/contact" className="header-cta">
              Begin Your Journey
            </Link>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>

        </div>
      </header>
    </>
  );
}

export default Header;