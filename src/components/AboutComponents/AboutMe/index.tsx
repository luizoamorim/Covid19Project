import React from 'react';
import './styles.css';
import linkedinImage from '../../../assets/images/about/linkedin.svg';

const AboutMe = () => {
  return (
    <div className="about-box">
      <div className="title">
        <h2>Autor</h2>
      </div>
      <div className="author-image">
        <img
          id="img-author"
          alt="author"
          src="https://gitlab.com/uploads/-/system/user/avatar/3843137/avatar.png?width=400"
        />
      </div>
      <div className="author-name">
        <h3>Luiz Henrique</h3>
      </div>
      <div className="text">
        <div className="text-display">
          <ul id="ul-about-me">
            <li>
              <img className="images" id="reactImage" src={linkedinImage} alt="" />
              <p>Linkedin:</p>
              <a
                href="https://www.linkedin.com/in/luiz-henrique-oliveira-amorim-017aa2150/"
                target="_blank"
                rel="noopener noreferrer">
                https://www.linkedin.com/in/luiz-henrique-oliveira-amorim-017aa2150/
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
