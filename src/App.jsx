import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export function App() {
  return (
    <div className="bg-slate-950 font-sans scroll-smooth">
      <Header />
      <main className="pt-20">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
