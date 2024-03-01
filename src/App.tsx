import "./App.css";
import Companies from "./Components/Companies/Companies.tsx";
import ContactUs from "./Components/Contact-Us/Contact-us.tsx";
import Header from "./Components/Header/Header.tsx";
import HeroSection from "./Components/HeroSection/HeroSection.tsx";
import Residencies from "./Components/Residencies/Residencies.tsx";
import Value from "./Components/Value/Value.tsx";

function App() {
  return (
    <div className="app">
      <div>
        <div className="white-gradient"/>
        <Header />
        <HeroSection/>
      </div>
        <Companies/>
        <Residencies/>
        <Value/>
        <ContactUs/>
    </div>
  );
}

export default App;
