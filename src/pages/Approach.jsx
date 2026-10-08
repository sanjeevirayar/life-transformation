import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

function Approach() {
  return (
    <>
      <Header />

      <main>

        {/* =====================================================
            PAGE HERO
        ===================================================== */}

        <PageHero
          eyebrow="Our Philosophy"
          title="A journey that begins"
          italic="from within."
          description="An approach rooted in awareness, conscious living, yogic wisdom and a deeper understanding of the self."
        />


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="approach-intro">

          <div className="approach-intro-inner">

            <div className="approach-intro-heading">

              <div className="approach-kicker">
                <span></span>
                The Approach
              </div>

              <h2>
                Not about becoming
                <br />
                <em>someone else.</em>
              </h2>

            </div>


            <div className="approach-intro-copy">

              <p className="approach-lead">
                The intention is to create a space where you can
                slow down, observe yourself honestly and understand
                what may be happening beneath the surface.
              </p>

              <p>
                Rather than looking at only one part of life,
                the approach considers the body, mind, emotions,
                inner awareness, lifestyle and the way we relate
                to the world around us.
              </p>

              <p>
                Yogic practices, reflection, writing, sound,
                mantra, silence and timeless wisdom may be woven
                together according to the nature of the journey.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            FOUR DIMENSIONS
        ===================================================== */}

        <section className="approach-dimensions">

          <div className="approach-dimensions-inner">

            <div className="approach-section-heading">

              <div className="approach-kicker light">
                <span></span>
                The Whole Being
              </div>

              <h2>
                Looking at life
                <br />
                <em>as a whole.</em>
              </h2>

              <p>
                Inner transformation can involve many dimensions.
                These four areas help create a simple framework
                for understanding the journey.
              </p>

            </div>


            <div className="approach-dimension-grid">

              <article className="approach-dimension-card">

                <span className="dimension-number">
                  01
                </span>

                <div className="dimension-icon">
                  ◯
                </div>

                <h3>Body</h3>

                <p>
                  Becoming more aware of the body, movement,
                  nourishment, daily rhythms and the way lifestyle
                  influences how we experience life.
                </p>

                <div className="dimension-list">
                  <span>Yoga</span>
                  <span>Movement</span>
                  <span>Lifestyle</span>
                  <span>Nourishment</span>
                </div>

              </article>


              <article className="approach-dimension-card">

                <span className="dimension-number">
                  02
                </span>

                <div className="dimension-icon">
                  ◇
                </div>

                <h3>Mind</h3>

                <p>
                  Creating space to notice thoughts, patterns,
                  reactions and questions with greater honesty
                  and less judgement.
                </p>

                <div className="dimension-list">
                  <span>Writing</span>
                  <span>Reflection</span>
                  <span>Dialogue</span>
                  <span>Observation</span>
                </div>

              </article>


              <article className="approach-dimension-card">

                <span className="dimension-number">
                  03
                </span>

                <div className="dimension-icon">
                  ♡
                </div>

                <h3>Heart</h3>

                <p>
                  Exploring devotion, emotional openness,
                  compassion and connection through practices
                  that encourage a softer inner space.
                </p>

                <div className="dimension-list">
                  <span>Bhakti</span>
                  <span>Sound</span>
                  <span>Mantra</span>
                  <span>Connection</span>
                </div>

              </article>


              <article className="approach-dimension-card">

                <span className="dimension-number">
                  04
                </span>

                <div className="dimension-icon">
                  ✦
                </div>

                <h3>Inner Self</h3>

                <p>
                  Turning attention inward through stillness,
                  inner practices, inquiry and wisdom to deepen
                  awareness of the self.
                </p>

                <div className="dimension-list">
                  <span>Kriya</span>
                  <span>Jnana</span>
                  <span>Silence</span>
                  <span>Wisdom</span>
                </div>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
    SHIVA & KRISHNA INSPIRED APPROACH
===================================================== */}

        <section className="sacred-approach">

          <div className="sacred-approach-inner">

            <div className="sacred-approach-header">

              <div className="approach-kicker">
                <span></span>
                Two Ways Inward
              </div>

              <h2>
                Stillness and devotion.
                <br />
                <em>Two doorways back to yourself.</em>
              </h2>

              <p>
                Jigna’s approach is deeply influenced by the spiritual
                practices and wisdom she has explored in her own journey —
                the inward stillness associated with Shiva and the devotion,
                wisdom and conscious action reflected in Krishna’s teachings.
              </p>

            </div>


            <div className="sacred-duality">

              {/* SHIVA */}

              <article className="sacred-path sacred-path-shiva">

                <span className="sacred-path-number">
                  01
                </span>

                <div className="sacred-symbol">
                  ॐ
                </div>

                <span className="sacred-small-title">
                  Inspired by Shiva
                </span>

                <h3>
                  The Way of
                  <br />
                  <em>Stillness.</em>
                </h3>

                <p>
                  Shiva represents the inward journey — becoming still
                  enough to observe, experience and understand what lies
                  beyond the constant movement of thought.
                </p>

                <div className="sacred-practices">

                  <span>Meditation</span>
                  <span>Silence</span>
                  <span>Kriya</span>
                  <span>Observation</span>
                  <span>Inner Stillness</span>
                  <span>Awareness</span>

                </div>

              </article>


              {/* KRISHNA */}

              <article className="sacred-path sacred-path-krishna">

                <span className="sacred-path-number">
                  02
                </span>

                <div className="sacred-symbol">
                  ♡
                </div>

                <span className="sacred-small-title">
                  Inspired by Krishna
                </span>

                <h3>
                  The Way of
                  <br />
                  <em>Devotion.</em>
                </h3>

                <p>
                  Krishna’s teachings bring devotion into everyday life —
                  inviting us to act consciously, love deeply, understand
                  ourselves and live with greater wisdom.
                </p>

                <div className="sacred-practices">

                  <span>Bhakti</span>
                  <span>Mantra</span>
                  <span>Bhagavad Gita</span>
                  <span>Love</span>
                  <span>Conscious Action</span>
                  <span>Wisdom</span>

                </div>

              </article>

            </div>


            {/* MEDITATION + CHANTING */}

            <div className="return-within">

              <span className="return-within-label">
                Coming Home
              </span>

              <h3>
                Meditation quietens.
                <br />
                <em>Chanting opens.</em>
              </h3>

              <p>
                For Jigna, meditation and chanting have become two
                of the most meaningful ways to come home to yourself.
                Meditation creates the space to turn inward, while
                chanting brings attention, devotion and meaning into
                the heart.
              </p>

              <div className="return-within-line">

                <span></span>

                <p>
                  Be still enough to listen.
                  <b>•</b>
                  Open enough to receive.
                </p>

                <span></span>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SUPPORTING PRACTICES
        ===================================================== */}

        <section className="supporting-practices">

          <div className="supporting-practices-inner">

            <div className="supporting-practices-heading">

              <div className="approach-kicker">
                <span></span>
                Supporting Practices
              </div>

              <h2>
                Practices woven
                <br />
                <em>through the journey.</em>
              </h2>

            </div>


            <div className="practice-grid">

              <article className="practice-card">
                <span>01</span>
                <h3>Reflective Writing</h3>
                <p>
                  Creating space to put thoughts and emotions
                  into words and observe them more clearly.
                </p>
              </article>


              <article className="practice-card">
                <span>02</span>
                <h3>Compassionate Conversation</h3>
                <p>
                  A space to speak openly, ask questions and
                  explore what may be happening within.
                </p>
              </article>


              <article className="practice-card">
                <span>03</span>
                <h3>Sound Healing</h3>
                <p>
                  Using sound as part of a quiet and reflective
                  environment for awareness and inner balance.
                </p>
              </article>


              <article className="practice-card">
                <span>04</span>
                <h3>Mantra With Meaning</h3>
                <p>
                  Exploring mantra not only through repetition,
                  but also through understanding its meaning
                  and intention.
                </p>
              </article>


              <article className="practice-card">
                <span>05</span>
                <h3>Silence & Stillness</h3>
                <p>
                  Creating intentional moments without constant
                  stimulation so that inner observation can deepen.
                </p>
              </article>


              <article className="practice-card">
                <span>06</span>
                <h3>Conscious Lifestyle</h3>
                <p>
                  Looking at everyday choices, routines and habits
                  as part of the larger inner journey.
                </p>
              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            BHAGAVAD GITA
        ===================================================== */}

        <section className="gita-section">

          <div className="gita-section-inner">

            <div className="gita-symbol">
              ॐ
            </div>

            <div className="gita-content">

              <span className="gita-label">
                Timeless Wisdom
              </span>

              <h2>
                The Bhagavad Gita
                <br />
                <em>as a source of reflection.</em>
              </h2>

              <p>
                Teachings and selected shlokas from the Bhagavad Gita
                may be introduced as opportunities for reflection,
                self-inquiry and understanding.
              </p>

              <p>
                The intention is not simply to recite a verse,
                but to explore its meaning and consider how that
                wisdom may relate to everyday life.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            HOW IT COMES TOGETHER
        ===================================================== */}

        <section className="approach-integration">

          <div className="approach-integration-inner">

            <span className="integration-label">
              Bringing It Together
            </span>

            <h2>
              There is no single practice
              <br />
              <em>that fits every person.</em>
            </h2>

            <p>
              Different people arrive with different experiences,
              questions and needs. The intention is to draw from
              these approaches thoughtfully rather than force
              everyone through the same process.
            </p>

            <div className="integration-flow">

              <span>Observe</span>
              <i>→</i>

              <span>Understand</span>
              <i>→</i>

              <span>Practice</span>
              <i>→</i>

              <span>Integrate</span>

            </div>

            <div className="integration-actions">

              <Link
                to="/programs"
                className="final-primary-button"
              >
                Explore the Programs
              </Link>

              <Link
                to="/contact"
                className="final-secondary-link"
              >
                Begin a Conversation
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

export default Approach;