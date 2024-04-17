import { useEffect } from 'react';
import Aos from 'aos';
import About from "./About/About"
import Home from "../src/Home/Home";
import Branches from './components/Pages/BranchesPage';
import Contact from './components/Pages/Contact';

import './App.css';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useEffect( ()=>{
    Aos.init();
  },[]);

  return (
    <>
      <div className="app">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/branches" element={<Branches/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
