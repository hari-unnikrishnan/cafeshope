import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import WhyChooseUs from "./components/WhyChooseUs";
import MilkShakes from "./components/MilkShakes";
import Blogs from "./components/Blogs";
import Media from "./components/Media";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Categories />
      <WhyChooseUs />
      <MilkShakes />
      <Blogs />
      <Media />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
