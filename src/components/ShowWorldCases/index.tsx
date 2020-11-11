import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import coronavirus_globe from '../../assets/images/coronavirus_globe.svg';

interface WorldCases {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
}

const ShowWorldCases = () => {
  const [worldCases, setWorldCases] = useState<WorldCases>();

  useEffect(() => {
    axios.get(`https://api.covid19api.com/summary`).then((response) => {
      const worldCasesData = response.data.Global;
      setWorldCases(worldCasesData);
    });
  }, []);

  return (
    <div id="container-world">
      <div id="box">
        <div id="box-header">
          <h2>Covid 19 no mundo</h2>
          <img id="covid" src={coronavirus_globe} alt="" />
        </div>
        <div className="all-informations">
          <div className="box-data">
            <h3>Hoje</h3>
            <div className="data">
              <p>Confirmados:</p>
              <strong>{worldCases?.NewConfirmed}</strong>
            </div>
            <div className="data">
              <p>Recuperados:</p>
              <strong>{worldCases?.NewRecovered}</strong>
            </div>
            <div className="data">
              <p>Óbitos:</p>
              <strong>{worldCases?.NewDeaths}</strong>
            </div>
          </div>
          <div className="box-data">
            <h3>Desde o ínicio</h3>
            <div className="data">
              <p>Confirmados:</p>
              <strong>{worldCases?.TotalConfirmed}</strong>
            </div>
            <div className="data">
              <p>Recuperados:</p>
              <strong>{worldCases?.TotalRecovered}</strong>
            </div>
            <div className="data">
              <p>Óbitos:</p>
              <strong>{worldCases?.TotalDeaths}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowWorldCases;
