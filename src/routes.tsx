import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';

const Routes = () => {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <Route component={Home} path="/" exact />
      <Route component={About} path="/about" />
    </BrowserRouter>
  );
};

export default Routes;
