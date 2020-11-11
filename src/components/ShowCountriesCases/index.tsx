import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import noDataImage from '../../assets/images/noData.svg';

interface Country {
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Lat: string;
  Lon: string;
  Confirmed: string;
  Deaths: string;
  Recovered: string;
  Active: string;
  Date: string;
}

interface Props {
  countrySelected: string;
}

const ShowCountriesCases: React.FC<Props> = ({ countrySelected }) => {
  const [country, setCountry] = useState<Country | null>({
    Country: '',
    CountryCode: '',
    Province: '',
    City: '',
    CityCode: '',
    Lat: '',
    Lon: '',
    Confirmed: '',
    Deaths: '',
    Recovered: '',
    Active: '',
    Date: ''
  });

  useEffect(() => {
    if (countrySelected) {
      axios
        .get<Country[]>(`https://api.covid19api.com/total/dayone/country/${countrySelected}`)
        .then((response) => {
          const countryToday = response.data[response.data.length - 1];
          if (countryToday) {
            setCountry(countryToday);
          } else {
            setCountry(null);
          }
        });
    }
  }, [countrySelected]);

  return (
    <div id="container">
      {countrySelected && country && (
        <div className="component-show-countries">
          <div className="borderBox">
            <h2 className="title" style={{ color: '#6b6b6b' }}>
              Dados atualizados - 2020
            </h2>
            <div className="box">
              <div className="titleBox1" />
              <p>Casos confirmados:</p>
              <strong>{country.Confirmed}</strong>
            </div>
            <div className="box">
              <div className="titleBox2" />
              <p>Nº de pessoas recuperadas:</p>
              <strong>{country.Recovered}</strong>
            </div>
            <div className="box">
              <div className="titleBox3" />
              <p>Números de morte:</p>
              <strong>{country.Deaths}</strong>
            </div>
            <div className="box">
              <div className="titleBox4" />
              <p>Casos em recuperação:</p>
              <strong>
                {parseInt(country.Confirmed, 10) -
                  (parseInt(country.Recovered, 10) + parseInt(country.Deaths, 10))}
              </strong>
            </div>
          </div>
        </div>
      )}

      {countrySelected && !country && (
        <div id="noData-container">
          <h2>
            Não foram encontrados dados para esse país na API. Tente buscar por outro ou tente
            recarregar a página, por favor.
          </h2>
          <img id="noData" src={noDataImage} alt="noData" />
        </div>
      )}
    </div>
  );
};

export default ShowCountriesCases;
