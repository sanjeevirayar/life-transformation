import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-inner">

        {/* BRAND */}

        <div className="footer-brand">

          <Link to="/" className="footer-logo-wrap">
            <img
              src="/images/jigna-logo.png"
              alt="Jigna Thakkar"
              className="footer-logo"
            />
          </Link>

          <h3>Jigna Thakkar</h3>

          <p className="footer-brand-subtitle">
            Conscious Living & Inner Transformation
          </p>

          <p className="footer-brand-copy">
            A space for awareness, self-understanding,
            conscious living and the journey within.
          </p>

        </div>


        {/* EXPLORE */}

        <div className="footer-column">

          <span className="footer-heading">
            Explore
          </span>

          <Link to="/approach">
            Our Approach
          </Link>

          <Link to="/programs">
            Programs
          </Link>

          <Link to="/women">
            For Women
          </Link>

          <Link to="/young-minds">
            Young Minds
          </Link>

        </div>


        {/* ABOUT */}

        <div className="footer-column">

          <span className="footer-heading">
            Discover
          </span>

          <Link to="/her-story">
            Her Story
          </Link>

          <Link to="/giving-back">
            Giving Back
          </Link>

          <Link to="/contact">
            Contact
          </Link>

          <a
            href="tel:+919137675190"
            className="footer-phone"
          >
            +91 91376 75190
          </a>

        </div>


        {/* MESSAGE */}

        <div className="footer-message">

          <span className="footer-heading">
            A Gentle Reminder
          </span>

          <blockquote>
            “The journey inward begins
            with the willingness to look.”
          </blockquote>

          <span className="footer-greeting">
            Hare Krishna
          </span>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} Jigna Thakkar
        </span>

        <div className="footer-bottom-center">
          <span></span>

          <p>
            Transformation begins within.
          </p>

          <span></span>
        </div>

        <span>
          All Rights Reserved
        </span>

      </div>

    </footer>
  );
}

export default Footer;