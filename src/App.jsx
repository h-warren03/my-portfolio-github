import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Your Home component
import About from './pages/About'; // Your About component
import Contact from './pages/Contact'; // Your Contact component
import Works from './pages/Works'; // Your Works component
import NotFound from './pages/NotFound'; // A component for handling 404 page
import Navbar from './components/Navbar';
import Footer from './components/Footer';
 
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="works" element={<Works />} />
          <Route path="*" element={<NotFound />} /> Catch-all route
        </Routes>
      </main>
      <Footer />
    </>
  );
}
 
export default App;
