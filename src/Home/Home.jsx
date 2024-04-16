import { useEffect } from 'react';
import Aos from 'aos';
import Hero from "../Home/Hero";
import Services from "./Services";
import Portfolio from "../components/UI/Portfolio";
import Contact from "../components/UI/Contact";

export function Home() {
  useEffect( ()=>{
    Aos.init();
  },[]);

  return (
    <>
      <div className="app">
        {/* <Header /> */}
          <Hero />
          <Services />
          <Portfolio />
          <Contact />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Home;
