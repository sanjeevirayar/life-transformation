import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

function Programs() {
  return (
    <>
      <Header />

      <main>

        {/* =====================================================
            PAGE HERO
        ===================================================== */}

        <PageHero
          eyebrow="Guided Experiences"
          title="Choose a journey"
          italic="that takes you where you want to be."
          description="Each experience offers a different depth of reflection, practice and integration — from a gentle pause to a deeper commitment to conscious living."
        />


        {/* =====================================================
            PROGRAM INTRO
        ===================================================== */}

        <section className="programs-page-intro">

          <div className="programs-page-intro-inner">

            <div className="programs-page-intro-heading">

              <div className="approach-kicker">
                <span></span>
                Begin Where You Are
              </div>

              <h2>
                No two journeys
                <br />
                <em>begin in the same place.</em>
              </h2>

            </div>


            <div className="programs-page-intro-copy">

              <p className="programs-page-lead">
                Some people need a pause. Some need deeper reflection.
                Others are ready to commit to a longer inner journey.
              </p>

              <p>
                These experiences are designed around different levels
                of depth rather than the idea that transformation must
                happen within a fixed number of days.
              </p>

              <p>
                Yoga, reflection, meditation, mantra, conscious lifestyle
                practices, Bhagavad Gita inspired wisdom, sound and silence
                may be brought into the journey according to its purpose.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            3 DAY RESET
        ===================================================== */}

        <section className="program-detail program-detail-light">

          <div className="program-detail-inner">

            <div className="program-detail-meta">

              <span className="program-detail-number">
                01
              </span>

              <span className="program-detail-duration">
                3 Days
              </span>

            </div>


            <div className="program-detail-main">

              <span className="program-detail-label">
                A Moment To Pause
              </span>

              <h2>
                Reset
              </h2>

              <p className="program-detail-tagline">
                Pause • Observe • Reconnect
              </p>

              <p className="program-detail-description">
                A gentle introduction for those who feel the need
                to slow down, create space and reconnect with what
                may be happening within.
              </p>

            </div>


            <div className="program-detail-side">

              <span className="program-side-title">
                The Journey May Explore
              </span>

              <ul>
                <li>Self-reflection</li>
                <li>Understanding current patterns</li>
                <li>Gentle yogic practices</li>
                <li>Conscious breathing and stillness</li>
                <li>Writing and reflection</li>
                <li>Simple lifestyle awareness</li>
              </ul>

            </div>

          </div>

        </section>


        {/* =====================================================
            7 DAY RECONNECT
        ===================================================== */}

        <section className="program-detail program-detail-blush">

          <div className="program-detail-inner">

            <div className="program-detail-meta">

              <span className="program-detail-number">
                02
              </span>

              <span className="program-detail-duration">
                7 Days
              </span>

            </div>


            <div className="program-detail-main">

              <span className="program-detail-label">
                A Deeper Journey
              </span>

              <h2>
                Reconnect
              </h2>

              <p className="program-detail-tagline">
                Understand • Realign • Begin Again
              </p>

              <p className="program-detail-description">
                A deeper experience for those who want more time
                to observe their thoughts, emotions, habits and
                relationship with everyday life.
              </p>

            </div>


            <div className="program-detail-side">

              <span className="program-side-title">
                The Journey May Explore
              </span>

              <ul>
                <li>Body and lifestyle awareness</li>
                <li>Thoughts and emotional patterns</li>
                <li>Reflection and writing</li>
                <li>Bhakti and conscious action</li>
                <li>Mantra and meaningful chanting</li>
                <li>Silence and inner observation</li>
              </ul>

            </div>

          </div>

        </section>


        {/* =====================================================
            21 DAY TRANSFORM
        ===================================================== */}

        <section className="program-detail program-detail-dark">

          <div className="program-detail-inner">

            <div className="program-detail-meta">

              <span className="program-detail-number">
                03
              </span>

              <span className="program-detail-duration">
                21 Days
              </span>

            </div>


            <div className="program-detail-main">

              <span className="program-detail-label">
                A Practice For Life
              </span>

              <h2>
                Transform
              </h2>

              <p className="program-detail-tagline">
                Awareness • Alignment • Integration
              </p>

              <p className="program-detail-description">
                A longer journey intended to create enough time
                for observation, practice and gradual integration
                into everyday life.
              </p>

            </div>


            <div className="program-detail-side">

              <span className="program-side-title">
                Three Broad Phases
              </span>

              <div className="program-phase-stack">

                <div>
                  <span>Phase 01</span>
                  <strong>Awareness</strong>
                  <p>
                    Observe thoughts, emotions, routines,
                    reactions and patterns.
                  </p>
                </div>

                <div>
                  <span>Phase 02</span>
                  <strong>Alignment</strong>
                  <p>
                    Introduce practices that encourage
                    greater clarity and conscious living.
                  </p>
                </div>

                <div>
                  <span>Phase 03</span>
                  <strong>Integration</strong>
                  <p>
                    Explore how the learning can move
                    into daily choices and relationships.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            PERSONAL JOURNEY
        ===================================================== */}

        <section className="personal-journey-page">

          <div className="personal-journey-page-inner">

            <div className="personal-journey-heading">

              <div className="approach-kicker">
                <span></span>
                One To One
              </div>

              <span className="personal-journey-number">
                04
              </span>

              <h2>
                A journey shaped
                <br />
                <em>around your story.</em>
              </h2>

              <p>
                Some questions require a more personal space.
                The one-to-one journey is intended to respond
                to the individual rather than follow a fixed group structure.
              </p>

            </div>


            <div className="personal-journey-flow">

              <div>
                <span>01</span>
                <h3>Discover</h3>
                <p>
                  Begin with your present situation,
                  questions and intentions.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>Understand</h3>
                <p>
                  Explore patterns, emotions, habits
                  and what may need greater attention.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Practice</h3>
                <p>
                  Introduce suitable reflection,
                  lifestyle or spiritual practices.
                </p>
              </div>

              <div>
                <span>04</span>
                <h3>Integrate</h3>
                <p>
                  Bring what is understood into
                  everyday life consciously.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHAT MAY BE WOVEN THROUGH
        ===================================================== */}

        <section className="program-methods">

          <div className="program-methods-inner">

            <div className="program-methods-heading">

              <div className="approach-kicker">
                <span></span>
                Woven Through The Journey
              </div>

              <h2>
                Different practices.
                <br />
                <em>One inward intention.</em>
              </h2>

            </div>


            <div className="program-methods-grid">

              <span>Meditation</span>
              <span>Yoga</span>
              <span>Mantra Chanting</span>
              <span>Bhagavad Gita</span>
              <span>Reflective Writing</span>
              <span>Sound</span>
              <span>Silence</span>
              <span>Conscious Lifestyle</span>
              <span>Bhakti</span>
              <span>Karma</span>
              <span>Kriya</span>
              <span>Jnana</span>

            </div>

          </div>

        </section>


        {/* =====================================================
            IMPORTANT NOTE
        ===================================================== */}

        <section className="program-note-section">

          <div className="program-note-inner">

            <span className="program-note-label">
              A Gentle Note
            </span>

            <h2>
              The number of days is not
              <br />
              <em>a promise of transformation.</em>
            </h2>

            <p>
              These journeys are intended to create space for
              awareness, understanding and practice. Each person's
              experience is different, and meaningful inner change
              unfolds in its own time.
            </p>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="programs-page-cta">

          <div className="programs-page-cta-inner">

            <span>
              Not sure where to begin?
            </span>

            <h2>
              Start with a conversation.
            </h2>

            <p>
              The first step can simply be understanding what you
              are currently looking for and which journey may feel
              most appropriate.
            </p>

            <Link
              to="/contact"
              className="final-primary-button"
            >
              Begin Your Journey
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Programs;