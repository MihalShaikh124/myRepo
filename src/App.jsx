import "./App.css";
import "../index.css";
import { Footer } from "./sections/Footer/Footer";
import { Section1 } from "./sections/Section1/Section1";
import { Section2 } from "./sections/Section2/Section2";
import { Section3 } from "./sections/Section3/Section3";
import { Counter } from "./sections/Section4/Counter";
import { Section5 } from "./sections/Section5/Section5";
import { Section6 } from "./sections/Section6/Section6";
import { Section7 } from "./sections/Section7/Section7";
import { Section8 } from "./sections/Section8/Section8";
import { Section9 } from "./sections/Section9/Section9";

function App() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Counter />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer />
    </>
  );
}

export default App;
