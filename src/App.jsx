// In your main index.js or App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Upcoming from './components/Upcoming';
import About from './components/About';
import Trust from './components/Trust';
import Footer from './components/Footer';


function App() {
  return (
    <>
      
      <Navbar/>
      <Stats/>
      <Upcoming/>
     <About/>
     <Trust/>
     <Footer/>
    </>
    

   
    
  );
}

export default App;