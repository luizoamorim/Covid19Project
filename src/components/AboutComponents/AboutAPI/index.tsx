import React from 'react';
import './styles.css';
import postman from '../../../assets/images/about/postman_api.svg';

const AboutAPI = () => {
  return (
    <div className="about-box">
      <div className="title">
        <div className="title-with-image">
          <h2>API Postman</h2>
          <img className="images" id="githubImage" src={postman} alt="" />
        </div>
      </div>
      <div className="text">
        <div className="text-display">
          <p>
            Todos os dados estão sendo buscados em uma API criada pela postman. Uma plataforma
            colaborativa para desenvolvimento de APIs.
          </p>
          <ul>
            <li>
              <p>Link da API utilizada:</p>
              <a
                href="https://documenter.getpostman.com/view/10808728/SzS8rjbc"
                target="_blank"
                rel="noopener noreferrer">
                API
              </a>
            </li>
            <li>
              <p>Postman:</p>
              <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
                https://www.postman.com/
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutAPI;
