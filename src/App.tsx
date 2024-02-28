import "./App.css";
import Companies from "./Components/Companies/Companies.tsx";
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
        <Companies/>
    </div>
  );
}

export default App;
