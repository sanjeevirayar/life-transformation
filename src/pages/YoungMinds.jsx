import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

function YoungMinds() {
  return (
    <>
      <Header />

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <PageHero
          eyebrow="For Young Minds • Ages 5–15"
          title="Strong roots. Open hearts."
          italic="Confident minds."
          description="Age-appropriate experiences that help children understand themselves, express emotions, build confidence and grow with greater awareness and values."
        />


        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="young-intro">

          <div className="young-intro-inner">

            <div className="young-intro-heading">

              <div className="approach-kicker">
                <span></span>
                Growing Within
              </div>

              <h2>
                Childhood is not only about
                <br />
                <em>learning about the world.</em>
              </h2>

            </div>


            <div className="young-intro-copy">

              <p className="young-lead">
                It is also the time when children begin learning
                how to understand themselves.
              </p>

              <p>
                Confidence, emotional expression, focus, courage,
                kindness and self-awareness can all be nurtured
                gradually through age-appropriate experiences.
              </p>

              <p>
                The intention is to create a warm space where
                young minds can explore themselves through
                conversation, movement, creativity, reflection
                and simple conscious practices.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            FOUR PILLARS
        ===================================================== */}

        <section className="young-pillars">

          <div className="young-pillars-inner">

            <div className="young-pillars-heading">

              <div className="approach-kicker light">
                <span></span>
                Four Foundations
              </div>

              <h2>
                Growing with awareness,
                <br />
                <em>one step at a time.</em>
              </h2>

            </div>


            <div className="young-pillars-grid">

              <article>

                <span>01</span>

                <h3>
                  Know
                  <br />
                  Myself
                </h3>

                <p>
                  Understanding emotions, strengths, likes,
                  fears and the qualities that make each child unique.
                </p>

              </article>


              <article>

                <span>02</span>

                <h3>
                  Calm
                  <br />
                  Myself
                </h3>

                <p>
                  Learning simple ways to slow down, breathe,
                  focus and create a little more inner steadiness.
                </p>

              </article>


              <article>

                <span>03</span>

                <h3>
                  Express
                  <br />
                  Myself
                </h3>

                <p>
                  Encouraging children to communicate feelings,
                  thoughts and ideas with greater confidence.
                </p>

              </article>


              <article>

                <span>04</span>

                <h3>
                  Grow With
                  <br />
                  Values
                </h3>

                <p>
                  Exploring kindness, gratitude, courage,
                  responsibility and conscious choices in daily life.
                </p>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHAT MAY BE EXPLORED
        ===================================================== */}

        <section className="young-explore">

          <div className="young-explore-inner">

            <div className="young-explore-heading">

              <div className="approach-kicker">
                <span></span>
                What We May Explore
              </div>

              <h2>
                Helping young minds
                <br />
                <em>understand their inner world.</em>
              </h2>

              <p>
                The focus can vary according to age,
                personality and what the child may currently need.
              </p>

            </div>


            <div className="young-explore-grid">

              <article>
                <div className="young-icon">♡</div>
                <h3>Confidence</h3>
                <p>
                  Encouraging children to recognise their strengths
                  and trust themselves more deeply.
                </p>
              </article>

              <article>
                <div className="young-icon">☼</div>
                <h3>Emotions</h3>
                <p>
                  Helping children notice, name and express
                  emotions in a healthier way.
                </p>
              </article>

              <article>
                <div className="young-icon">◌</div>
                <h3>Focus</h3>
                <p>
                  Introducing simple practices that support
                  attention, calmness and presence.
                </p>
              </article>

              <article>
                <div className="young-icon">✦</div>
                <h3>Creativity</h3>
                <p>
                  Using drawing, writing, movement and imagination
                  as ways to explore the self.
                </p>
              </article>

              <article>
                <div className="young-icon">◇</div>
                <h3>Courage</h3>
                <p>
                  Supporting children as they learn to face
                  fears, uncertainty and new experiences.
                </p>
              </article>

              <article>
                <div className="young-icon">❋</div>
                <h3>Values</h3>
                <p>
                  Exploring gratitude, kindness, responsibility
                  and thoughtful action in everyday situations.
                </p>
              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            AGE APPROPRIATE APPROACH
        ===================================================== */}

        <section className="young-age">

          <div className="young-age-inner">

            <div className="young-age-heading">

              <div className="approach-kicker">
                <span></span>
                Age Appropriate
              </div>

              <h2>
                A five-year-old and a fifteen-year-old
                <br />
                <em>need different kinds of guidance.</em>
              </h2>

              <p>
                The language, activities and depth of reflection
                should change with the child's age and maturity.
              </p>

            </div>


            <div className="young-age-grid">

              <article>

                <span className="young-age-range">
                  Ages 5–8
                </span>

                <h3>Explore Through Play</h3>

                <p>
                  Stories, movement, drawing, breathing,
                  gratitude and simple ways to recognise feelings.
                </p>

                <div className="young-age-tags">
                  <span>Stories</span>
                  <span>Movement</span>
                  <span>Feelings</span>
                  <span>Kindness</span>
                </div>

              </article>


              <article>

                <span className="young-age-range">
                  Ages 9–12
                </span>

                <h3>Understand & Express</h3>

                <p>
                  Reflection, creativity, confidence,
                  emotional awareness and building healthy habits.
                </p>

                <div className="young-age-tags">
                  <span>Confidence</span>
                  <span>Writing</span>
                  <span>Focus</span>
                  <span>Values</span>
                </div>

              </article>


              <article>

                <span className="young-age-range">
                  Ages 13–15
                </span>

                <h3>Know Yourself More Deeply</h3>

                <p>
                  Exploring identity, emotions, confidence,
                  relationships, choices and personal direction.
                </p>

                <div className="young-age-tags">
                  <span>Identity</span>
                  <span>Choices</span>
                  <span>Self-Awareness</span>
                  <span>Courage</span>
                </div>

              </article>

            </div>

          </div>

        </section>


        {/* =====================================================
            PRACTICES
        ===================================================== */}

        <section className="young-practices">

          <div className="young-practices-inner">

            <div className="young-practices-heading">

              <div className="approach-kicker">
                <span></span>
                Gentle Ways To Learn
              </div>

              <h2>
                Less lecturing.
                <br />
                <em>More experiencing.</em>
              </h2>

            </div>


            <div className="young-practice-row">

              <div>
                <span>01</span>
                <strong>Stories & Reflection</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Creative Writing</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Drawing & Expression</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Movement & Yoga</strong>
              </div>

              <div>
                <span>05</span>
                <strong>Breathing & Quiet Time</strong>
              </div>

              <div>
                <span>06</span>
                <strong>Simple Mantras & Meaning</strong>
              </div>

              <div>
                <span>07</span>
                <strong>Gratitude Practices</strong>
              </div>

              <div>
                <span>08</span>
                <strong>Conversation & Questions</strong>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            PARENTS
        ===================================================== */}

        <section className="young-parents">

          <div className="young-parents-inner">

            <div className="young-parent-mark">
              ♡
            </div>

            <div className="young-parent-content">

              <span>
                For Parents & Guardians
              </span>

              <h2>
                A child's inner world deserves
                <br />
                <em>care, patience and respect.</em>
              </h2>

              <p>
                Experiences for young minds are intended to be
                age-appropriate and supportive. Parents or guardians
                remain an important part of the process, especially
                when understanding a child's needs and progress.
              </p>

              <p>
                The intention is personal growth and wellbeing —
                not diagnosis, psychotherapy or medical treatment.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="young-cta">

          <div className="young-cta-inner">

            <span>
              Growing Within
            </span>

            <h2>
              Give them strong roots
              <br />
              <em>for the life ahead.</em>
            </h2>

            <p>
              If you would like to understand whether this kind
              of experience may be suitable for your child,
              begin with a conversation.
            </p>

            <Link
              to="/contact"
              className="final-primary-button"
            >
              Speak With Us
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default YoungMinds;