function PageHero({
  eyebrow,
  title,
  italic,
  description,
}) {
  return (
    <section className="inner-page-hero">

      <div className="inner-page-hero-inner">

        <div className="inner-page-eyebrow">
          <span></span>
          {eyebrow}
        </div>

        <h1>
          {title}
          <br />
          <em>{italic}</em>
        </h1>

        {description && (
          <p>
            {description}
          </p>
        )}

      </div>

    </section>
  );
}

export default PageHero;