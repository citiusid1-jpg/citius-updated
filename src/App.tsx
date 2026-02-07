import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Events from './sections/Events';
import Schedule from './sections/Schedule';
import Rules from './sections/Rules';
import Registration from './sections/Registration';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Schedule />
        <Rules />
        <Registration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
