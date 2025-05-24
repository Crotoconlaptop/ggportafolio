import { useEffect, useState } from "react";
import { BubbleChat } from "flowise-embed-react";
import "./pro.css";
import "./neon.css";

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
  const [isNeon, setIsNeon] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Asigna clase al body según el modo
  useEffect(() => {
    document.body.classList.toggle("neon-mode", isNeon);
    document.body.classList.toggle("pro-mode", !isNeon);
  }, [isNeon]);

  // Imagen dinámica
  useEffect(() => {
    setRandomImage(images[Math.floor(Math.random() * images.length)]);
  }, []);

  // Scroll para enlaces de navegación
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    const onScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active-link");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="cyber-neon">
      {/* Navbar */}
      <nav className="container-fluid">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact" role="button">Contact</a></li>
        </ul>
        <button
          className="toggle-style-button"
          onClick={() => setIsNeon(!isNeon)}
          >
          {isNeon ? "Light Mode" : "Neon Mode"}
        </button>
      </nav>

      {/* Header */}
      <header className="hero" style={{ paddingTop: "110px" }}>
        <h1>Oscar Gomez Giordano</h1>
        <p>Web Developer in progress. I turn ideas (and caffeine) into tools and projects with real utility.</p>
      </header>

      {/* Portfolio */}
      <section id="portfolio" className="portfolio">
        <h2>My Projects</h2>
        <div className="grid portfolio-grid">
          <figure>
            <img src="/chatbot.png" alt="Chast-Bot" className="project-image" />
            <figcaption>This site includes an integrated chatbot trained with my background and project details.
              It’s like having me in a chat bubble—without the coffee dependency.</figcaption>
          </figure>
          <figure>
            <a href="https://linkedin-post-ebon.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.png" alt="Chef Bot" className="project-image" />
            </a>
            <figcaption>Fully automated LinkedIn post generator and publisher, built with Make, OpenAI, and React. 
              No human posting required.</figcaption>
          </figure>
          <figure>
            <a href="https://chef-bot-liart.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/chef.png" alt="Chef Bot" className="project-image" />
            </a>
            <figcaption>AI chatbot that fetches live menu data via API using Flowise GET node.</figcaption>
          </figure>
          <figure>
            <a href="https://subscription-tracker-lac.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/suscription.png" alt="Subscription Manager" className="project-image" />
            </a>
            <figcaption>Track and manage your subscriptions easily. Built with React and Supabase.</figcaption>
          </figure>
          <figure>
            <a href="https://bqt-booking.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/booking.png" alt="Banquet Booking" className="project-image" />
            </a>
            <figcaption>App for managing events and reservations. Created to solve real-world hospitality needs.
              The default view is for clients; access the host section via https://bqt-booking.vercel.app/admin</figcaption>
          </figure>
          <figure>
            <a href="https://inventory-beta-green.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/inventario.png" alt="Bar Inventory" className="project-image" />
            </a>
            <figcaption>Inventory tracking app for bars. Combines intuitive UI with practical features.</figcaption>
          </figure>
          <figure>
            <a href="https://musica-download-gules.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/descarga.png" alt="Music Downloader" className="project-image" />
            </a>
            <figcaption>Simple music downloader powered by Make automation. Use the code “admin” to unlock the admin mode and generate download codes.</figcaption>
          </figure>
          <figure>
            <a href="https://pax-counter.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/eventos.png" alt="Event Calculator" className="project-image" />
            </a>
            <figcaption>Guest counter and calculator for events. Created with real-world bar experience in mind.</figcaption>
          </figure>
          <figure>
            <a href="https://bqt.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/drinks.png" alt="Drinks Calculator" className="project-image" />
            </a>
            <figcaption>Tool to calculate drink quantities for events. One of my first attempts at data handling.</figcaption>
          </figure>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>⚡ HTML5, CSS3, JavaScript</li>
          <li>⚛️ Vite + React</li>
          <li>🌐 Node.js, Express</li>
          <li>📂 Supabase & SQL basics</li>
          <li>🔧 GitHub</li>
          <li>🤖 Automation with Make (Integromat)</li>
          <li>🧠 Prompt Engineering</li>
          <li>🧹 Flowise + Langchain basics</li>
        </ul>
      </section>

      {/* About Me */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <img src="/imggg.jpg" alt="Oscar GG" className="about-image" />
        <p>
          I'm Oscar, a self-taught developer transitioning from hospitality. I build apps inspired by real bar work problems.
          My goal: make simple, elegant tools that solve human problems with tech. My secret weapon? Coffee and bugs.
        </p>
      </section>

      {/* Dynamic Image */}
      <section id="dynamic-image">
        <blockquote className="highlighted-quote">
          "Discipline and curiosity are the foundation of all my builds—errors included."
        </blockquote>
        {randomImage && <img src={randomImage} alt="Random Samurai Cyborg Developer" className="samurai-image" />}
      </section>

      <BubbleChat
  chatflowid="74767580-5f6f-42b7-9a39-9f83bc16dcdb"
  apiHost="https://oscarchatbot.duckdns.org"
  theme={{
    button: {
      backgroundColor: '#6366F1', // color violeta/azul que combina con ambos modos
      right: 20,
      bottom: 20,
      size: 52,
      dragAndDrop: false,
      iconColor: 'white',
      customIconSrc: '/avatar.png', // ícono personalizado tuyo
      autoWindowOpen: {
        autoOpen: true,
        openDelay: 2,
        autoOpenOnMobile: false
      }
    },
    tooltip: {
      showTooltip: true,
      tooltipMessage: 'Ask me anything about Oscar!',
      tooltipBackgroundColor: '#0f172a', // azul oscuro compatible
      tooltipTextColor: '#ffffff',
      tooltipFontSize: 15
    },
    chatWindow: {
      showTitle: true,
      showAgentMessages: true,
      title: "Oscar's Assistant",
      titleAvatarSrc: '/avatar.png', // avatar personalizado
      welcomeMessage: "Hey! I’m Oscar’s digital assistant. Ask me about his projects, skills, or experience.",
      backgroundColor: '#f9fafb', // gris claro, neutro
      height: 560,
      width: 400,
      fontSize: 15,
      starterPrompts: [
        "What projects has Oscar built?",
        "What tech stack does Oscar use?",
        "Where is Oscar working right now?"
      ],
      textInput: {
        placeholder: "Ask about Oscar’s work or skills...",
        backgroundColor: '#ffffff',
        textColor: '#111827',
        sendButtonColor: '#6366F1',
        autoFocus: true
      },
      botMessage: {
        backgroundColor: '#e0e7ff', // lavanda claro
        textColor: '#1e293b',
        showAvatar: true,
        avatarSrc: '/avatar.png'
      },
      userMessage: {
        backgroundColor: '#6366F1',
        textColor: '#ffffff',
        showAvatar: false
      }
    },
    customCSS: `
      @media (min-width: 1024px) {
        .bubble-chat-window {
          margin-top: 40px !important;
        }
      }
    `
  }}
  
/>


      {/* Contact */}
      <section id="contact">
        <h2>Contact</h2>
        <form
          action="https://formsubmit.co/ogg@live.com.ar"
          method="POST"
          className="grid"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="firstname" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Let's Talk</button>
          {formSubmitted && (
            <p style={{ marginTop: "10px", color: "green" }}>
              ✅ Your message has been sent!
            </p>
          )}
        </form>
      </section>

      {/* Footer */}
      <footer>
        <small>
          Built by Oscar GG •
          <a href="https://github.com/Crotoconlaptop/" target="_blank" rel="noopener noreferrer">GitHub</a> •
          <a href="https://www.linkedin.com/in/oscar-gomez-giordano/" target="_blank" rel="noopener noreferrer">LinkedIn</a> •
          <a href="https://www.instagram.com/oscargomezgiordano/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </small>
      </footer>

      {/* Back to Top */}
      <div className="back-to-top-container">
        <a href="#top" role="button">Back to top</a>
      </div>
    </div>
  );
}

export default App;