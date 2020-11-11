import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';
import coronavirus_chart from '../../assets/images/coronavirus_chart.svg';
import coronavirus_alert from '../../assets/images/coronavirus_alert.svg';
import coronavirus_deaths from '../../assets/images/covid-19.svg';

interface FirstCountryCases {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: Date;
  Premium: {};
}

const ShowFirstCountriesCases = () => {
  const [firstCountryCases, setFirstCountryCases] = useState<FirstCountryCases[]>();

  useEffect(() => {
    axios.get(`https://api.covid19api.com/summary`).then((response) => {
      const firstCountryCasesData = response.data.Countries;
      setFirstCountryCases(firstCountryCasesData);
    });
  }, []);

  return (
    <div id="container-first-countries">
      <div id="box">
        <div id="box-header">
          <h2>Ranking - Países com mais casos</h2>
          <img id="covid" src={coronavirus_chart} alt="" />
        </div>
        <ul>
          {firstCountryCases
            ?.filter((pais) => pais.Country !== 'Macao, SAR China')
            ?.sort((a: FirstCountryCases, b: FirstCountryCases) => {
              return b.TotalConfirmed - a.TotalConfirmed;
            })
            .map((country: FirstCountryCases, index: number) => (
              <div className="lineList">
                <strong>{`${index + 1}º`}</strong>
                <p>{`${country.Country}:`}</p>
                <strong>{country.TotalConfirmed}</strong>
              </div>
            ))}
        </ul>
      </div>
      <div id="box">
        <div id="box-header">
          <h2>Ranking - Países com mais casos HOJE</h2>
          <img id="covid" src={coronavirus_alert} alt="" />
        </div>
        <ul>
          {firstCountryCases
            ?.filter((pais) => pais.Country !== 'Macao, SAR China')
            ?.sort((a: FirstCountryCases, b: FirstCountryCases) => {
              return b.NewConfirmed - a.NewConfirmed;
            })
            .map((country: FirstCountryCases, index: number) => (
              <div className="lineList">
                <strong>{`${index + 1}º`}</strong>
                <p>{`${country.Country}:`}</p>
                <strong>{country.NewConfirmed}</strong>
              </div>
            ))}
        </ul>
      </div>
      <div id="box">
        <div id="box-header">
          <h2>Ranking - Países com mais óbitos HOJE</h2>
          <img id="covid" src={coronavirus_deaths} alt="" />
        </div>
        <ul>
          {firstCountryCases
            ?.filter((pais) => pais.Country !== 'Macao, SAR China')
            ?.sort((a: FirstCountryCases, b: FirstCountryCases) => {
              return b.NewDeaths - a.NewDeaths;
            })
            .map((country: FirstCountryCases, index: number) => (
              <div className="lineList">
                <strong>{`${index + 1}º`}</strong>
                <p>{`${country.Country}:`}</p>
                <strong>{country.NewDeaths}</strong>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ShowFirstCountriesCases;
