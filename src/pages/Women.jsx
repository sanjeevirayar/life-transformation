import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

function Women() {
  return (
    <>
      <Header />

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <PageHero
          eyebrow="For Women"
          title="Find yourself beneath"
          italic="everything you carry."
          description="A compassionate space for greater emotional clarity, self-understanding, inner balance and conscious growth."
        />


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="women-intro">

          <div className="women-intro-inner">

            <div className="women-intro-heading">

              <div className="approach-kicker">
                <span></span>
                A Space For You
              </div>

              <h2>
                You may have been carrying
                <br />
                <em>more than anyone can see.</em>
              </h2>

            </div>


            <div className="women-intro-copy">

              <p className="women-lead">
                Sometimes life becomes so full of responsibilities,
                expectations, relationships and questions that we
                slowly lose connection with ourselves.
              </p>

              <p>
                You may feel uncertain, emotionally overwhelmed,
                disconnected from your confidence, confused about
                a relationship or simply unsure of what comes next.
              </p>

              <p>
                This journey is intended to create space to pause,
                understand what you are experiencing and reconnect
                with the strength and clarity already within you.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHAT YOU MAY BE EXPERIENCING
        ===================================================== */}

        <section className="women-experiences">

          <div className="women-experiences-inner">

            <div className="women-experiences-heading">

              <div className="approach-kicker light">
                <span></span>
                You May Be Here Because...
              </div>

              <h2>
                Something within you
                <br />
                <em>is asking for attention.</em>
              </h2>

              <p>
                There does not have to be one dramatic reason.
                Sometimes the need for change begins quietly.
              </p>

            </div>


            <div className="women-experience-grid">

              <article>
                <span>01</span>
                <h3>Fear & Self-Doubt</h3>
                <p>
                  You may know what you want, but still feel
                  held back by fear, hesitation or uncertainty.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Emotional Heaviness</h3>
                <p>
                  You may be carrying feelings that have been
                  difficult to understand, express or release.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Relationship Struggles</h3>
                <p>
                  You may feel unheard, disconnected or unsure
                  about how to move through a difficult relationship.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Loneliness</h3>
                <p>
                  You may be surrounded by people and still
                  feel disconnected from yourself or others.
                </p>
              </article>

              <article>
                <span>05</span>
                <h3>Lack of Direction</h3>
                <p>
                  You may be asking what comes next, what matters
                  to you or what kind of life feels truly aligned.
                </p>
              </article>

              <article>
                <span>06</span>
                <h3>Spiritual Questions</h3>
                <p>
                  You may feel drawn inward but uncertain about
                  what your spiritual journey means for you.
                </p>
              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            THE JOURNEY
        ===================================================== */}

        <section className="women-journey">

          <div className="women-journey-inner">

            <div className="women-journey-heading">

              <div className="approach-kicker">
                <span></span>
                The Journey
              </div>

              <h2>
                Understand.
                <br />
                Release.
                <br />
                <em>Reconnect. Realign.</em>
              </h2>

            </div>


            <div className="women-journey-steps">

              <article>

                <span className="women-step-number">
                  01
                </span>

                <h3>Understand</h3>

                <p>
                  Create space to recognise what you are feeling,
                  what you are carrying and what may be happening
                  beneath the surface.
                </p>

              </article>


              <article>

                <span className="women-step-number">
                  02
                </span>

                <h3>Release</h3>

                <p>
                  Begin loosening patterns, emotional weight and
                  habits that may no longer support the way you
                  want to live.
                </p>

              </article>


              <article>

                <span className="women-step-number">
                  03
                </span>

                <h3>Reconnect</h3>

                <p>
                  Return attention to your body, values,
                  inner strength, spiritual connection and
                  sense of self.
                </p>

              </article>


              <article>

                <span className="women-step-number">
                  04
                </span>

                <h3>Realign</h3>

                <p>
                  Bring greater awareness into your choices,
                  relationships, routines and the direction
                  you want to move toward.
                </p>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            PRACTICES
        ===================================================== */}

        <section className="women-practices">

          <div className="women-practices-inner">

            <div className="women-practices-heading">

              <div className="approach-kicker">
                <span></span>
                What May Support The Journey
              </div>

              <h2>
                Gentle practices.
                <br />
                <em>Meaningful reflection.</em>
              </h2>

              <p>
                Different women may need different kinds of support.
                Practices are brought into the journey thoughtfully.
              </p>

            </div>


            <div className="women-practice-list">

              <div>
                <span>01</span>
                <strong>Reflection & Writing</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Compassionate Conversation</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Meditation & Stillness</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Yoga & Conscious Movement</strong>
              </div>

              <div>
                <span>05</span>
                <strong>Mantra With Meaning</strong>
              </div>

              <div>
                <span>06</span>
                <strong>Bhagavad Gita Reflections</strong>
              </div>

              <div>
                <span>07</span>
                <strong>Sound & Inner Awareness</strong>
              </div>

              <div>
                <span>08</span>
                <strong>Conscious Lifestyle Practices</strong>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            RETURN TO SELF
        ===================================================== */}

        <section className="women-return">

          <div className="women-return-inner">

            <span className="women-return-label">
              Coming Home
            </span>

            <h2>
              You do not have to
              <br />
              <em>have everything figured out.</em>
            </h2>

            <p>
              Sometimes the beginning is simply giving yourself
              permission to pause, listen and understand what
              your inner world has been trying to tell you.
            </p>

            <div className="women-return-message">

              <span></span>

              <p>
                Clarity begins with awareness.
              </p>

              <span></span>

            </div>

          </div>

        </section>


        {/* =====================================================
            PROGRAM OPTIONS
        ===================================================== */}

        <section className="women-program-options">

          <div className="women-program-options-inner">

            <div className="women-program-options-heading">

              <div className="approach-kicker">
                <span></span>
                Ways To Begin
              </div>

              <h2>
                Begin with the depth
                <br />
                <em>that feels right for you.</em>
              </h2>

            </div>


            <div className="women-program-grid">

              <Link to="/programs" className="women-program-card">

                <span>3 Days</span>

                <h3>Reset</h3>

                <p>
                  A gentle pause to observe and reconnect.
                </p>

                <i>→</i>

              </Link>


              <Link to="/programs" className="women-program-card">

                <span>7 Days</span>

                <h3>Reconnect</h3>

                <p>
                  A deeper journey into awareness and alignment.
                </p>

                <i>→</i>

              </Link>


              <Link to="/programs" className="women-program-card">

                <span>21 Days</span>

                <h3>Transform</h3>

                <p>
                  More time for practice, reflection and integration.
                </p>

                <i>→</i>

              </Link>


              <Link
                to="/contact"
                className="women-program-card women-program-personal"
              >

                <span>1 : 1</span>

                <h3>Personal Journey</h3>

                <p>
                  A private journey shaped around your story.
                </p>

                <i>→</i>

              </Link>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="women-cta">

          <div className="women-cta-inner">

            <span>
              Begin Where You Are
            </span>

            <h2>
              Give yourself the space
              <br />
              <em>to listen inward.</em>
            </h2>

            <p>
              You do not need to know exactly what you need
              before reaching out. A conversation can simply
              be the first step toward understanding.
            </p>

            <Link
              to="/contact"
              className="final-primary-button"
            >
              Begin a Conversation
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Women;