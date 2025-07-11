import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-slate-900/80 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-6xl max-[700px]:max-w-4xl max-[1050px]:max-w-2xl mx-auto flex justify-between items-center px-4 py-3">
        
        <h1 className="text-3xl min-[300px]:text-[2rem] sm:text-md md:text-4xl font-bold">Eddy Chaves</h1>

        
        <nav className="hidden md:flex space-x-6">
          <Link to="about" smooth offset={-80} className="cursor-pointer !text-cyan-200 hover:!text-cyan-400">
            About Me
          </Link>
          <Link to="projects" smooth offset={-80} className="cursor-pointer !text-cyan-200 hover:!text-cyan-400">
            Projects
          </Link>
          <Link to="skills" smooth offset={-80} className="cursor-pointer !text-cyan-200 hover:!text-cyan-400">
            Skills
          </Link>
          <Link to="contact" smooth offset={-80} className="cursor-pointer !text-cyan-200 hover:!text-cyan-400">
            Contact
          </Link>
        </nav>

       
        <button onClick={toggleMenu} className="md:hidden !bg-white !text-black !border-black focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

    
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700 px-4 py-4 space-y-4">
          <Link onClick={closeMenu} to="about" smooth offset={-80} className="block cursor-pointer !text-cyan-200 hover:!text-cyan-400">
            About Me
          </Link>
          <Link onClick={closeMenu} to="projects" smooth offset={-80} className="block cursor-pointer !text-cyan-200 hover:!text-cyan-400">
            Projects
          </Link>
          <Link onClick={closeMenu} to="skills" smooth offset={-80} className="block cursor-pointer !text-cyan-200 hover:!text-cyan-400">
            Skills
          </Link>
          <Link onClick={closeMenu} to="contact" smooth offset={-80} className="block cursor-pointer !text-cyan-200 hover:!text-cyan-400">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}