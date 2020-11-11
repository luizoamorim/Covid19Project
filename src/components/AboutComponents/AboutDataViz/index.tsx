import React from 'react';
import './styles.css';
import reactImage from '../../../assets/images/about/react.svg';
import tsImage from '../../../assets/images/about/typescript.svg';
import htmlImage from '../../../assets/images/about/html5.svg';
import cssImage from '../../../assets/images/about/css.svg';
import githubImage from '../../../assets/images/about/github.svg';

const AboutDataViz = () => {
  return (
    <div className="about-box">
      <div className="title">
        <h2>Sobre o DataViz</h2>
      </div>
      <div className="text">
        <div className="text-display">
          <p>
            Este é um projeto acadêmico feito com fins de estudos de tecnologias no campo da
            engenharia de software. Tem como objetivo, também, trazer informações para a população
            sobre os dados do COVID19 através de uma interface amigável. Foi construído basicamente
            utilizando as seguintes ferramentas:
          </p>
          <ul>
            <li>
              <img className="images" id="reactImage" src={reactImage} alt="" />
              <p>ReactJS </p>
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                https://reactjs.org/
              </a>
            </li>
            <li>
              <img className="images" id="reactImage" src={tsImage} alt="" />
              <p>Typescript </p>
              <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                https://www.typescriptlang.org/
              </a>
            </li>
            <li>
              <img className="images" id="reactImage" src={htmlImage} alt="" />
              <p>HTML5 </p>
            </li>
            <li>
              <img className="images" id="reactImage" src={cssImage} alt="" />
              <p>CSS3 </p>
            </li>
            <li>
              <img className="images" id="reactImage" src={githubImage} alt="" />

              <a
                href="https://github.com/luizoamorim/Covid19Project"
                target="_blank"
                rel="noopener noreferrer">
                <p>Repositório GitHub </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutDataViz;
