import React from 'react';
import AboutMe from '../../components/AboutComponents/AboutMe';
import AboutAPI from '../../components/AboutComponents/AboutAPI';
import AboutDataViz from '../../components/AboutComponents/AboutDataViz';
import './styles.css';

const About = () => {
  return (
    <div id="page-about">
      <main>
        <AboutDataViz />
        <AboutAPI />
        <AboutMe />
      </main>
    </div>
  );
};

export default About;
