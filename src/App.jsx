import "./CSS/styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cards/>
    </div>
  );
}
