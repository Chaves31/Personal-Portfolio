import {
  Github,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-slate-900 mt-30 text-white pt-20 px-4">
      <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 gap-10 items-center">
        {/* Columna Izquierda: Presentación */}
        <div className="text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Eddy Chaves</h2>
          <p className="text-gray-300 text-lg">
            I'm a passionate Full Stack Developer, always eager to learn and improve.
          </p>
        </div>

        {/* Columna Derecha: Información de contacto */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-semibold mb-6">Contact</h3>
          <div className="space-y-4 text-gray-200">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-5 h-5" />
              <span>eddychaves.ecr@gmail.com</span>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-5 h-5" />
              <span>+506 8324-1573</span>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-5 h-5" />
              <span>Orotina, Alajuela, Costa Rica</span>
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-start gap-6 mt-6 text-gray-400">
            <a
              href="https://github.com/Chaves31"
              target="_blank"
              rel="noopener noreferrer"
              className="!text-white hover:!text-cyan-400"
            >
              <Github size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/eddy-chaves-rojas-09784335a/"
              target="_blank"
              rel="noopener noreferrer"
              className="!text-white hover:!text-cyan-400"
            >
              <Linkedin size={30} />
            </a>
            <a
              href="https://wa.me/50683241573"
              target="_blank"
              rel="noopener noreferrer"
              className="!text-white hover:!text-cyan-400"
            >
              <MessageCircle size={30} />
            </a>
            <a
              href="https://www.instagram.com/eddy.chaves.108/"
              target="_blank"
              rel="noopener noreferrer"
              className="!text-white hover:!text-cyan-400"
            >
              <Instagram size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 w-[80%] mx-auto"></div>
    </section>
  );
}