import React from 'react';
import Header from './components/header';
import Navigation from './components/havigation';
import Section from './components/fleet';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Section title="Home" />
      <Section title="About Us" />
      <Section title="Fleet" items={['Scissor Lift', 'Boom Lift', 'Tracked Spider Lift', 'Vehicle Mount']} />
      <Section title="Contact Us" />
      <Section title="Search & Hire" items={['Filter', 'Availability', 'Enquiry']} />
      <Footer />
    </div>
  );
}

export default App;