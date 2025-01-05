import Header from "./componants/Header";
import Hero from "./componants/Hero";
import LogoCarousel from "./componants/clientcarousel";
import "./App.css";

function App() {
  return (
    <div className="App overflow-hidden">
      <Header />
      <Hero />
      <LogoCarousel />
    </div>
  );
}

export default App;
