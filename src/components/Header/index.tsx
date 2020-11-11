import React from 'react';
import { Link } from 'react-router-dom';
import coronavirus from '../../assets/images/coronavirus.svg';
import './styles.css';

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="content-header">
          <div className="logo">
            <img id="covid" src={coronavirus} alt="" />
            <h1>
              Dataviz
              <a
                href="https://pt.wikipedia.org/wiki/COVID-19"
                target="_blank"
                rel="noopener noreferrer">
                Covid19
              </a>
            </h1>
          </div>
          <div className="nav">
            <Link to="/" id="main">
              <h2>Tela principal</h2>
            </Link>
            <Link to="/about" id="about">
              <h2>Sobre</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
