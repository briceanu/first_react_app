import React from 'react';
import ReactDOM from 'react-dom/client';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Info />
    <About name='About' />
    <Interests name='Interests' />
    <Footer />
  </React.StrictMode>
);
