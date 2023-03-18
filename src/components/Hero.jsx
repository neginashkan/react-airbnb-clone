import "../CSS/styles.css"
export default function Hero() {
  return (
    <section className="hero-section">
      <img
        className="photo-grid"
        src="images/photo-grid.png"
        alt="Experiences"
        title="Experiences"
      />
      <h1 className="heading">Online Experiences</h1>
      <p className="description">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
