import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Bio from './components/Bio/Bio';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import Flavicon from './components/Flavicon/Flavicon';
function App() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Bio />
      <Projects />
      <Contact />
      <Flavicon />
      <Footer />
    </main>
  );
}
export default App;
