import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import HealthBenefits from "./components/HealthBenefits";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-coffee-dark text-coffee-cream">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <HealthBenefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
