import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './styles/index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
