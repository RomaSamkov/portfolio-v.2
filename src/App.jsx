import { Conatiner } from "./App.styled";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import ThreeJSComponent from "./components/ThreeJSComponent/ThreeJSComponent";
import Works from "./components/Works";

function App() {
  return (
    <Conatiner>
      <Hero />
      <About />
      <Works />
      <Contacts />
      <ThreeJSComponent />
    </Conatiner>
  );
}

export default App;
