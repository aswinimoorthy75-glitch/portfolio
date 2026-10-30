import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <p className="hero-greeting">Hi, I'm</p>
      <h1>Aswini S</h1>
      <h2>Aspiring Java Full-Stack Developer</h2>
      <p className="hero-stack">React · Spring Boot · MySQL</p>
      <a href="#projects" className="btn">View My Projects</a>
    </section>
  );
}

export default Hero;