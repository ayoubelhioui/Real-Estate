import "./App.css";
import Header from "./Components/Header/Header.tsx";
import HeroSection from "./Components/HeroSection/HeroSection.tsx";

function App() {
  return (
    <div className="app">
      <div>
        <div className="white-gradient"/>
        <Header />
        <HeroSection/>
      </div>
    </div>
  );
}

export default App;
