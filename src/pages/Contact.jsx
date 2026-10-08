import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

function Contact() {
  const [inquiryType, setInquiryType] = useState("myself");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /* =====================================================
     SUBMIT FORM
  ===================================================== */

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      inquiryType,

      name: formData.get("name")?.trim(),
      email: formData.get("email")?.trim(),
      phone: formData.get("phone")?.trim() || "",
      location: formData.get("location")?.trim() || "",

      childAge:
        inquiryType === "child"
          ? formData.get("childAge")
          : "",

      message: formData.get("message")?.trim(),

      contactMethod:
        formData.get("contactMethod"),

      consent:
        formData.get("consent") === "on",
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/enquiries`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to send your enquiry."
        );
      }

      form.reset();

      setInquiryType("myself");
      setSubmitted(true);
    } catch (err) {
      console.error(
        "Contact form error:",
        err
      );

      setError(
        err.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <PageHero
          eyebrow="Begin Your Journey"
          title="Every journey begins"
          italic="with a first step."
          description="You do not need to know exactly which journey is right for you. Begin by sharing a little about where you are and what you are looking for."
        />


        {/* =====================================================
            CONTACT SECTION
        ===================================================== */}

        <section className="journey-contact">

          <div className="journey-contact-shell">


            {/* =========================
                LEFT COLUMN
            ========================== */}

            <aside className="journey-contact-copy">

              <div className="journey-contact-kicker">
                <span></span>
                Begin Where You Are
              </div>

              <h2>
                You don't need
                <br />
                <em>all the answers yet.</em>
              </h2>

              <p className="journey-contact-lead">
                Sometimes the first step is simply having a conversation
                about what you are experiencing and what kind of support
                you are looking for.
              </p>

              <p className="journey-contact-text">
                Share only what you feel comfortable sharing. This
                enquiry gives Jigna a little context before your first
                conversation.
              </p>


              {/* POINTS */}

              <div className="journey-contact-points">

                <div>
                  <span>01</span>

                  <p>
                    You don't need to choose a program before reaching out.
                  </p>
                </div>


                <div>
                  <span>02</span>

                  <p>
                    Enquiries for children should come from a parent
                    or guardian.
                  </p>
                </div>


                <div>
                  <span>03</span>

                  <p>
                    The first conversation can simply help you understand
                    whether this approach feels right.
                  </p>
                </div>

              </div>


              {/* DIRECT CONTACT */}

              <div className="journey-direct-contact">

                <span className="journey-direct-label">
                  Prefer To Connect Directly?
                </span>

                <a
                  href="tel:+919137675190"
                  className="journey-phone"
                >

                  <div className="journey-phone-icon">
                    ☎
                  </div>

                  <div>
                    <small>Call Jigna</small>
                    <strong>
                      +91 91376 75190
                    </strong>
                  </div>

                </a>

              </div>

            </aside>


            {/* =========================
                RIGHT COLUMN
            ========================== */}

            <div className="journey-contact-card">

              {!submitted ? (

                <form
                  className="journey-contact-form"
                  onSubmit={handleSubmit}
                >


                  {/* =====================================================
                      01 — YOUR JOURNEY
                  ===================================================== */}

                  <div className="journey-form-block">

                    <span className="journey-form-label">
                      01 • Your Journey
                    </span>

                    <h3>
                      Who are you reaching out for?
                    </h3>


                    <div className="journey-choice-grid">

                      <button
                        type="button"
                        className={
                          inquiryType === "myself"
                            ? "journey-choice active"
                            : "journey-choice"
                        }
                        onClick={() =>
                          setInquiryType("myself")
                        }
                      >
                        <strong>
                          For Myself
                        </strong>

                        <span>
                          I'm exploring support for my own journey.
                        </span>
                      </button>


                      <button
                        type="button"
                        className={
                          inquiryType === "child"
                            ? "journey-choice active"
                            : "journey-choice"
                        }
                        onClick={() =>
                          setInquiryType("child")
                        }
                      >
                        <strong>
                          For My Child
                        </strong>

                        <span>
                          I'm a parent or guardian enquiring
                          for a young mind.
                        </span>
                      </button>


                      <button
                        type="button"
                        className={
                          inquiryType === "program"
                            ? "journey-choice active"
                            : "journey-choice"
                        }
                        onClick={() =>
                          setInquiryType("program")
                        }
                      >
                        <strong>
                          About The Programs
                        </strong>

                        <span>
                          I'd like help understanding the different journeys.
                        </span>
                      </button>

                    </div>

                  </div>


                  {/* =====================================================
                      02 — ABOUT YOU
                  ===================================================== */}

                  <div className="journey-form-block">

                    <span className="journey-form-label">
                      02 • About You
                    </span>


                    <div className="journey-input-grid">


                      {/* NAME */}

                      <div className="journey-field">

                        <label htmlFor="contact-name">
                          Your Name
                        </label>

                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          required
                        />

                      </div>


                      {/* EMAIL */}

                      <div className="journey-field">

                        <label htmlFor="contact-email">
                          Email Address
                        </label>

                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                        />

                      </div>


                      {/* PHONE */}

                      <div className="journey-field">

                        <label htmlFor="contact-phone">
                          Phone Number
                        </label>

                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          placeholder="Your phone number"
                        />

                      </div>


                      {/* LOCATION */}

                      <div className="journey-field">

                        <label htmlFor="contact-location">
                          City / Country
                        </label>

                        <input
                          id="contact-location"
                          name="location"
                          type="text"
                          placeholder="Where are you from?"
                        />

                      </div>

                    </div>


                    {/* CHILD AGE */}

                    {inquiryType === "child" && (

                      <div className="journey-child-field">

                        <div className="journey-field">

                          <label htmlFor="child-age">
                            Child's Age
                          </label>

                          <select
                            id="child-age"
                            name="childAge"
                            defaultValue=""
                            required
                          >

                            <option value="">
                              Select age group
                            </option>

                            <option value="5-8">
                              5–8 years
                            </option>

                            <option value="9-12">
                              9–12 years
                            </option>

                            <option value="13-15">
                              13–15 years
                            </option>

                          </select>

                        </div>

                      </div>

                    )}

                  </div>


                  {/* =====================================================
                      03 — MESSAGE
                  ===================================================== */}

                  <div className="journey-form-block">

                    <span className="journey-form-label">
                      03 • What Brings You Here?
                    </span>

                    <div className="journey-field">

                      <label htmlFor="contact-message">
                        Share a little about what you're looking for
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        rows="7"
                        placeholder="You can share what has been on your mind, what you would like to understand, or what kind of change you are hoping for..."
                        required
                      />

                    </div>

                  </div>


                  {/* =====================================================
                      04 — CONTACT METHOD
                  ===================================================== */}

                  <div className="journey-form-block">

                    <span className="journey-form-label">
                      04 • Staying In Touch
                    </span>

                    <div className="journey-field">

                      <label htmlFor="contact-method">
                        Preferred way to connect
                      </label>

                      <select
                        id="contact-method"
                        name="contactMethod"
                        defaultValue=""
                        required
                      >

                        <option
                          value=""
                          disabled
                        >
                          Select a preference
                        </option>

                        <option value="call">
                          Phone Call
                        </option>

                        <option value="whatsapp">
                          WhatsApp
                        </option>

                        <option value="email">
                          Email
                        </option>

                      </select>

                    </div>

                  </div>


                  {/* =====================================================
                      CONSENT
                  ===================================================== */}

                  <label className="journey-consent">

                    <input
                      type="checkbox"
                      name="consent"
                      required
                    />

                    <span>
                      I understand that these offerings focus on
                      personal growth, conscious living and wellbeing,
                      and are not a substitute for medical or mental
                      health treatment.
                    </span>

                  </label>


                  {/* =====================================================
                      ERROR MESSAGE
                  ===================================================== */}

                  {error && (

                    <div className="journey-form-error">
                      {error}
                    </div>

                  )}


                  {/* =====================================================
                      SUBMIT
                  ===================================================== */}

                  <button
                    className="journey-send"
                    type="submit"
                    disabled={loading}
                  >

                    <span>
                      {loading
                        ? "Sending..."
                        : "Send My Enquiry"}
                    </span>

                    <b>
                      {loading
                        ? "…"
                        : "→"}
                    </b>

                  </button>

                </form>

              ) : (

                /* =====================================================
                   SUCCESS MESSAGE
                ===================================================== */

                <div className="journey-success">

                  <div className="journey-success-icon">
                    ✦
                  </div>

                  <span>
                    Thank You
                  </span>

                  <h2>
                    Your first step
                    <br />
                    <em>has been taken.</em>
                  </h2>

                  <p>
                    Your enquiry has been received successfully.
                    Thank you for taking the time to share a little
                    about your journey. Jigna will be able to review
                    your message and connect with you.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setError("");
                    }}
                  >
                    Return To Form
                  </button>

                </div>

              )}

            </div>

          </div>

        </section>


        {/* =====================================================
            CLOSING MESSAGE
        ===================================================== */}

        <section className="journey-contact-closing">

          <div className="journey-contact-closing-inner">

            <span>
              Hare Krishna
            </span>

            <h2>
              Come as you are.
              <br />
              <em>Begin where you are.</em>
            </h2>

            <p>
              There is no perfect moment to begin looking inward.
              Sometimes the willingness to take one conscious
              step is enough.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Contact;