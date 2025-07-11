import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function About() {
  return (
    <section
      id="about"
      className="bg-cover bg-center text-white py-20 px-4 mt-30 mb-30"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 p-8 rounded-2xl">
       
        <div className="flex-shrink-0">
          <img
            src="/Perfil.jpg"
            alt="Eddy Chaves"
            className="w-70 h-70 rounded-full border-4 border-cyan-400 object-cover"
          />
        </div>

        
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-bold mb-4">Eddy Chaves Rojas</h2>
          <p className="text-lg text-gray-300 text-justify mb-6">
            I am a Proactive Junior Software Developer with a solid technical
            background and a strong focus on .NET development. Experience
            building and deploying comprehensive applications using C#, .NET,
            and ASP.NET web APIs. Ability to design scalable RESTful APIs, apply
            clean architecture principles, and manage data with Entity
            Framework. Also familiar with React, JavaScript, PHP, and other
            languages for full-stack development.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
            <a
              href="https://github.com/Chaves31"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="!text-white hover:!text-cyan-600"
            >
              <FaGithub size={24} className="w-10 h-10" />
            </a>

            <a
              href="https://wa.me/50683241573"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="!text-white hover:!text-cyan-600"
            >
              <FaWhatsapp size={24} className="w-10 h-10" />
            </a>

            <a
              href="https://www.linkedin.com/in/eddy-chaves-rojas-09784335a/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="!text-white hover:!text-cyan-600"
            >
              <FaLinkedin size={24} className="w-10 h-10" />
            </a>

            <a
              href="https://www.instagram.com/eddy.chaves.108/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="!text-white hover:!text-cyan-600"
            >
              <FaInstagram size={24} className="w-10 h-10" />
            </a>

            <a
              href="/CV-Eddy-Chaves.pdf"
              download
              className="px-4 py-2 rounded-md font-medium transition hover:!text-cyan-200 border border-cyan-400"
              title="Download CV"
            >
              Download CV
            </a>
            
            <a
              href="/CV-Eddy-Chaves.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md font-medium transition hover:!text-cyan-200 border border-cyan-400"
              title="View CV"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
