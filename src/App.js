import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Hero from './components/hero/Hero';
import Products from './components/products/Products';
import Services from './components/services/Services';
import Solve from './components/solving-problems/Solve';
import Portfolio from './components/portfolio/Portfolio';
import Comment from './components/comment/Comment';
import Footer from './components/footer/Footer';
import Clients from './components/clients/Clients';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <Services />
      <Solve />
      <Portfolio />
      <Comment />
      <Clients />
      <Footer />

    </div>
  );
}

export default App;
