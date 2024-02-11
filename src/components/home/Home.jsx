import "./home.css";
import Navbar from "../nabar/Navbar";
import Card from "../cards/Card";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Home1 from "../home page/Home";
import Control from "../../controls/Control";

function Home() {
  return (
    <>
      <header className="px-5">
        <Navbar />
        <Home1 />
      </header>
      <section>
        <h1 className="text-3xl font-bold text-white text-center mb-10 mt-0">
          Our Team
        </h1>
        <Card />
        <Contact />
        <Footer />
        <Control />
      </section>
    </>
  );
}

export default Home;
