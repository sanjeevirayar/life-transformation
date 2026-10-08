import { Link } from "react-router-dom";

function FounderSection() {
  return (
    <section
      className="founder-section"
      aria-labelledby="founder-heading"
    >
      <div className="container founder-layout">
        <div className="founder-photo-placeholder">
          <span className="founder-photo-symbol" aria-hidden="true">
            ✳
          </span>

          <p>A glimpse into her world</p>
          <span>Founder photograph will go here.</span>
        </div>

        <div className="founder-copy">
          <p className="founder-eyebrow">Meet the Founder</p>

          <h2 id="founder-heading">
            Every journey has
            <br />
            <em>a story.</em>
          </h2>

          <div className="founder-story">
            <p>
              [Add her introduction here: who she is, what she does,
              and whom she supports.]
            </p>

            <p>
              [Share the experience that led her to this work and
              what makes her approach personal.]
            </p>
          </div>

          <Link to="/about" className="button button-secondary">
            Get to Know Me
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;