import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <>
      <Header />

      <main>

        <section className="not-found">

          <div className="not-found-inner">

            <span className="not-found-code">
              404
            </span>

            <div className="not-found-symbol">
              ॐ
            </div>

            <span className="not-found-label">
              This Path Doesn't Lead Anywhere
            </span>

            <h1>
              Perhaps it is time
              <br />
              <em>to find another way.</em>
            </h1>

            <p>
              The page you were looking for may have moved,
              changed or no longer exists. You can return home
              or continue exploring the journey.
            </p>

            <div className="not-found-actions">

              <Link
                to="/"
                className="final-primary-button"
              >
                Return Home
              </Link>

              <Link
                to="/contact"
                className="final-secondary-link"
              >
                Begin Your Journey
                <span>→</span>
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default NotFound;