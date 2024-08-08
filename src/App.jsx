import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Timeline from './components/Timeline/Timeline';



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
   
    
    </div>
  )
}

export default App;
