import { useEffect, useState } from "react";
import "./App.css";
import { BubbleChat } from "flowise-embed-react";

function App() {
  const images = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
    "/img6.png",
    "/img7.png",
    "/img8.png",
    "/img9.png",
  ];

  const [randomImage, setRandomImage] = useState(images[0]);

  useEffect(() => {
    setRandomImage(images[Math.floor(Math.random() * images.length)]);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="container-fluid">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact" role="button">Contact</a></li>
        </ul>
      </nav>

      {/* Header */}
      <header>
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my journey from hospitality to web development.</p>
      </header>

      {/* Portfolio */}
      <section id="portfolio" className="portfolio">
        <h2>My Projects</h2>
        <div className="grid portfolio-grid">
        <figure>
            <a href="https://subscription-tracker-lac.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/suscription.png" alt="Project 6: suscription" className="project-image" />
            </a>
            <figcaption>Subscription-Manager</figcaption>
          </figure>
        <figure>
            <a href="https://bqt-booking.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/booking.png" alt="Project 1: booking" className="project-image" />
            </a>
            <figcaption>Banquet-Booking</figcaption>
          </figure>
          <figure>
            <a href="https://inventory-beta-green.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/inventario.png" alt="Project 2: inventario" className="project-image" />
            </a>
            <figcaption>Bar-Inventory</figcaption>
          </figure>
          <figure>
            <a href="https://musica-download-gules.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/descarga.png" alt="Project 3: descarga" className="project-image" />
            </a>
            <figcaption>Music-Downloader</figcaption>
          </figure>
          <figure>
            <a href="https://pax-counter.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/eventos.png" alt="Project 4: eventos" className="project-image" />
            </a>
            <figcaption>Event Calculator</figcaption>
          </figure>
          <figure>
            <a href="https://bqt.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/drinks.png" alt="Project 5: drinks" className="project-image" />
            </a>
            <figcaption>Drinks Calculator</figcaption>
          </figure>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML5, CSS3, JavaScript</li>
          <li>Vite + React</li>
          <li>Node.js, Express</li>
          <li>Databases (Supabase)</li>
          <li>GitHub</li>
          <li>Prompt Engineering</li>
          <li>Make (Integromat)</li>
          <li>Flowise</li>
        </ul>
      </section>

      {/* About Me */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <img src="/imggg.jpg" alt="Your Photo" className="about-image" />
        <p>
        Hi, my name is Oscar. I’m currently working as a bartender at a luxury hotel, 
        but I’m transitioning from the hospitality industry into web development. 
        I’ve been learning on my own and applying what I’ve learned by building apps to solve real problems behind the bar.
        </p>
      </section>

      {/* Dynamic Image */}
      <section id="dynamic-image">
        <blockquote className="highlighted-quote">
          "I believe in the power of discipline and focus to turn challenges into opportunities for learning."
        </blockquote>
        {randomImage && <img src={randomImage} alt="Random Samurai Cyborg Developer" className="samurai-image" />}
      </section>

      {/* Chatbot Integration */}
      <BubbleChat
            chatflowid="1c3c096c-1ca0-4049-8bf8-66e6b231ca8d"
            apiHost="https://flowiseai-railway-production-57be.up.railway.app"
      />

      {/* Contact */}
      <section id="contact">
        <h2>Contact</h2>
        <form action="mailto:ogg@live.com.ar" method="POST" className="grid">
          <input type="text" name="firstname" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <small>
          Created with ❤️ by Oscar GG •
          <a href="https://github.com/Crotoconlaptop/" target="_blank" rel="noopener noreferrer">GitHub</a> •
          <a href="https://www.linkedin.com/in/oscar-gomez-giordano/" target="_blank" rel="noopener noreferrer">LinkedIn</a> •
          <a href="https://www.instagram.com/oscargomezgiordano/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </small>
      </footer>

      {/* "Back to top" button */}
      <div className="back-to-top-container">
        <a href="#top" role="button">Back to top</a>
      </div>
    </div>
  );
}

export default App;
