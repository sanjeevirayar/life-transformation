import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">

          {/* Soft background elements */}
          <div className="hero-glow hero-glow-one"></div>
          <div className="hero-glow hero-glow-two"></div>

          <div className="hero-inner">

            {/* =========================
                HERO CONTENT
            ========================== */}

            <div className="hero-content">

              <div className="hero-eyebrow">
                <span></span>
                Transformation Begins Within
              </div>

              <h1>
                Come home
                <br />
                <em>to yourself.</em>
              </h1>

              <p className="hero-description">
                A conscious journey towards clarity, inner balance
                and a deeper connection with who you truly are.
              </p>

              <p className="hero-supporting">
                Rooted in yogic wisdom, self-reflection,
                conscious living and timeless teachings.
              </p>

              <div className="hero-actions">

                <Link
                  to="/programs"
                  className="button button-primary"
                >
                  Explore the Journey
                </Link>

                <Link
                  to="/approach"
                  className="button button-text"
                >
                  Discover Our Approach
                  <span>→</span>
                </Link>

              </div>

            </div>


            {/* =========================
                HERO VISUAL
            ========================== */}

            <div className="hero-visual">

              <div className="hero-emblem-wrap">

                <div className="hero-circle-text">
                  <span>AWAKEN</span>
                  <span>•</span>
                  <span>ALIGN</span>
                  <span>•</span>
                  <span>LIVE</span>
                </div>

                <img
                  src="/images/jigna-logo.png"
                  alt="Krishna and Radha emblem"
                  className="hero-emblem"
                />

                <div className="hero-emblem-caption">

                  <span className="caption-line"></span>

                  <p>
                    Body <b>•</b> Mind <b>•</b> Heart <b>•</b> Self
                  </p>

                  <span className="caption-line"></span>

                </div>

              </div>

            </div>

          </div>

          <div className="hero-scroll">
            <span></span>
            Explore
          </div>

        </section>
        {/* =====================================================
    PHILOSOPHY INTRO
===================================================== */}

        <section className="philosophy-intro">

          <div className="philosophy-intro-inner">

            <div className="philosophy-label">
              <span></span>
              A Journey Inward
            </div>

            <h2>
              Sometimes, what we need
              <br />
              isn't another answer.
              <br />
              <em>It's a deeper understanding of ourselves.</em>
            </h2>

            <div className="philosophy-copy">

              <p>
                Life can leave us carrying fear, confusion, emotional
                heaviness, self-doubt, relationship struggles or simply
                the feeling that something within us is asking for more.
              </p>

              <p>
                This journey is not about becoming someone else.
                It is about slowing down, looking within and creating
                the clarity to understand yourself more deeply.
              </p>

              <p>
                Through conscious practices, reflection and timeless
                wisdom, the intention is to help you reconnect with
                your inner strength and live with greater awareness,
                balance and purpose.
              </p>

            </div>

            <div className="philosophy-signature">
              <span></span>
              Transformation begins within
              <span></span>
            </div>

          </div>

        </section>


        {/* =====================================================
    FOUR YOGIC PATHS
===================================================== */}

        <section className="four-paths">

          <div className="four-paths-inner">

            {/* HEADER */}

            <div className="four-paths-header">

              <div className="four-paths-label">
                <span></span>
                The Yogic Paths
              </div>

              <h2>
                Four paths.
                <br />
                <em>One journey.</em>
              </h2>

              <p>
                Different paths speak to different parts of who we are.
                Together, they offer a way to live with greater awareness,
                devotion, understanding and conscious action.
              </p>

            </div>


            {/* =====================================================
        PATH GRID
    ===================================================== */}

            <div className="paths-grid">


              {/* KARMA */}

              <article className="path-card">

                <div className="path-top">

                  <span className="path-number">
                    01
                  </span>

                  <div className="path-mark">
                    ✦
                  </div>

                </div>

                <h3>
                  Karma Yoga
                </h3>

                <span className="path-subtitle">
                  The Path of Conscious Action
                </span>

                <p>
                  Karma Yoga is the practice of bringing awareness
                  into what we do. It encourages responsibility,
                  service and action without becoming consumed by
                  the outcome.
                </p>

                <div className="path-focus">

                  <span>Action</span>
                  <span>Service</span>
                  <span>Responsibility</span>
                  <span>Purpose</span>

                </div>

              </article>


              {/* JNANA */}

              <article className="path-card">

                <div className="path-top">

                  <span className="path-number">
                    02
                  </span>

                  <div className="path-mark">
                    ◇
                  </div>

                </div>

                <h3>
                  Jnana Yoga
                </h3>

                <span className="path-subtitle">
                  The Path of Knowing
                </span>

                <p>
                  Jnana Yoga invites inquiry into the nature of the self.
                  Through reflection, awareness and wisdom, it encourages
                  us to question, understand and see life more clearly.
                </p>

                <div className="path-focus">

                  <span>Inquiry</span>
                  <span>Wisdom</span>
                  <span>Reflection</span>
                  <span>Understanding</span>

                </div>

              </article>


              {/* KRIYA */}

              <article className="path-card">

                <div className="path-top">

                  <span className="path-number">
                    03
                  </span>

                  <div className="path-mark">
                    ◌
                  </div>

                </div>

                <h3>
                  Kriya Yoga
                </h3>

                <span className="path-subtitle">
                  The Path of Inner Practice
                </span>

                <p>
                  Through disciplined inner practices, Kriya creates
                  space for deeper awareness, stillness and observation,
                  allowing us to experience life beyond habitual patterns.
                </p>

                <div className="path-focus">

                  <span>Practice</span>
                  <span>Awareness</span>
                  <span>Silence</span>
                  <span>Stillness</span>

                </div>

              </article>


              {/* BHAKTI */}

              <article className="path-card">

                <div className="path-top">

                  <span className="path-number">
                    04
                  </span>

                  <div className="path-mark">
                    ♡
                  </div>

                </div>

                <h3>
                  Bhakti Yoga
                </h3>

                <span className="path-subtitle">
                  The Path of Devotion
                </span>

                <p>
                  A journey of love, surrender and connection.
                  Bhakti invites us to soften the heart and experience
                  devotion as a way of moving beyond the limitations
                  of the individual self.
                </p>

                <div className="path-focus">

                  <span>Devotion</span>
                  <span>Love</span>
                  <span>Mantra</span>
                  <span>Connection</span>

                </div>

              </article>


            </div>


            {/* =====================================================
        WISDOM STRIP
    ===================================================== */}

            <div className="wisdom-strip">

              <div className="wisdom-symbol">
                ॐ
              </div>

              <div className="wisdom-content">

                <span className="wisdom-label">
                  Woven Through The Journey
                </span>

                <h3>
                  Timeless wisdom, brought into everyday life.
                </h3>

                <p>
                  Bhagavad Gita inspired reflections, mantra chanting
                  with meaning, sound healing, silence, conscious lifestyle
                  practices and self-reflection support the journey
                  across all four paths.
                </p>

              </div>

            </div>

          </div>

        </section>
        {/* =====================================================
    PROGRAM JOURNEYS
===================================================== */}

        <section className="program-journeys">

          <div className="program-journeys-inner">

            <div className="programs-header">

              <div className="programs-label">
                <span></span>
                Guided Experiences
              </div>

              <h2>
                Choose the journey
                <br />
                <em>that takes you where you want to be.</em>
              </h2>

              <p>
                Each experience offers a different depth of reflection,
                practice and integration. The intention is not to rush
                transformation, but to create the right space for awareness,
                clarity and meaningful change.
              </p>

            </div>


            <div className="programs-grid">

              {/* 3 DAY */}
              <article className="program-card">

                <div className="program-card-top">

                  <span className="program-index">01</span>

                  <span className="program-duration">
                    3 Days
                  </span>

                </div>

                <div className="program-card-content">

                  <span className="program-overline">
                    A Moment To Pause
                  </span>

                  <h3>Reset</h3>

                  <p className="program-tagline">
                    Pause • Observe • Reconnect
                  </p>

                  <p className="program-description">
                    A gentle introduction to conscious living,
                    designed to help you slow down, understand
                    where you are, and reconnect with yourself.
                  </p>

                  <div className="program-focus">

                    <div>
                      <span>Day 01</span>
                      <p>Understand</p>
                    </div>

                    <div>
                      <span>Day 02</span>
                      <p>Reconnect</p>
                    </div>

                    <div>
                      <span>Day 03</span>
                      <p>Realign</p>
                    </div>

                  </div>

                </div>

                <a href="/programs" className="program-link">
                  Explore Reset
                  <span>→</span>
                </a>

              </article>


              {/* 7 DAY */}
              <article className="program-card">

                <div className="program-card-top">

                  <span className="program-index">02</span>

                  <span className="program-duration">
                    7 Days
                  </span>

                </div>

                <div className="program-card-content">

                  <span className="program-overline">
                    A Deeper Journey
                  </span>

                  <h3>Reconnect</h3>

                  <p className="program-tagline">
                    Understand • Realign • Begin Again
                  </p>

                  <p className="program-description">
                    A deeper guided experience exploring the body,
                    mind, emotions, conscious action and spiritual
                    awareness through daily reflection and practice.
                  </p>

                  <div className="program-theme-list">
                    <span>Self-awareness</span>
                    <span>Body & Lifestyle</span>
                    <span>Mind & Emotions</span>
                    <span>Bhakti & Karma</span>
                    <span>Integration</span>
                  </div>

                </div>

                <a href="/programs" className="program-link">
                  Explore Reconnect
                  <span>→</span>
                </a>

              </article>


              {/* 21 DAY */}
              <article className="program-card program-card-featured">

                <div className="program-card-top">

                  <span className="program-index">03</span>

                  <span className="program-duration">
                    21 Days
                  </span>

                </div>

                <div className="program-card-content">

                  <span className="program-overline">
                    A Practice For Life
                  </span>

                  <h3>Transform</h3>

                  <p className="program-tagline">
                    Awareness • Alignment • Integration
                  </p>

                  <p className="program-description">
                    A deeper transformational journey designed to
                    move from awareness into conscious practice and
                    finally into everyday integration.
                  </p>

                  <div className="program-phases">

                    <div>
                      <span>Week 01</span>
                      <strong>Awareness</strong>
                    </div>

                    <div>
                      <span>Week 02</span>
                      <strong>Alignment</strong>
                    </div>

                    <div>
                      <span>Week 03</span>
                      <strong>Integration</strong>
                    </div>

                  </div>

                </div>

                <a href="/programs" className="program-link">
                  Explore Transform
                  <span>→</span>
                </a>

              </article>


              {/* 1:1 */}
              <article className="program-card personal-program">

                <div className="program-card-top">

                  <span className="program-index">04</span>

                  <span className="program-duration">
                    1 : 1
                  </span>

                </div>

                <div className="program-card-content">

                  <span className="program-overline">
                    Just For You
                  </span>

                  <h3>Personal Journey</h3>

                  <p className="program-tagline">
                    Guidance shaped around your story.
                  </p>

                  <p className="program-description">
                    A private, personalised journey created around
                    your present situation, questions, patterns and
                    intentions.
                  </p>

                  <div className="personal-steps">

                    <span>Discover</span>
                    <i>→</i>
                    <span>Understand</span>
                    <i>→</i>
                    <span>Practice</span>
                    <i>→</i>
                    <span>Integrate</span>

                  </div>

                </div>

                <a href="/programs" className="program-link">
                  Explore Personal Journey
                  <span>→</span>
                </a>

              </article>

            </div>


            <div className="programs-note">

              <span></span>

              <p>
                Every journey is an invitation to begin where you are.
              </p>

              <span></span>

            </div>

          </div>

        </section>

        {/* =====================================================
    WHO THIS IS FOR
===================================================== */}

        <section className="audience-section">

          <div className="audience-section-inner">

            <div className="audience-heading">

              <div className="audience-label">
                <span></span>
                Two Journeys
              </div>

              <h2>
                Different stages of life.
                <br />
                <em>The same need to feel understood.</em>
              </h2>

              <p>
                The approach changes with age, experience and circumstance.
                The intention remains the same — to create a space for
                awareness, confidence, clarity and conscious growth.
              </p>

            </div>


            <div className="audience-grid">

              {/* =====================================================
          WOMEN
      ===================================================== */}

              <article className="audience-card audience-women">

                <div className="audience-card-number">
                  01
                </div>

                <div className="audience-card-content">

                  <span className="audience-overline">
                    For Women
                  </span>

                  <h3>
                    Find yourself beneath
                    <br />
                    <em>everything you carry.</em>
                  </h3>

                  <p className="audience-description">
                    A compassionate space for women to slow down,
                    understand what they are experiencing, reconnect
                    with their inner strength and move forward with
                    greater awareness and clarity.
                  </p>

                  <div className="audience-focus">

                    <span>Emotional Clarity</span>
                    <span>Self-Understanding</span>
                    <span>Confidence</span>
                    <span>Relationships</span>
                    <span>Inner Balance</span>
                    <span>Purpose</span>

                  </div>

                  <div className="audience-message">
                    <span></span>

                    <p>
                      Understand • Release • Reconnect • Realign
                    </p>
                  </div>

                  <Link
                    to="/women"
                    className="audience-link"
                  >
                    Explore the Women's Journey
                    <span>→</span>
                  </Link>

                </div>

              </article>


              {/* =====================================================
          YOUNG MINDS
      ===================================================== */}

              <article className="audience-card audience-young">

                <div className="audience-card-number">
                  02
                </div>

                <div className="audience-card-content">

                  <span className="audience-overline">
                    For Young Minds • Ages 5–15
                  </span>

                  <h3>
                    Strong roots.
                    <br />
                    <em>Open hearts. Confident minds.</em>
                  </h3>

                  <p className="audience-description">
                    Gentle, age-appropriate experiences designed
                    to help children understand themselves, express
                    emotions, develop confidence and grow with
                    awareness, values and inner stability.
                  </p>

                  <div className="audience-focus">

                    <span>Confidence</span>
                    <span>Emotional Expression</span>
                    <span>Focus</span>
                    <span>Creativity</span>
                    <span>Values</span>
                    <span>Self-Awareness</span>

                  </div>

                  <div className="audience-message">
                    <span></span>

                    <p>
                      Know Myself • Calm Myself • Express Myself • Grow
                    </p>
                  </div>

                  <Link
                    to="/young-minds"
                    className="audience-link"
                  >
                    Explore Young Minds
                    <span>→</span>
                  </Link>

                </div>

              </article>

            </div>

          </div>

        </section>
        {/* =====================================================
    HER STORY PREVIEW
===================================================== */}

        <section className="story-preview">

          <div className="story-preview-inner">

            {/* IMAGE SIDE */}

            <div className="story-image-side">

              <div className="story-image-wrap">

                <img
                  src="/images/jigna-portrait.png"
                  alt="Jigna Thakkar"
                  className="story-image"
                />

                <div className="story-image-note">
                  <span>Since 2019</span>
                  A journey inward
                </div>

              </div>

            </div>


            {/* CONTENT SIDE */}

            <div className="story-content">

              <div className="story-label">
                <span></span>
                Her Journey
              </div>

              <h2>
                A longing to know
                <br />
                <em>who she truly was.</em>
              </h2>

              <p className="story-intro">
                Jigna's spiritual journey did not begin with a profession
                or a program. It began with a deeply personal longing
                to understand herself and experience life more consciously.
              </p>


              {/* MILESTONE 01 */}

              <div className="story-milestone">

                <span className="story-year">
                  2019
                </span>

                <div>

                  <h3>Four personal vows</h3>

                  <p>
                    In her search for greater inner clarity, she chose
                    to take four personal vows — no social media,
                    no outside food, no lying and celibacy.
                  </p>

                  <p>
                    What began as a personal commitment became the
                    beginning of a deeper spiritual journey.
                  </p>

                </div>

              </div>


              {/* MILESTONE 02 */}

              <div className="story-milestone">

                <span className="story-year">
                  2022
                </span>

                <div>

                  <h3>A deeper journey into sadhana</h3>

                  <p>
                    Her seeking led her deeper into yogic and meditative
                    practices through Isha, including Inner Engineering,
                    Hatha Yoga, BSP, Shoonya and Samyama.
                  </p>

                </div>

              </div>


              {/* MILESTONE 03 */}

              <div className="story-milestone">

                <span className="story-year">
                  8 Months
                </span>

                <div>

                  <h3>Living the practice</h3>

                  <p>
                    She dedicated eight months to intense sadhana
                    through the Sadhanapada program at Isha,
                    giving herself the space to live, practise and
                    explore the inner journey more deeply.
                  </p>

                </div>

              </div>


              {/* MILESTONE 04 */}

              <div className="story-milestone story-milestone-last">

                <span className="story-year">
                  Today
                </span>

                <div>

                  <h3>From seeking to service</h3>

                  <p>
                    Her journey continues through spiritual learning,
                    coaching, healing practices, travel, creativity and
                    self-exploration — with a growing intention to share
                    what she has learned in service of others.
                  </p>

                </div>

              </div>


              <Link
                to="/her-story"
                className="story-link"
              >
                Discover Her Full Story
                <span>→</span>
              </Link>

            </div>

          </div>

        </section>

        {/* =====================================================
    GIVING BACK
===================================================== */}

        <section className="giving-back">

          <div className="giving-back-inner">

            <div className="giving-back-label">
              <span></span>
              Giving Back
            </div>

            <div className="giving-back-grid">

              <div className="giving-back-heading">

                <h2>
                  Growth that
                  <br />
                  <em>gives back.</em>
                </h2>

              </div>


              <div className="giving-back-content">

                <p className="giving-back-lead">
                  For Jigna, transformation is not only about
                  personal growth. It is also about becoming
                  capable of contributing to something beyond ourselves.
                </p>

                <p>
                  A meaningful part of this journey is rooted in service.
                  Her intention is to use the work she creates not only
                  to support individuals, but also to contribute toward
                  people and causes in need.
                </p>

                <p>
                  As this initiative grows, the vision is to allow
                  inner transformation to create a wider ripple —
                  from one person, to a family, to a community.
                </p>

                <div className="giving-back-quote">

                  <span className="giving-quote-mark">
                    “
                  </span>

                  <p>
                    What we receive through life can become
                    something we learn to give back.
                  </p>

                </div>

                <Link
                  to="/giving-back"
                  className="giving-back-link"
                >
                  Discover the Giving Back Vision
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </section>
        {/* =====================================================
    FINAL CTA
===================================================== */}

        <section className="final-journey">

          <div className="final-journey-inner">

            <div className="final-journey-symbol">
              ॐ
            </div>

            <span className="final-journey-label">
              Begin Where You Are
            </span>

            <h2>
              Your journey doesn't begin
              <br />
              when everything is perfect.
              <br />
              <em>It begins when you choose to look within.</em>
            </h2>

            <p>
              Whether you are looking for clarity, emotional balance,
              deeper self-understanding or a more conscious way of living,
              the first step can simply be a conversation.
            </p>

            <div className="final-journey-actions">

              <Link
                to="/contact"
                className="final-primary-button"
              >
                Begin Your Journey
              </Link>

              <Link
                to="/programs"
                className="final-secondary-link"
              >
                Explore the Programs
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

export default Home;