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
        <div className="grid">
          <figure>
            <a href="https://bar-management.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/bar-manager.png" alt="Project 1: Bar Manager" />
            </a>
            <figcaption>Bar-Manager</figcaption>
          </figure>
          <figure>
            <a href="https://ticket-scanner-beige.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/ticket.png" alt="Project 2: Ticket Scanner" />
            </a>
            <figcaption>Ticket-Scanner</figcaption>
          </figure>
          <figure>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/project3.png" alt="Project 3" />
            </a>
            <figcaption>Project 3</figcaption>
          </figure>
          <figure>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/project4.png" alt="Project 4" />
            </a>
            <figcaption>Project 4</figcaption>
          </figure>
          <figure>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/project5.png" alt="Project 5" />
            </a>
            <figcaption>Project 5</figcaption>
          </figure>
          <figure>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/project6.png" alt="Project 6" />
            </a>
            <figcaption>Project 6</figcaption>
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
          <li>Databases (Supabase, MongoDB, MySQL)</li>
          <li>GitHub</li>
          <li>Prompt Engineering</li>
        </ul>
      </section>

      {/* About Me */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <img src="/imggg.jpg" alt="Your Photo" />
        <p>
          Hi, my name is Oscar. I am transitioning from the hospitality industry to web development.
        </p>
      </section>

      {/* Dynamic Image */}
      <section id="dynamic-image">
        <blockquote className="highlighted-quote">
          "I believe in the power of discipline and focus to turn challenges into opportunities for learning."
        </blockquote>
        {randomImage && <img src={randomImage} alt="Random Samurai Cyborg Developer" id="generated-image" />}
      </section>

      {/* Chatbot Integration */}
      <BubbleChat
        chatflowid="be61e180-d148-4db7-a498-803ad120d927"
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
