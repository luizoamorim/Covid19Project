import React, { useState } from 'react';
import './styles.css';
import GetCountries from '../../components/GetCountries';
import ShowCountriesCases from '../../components/ShowCountriesCases';
import ChartCountryCasesPerDay from '../../components/ChartCountryCasesPerDay';
import SimplePieChart from '../../components/SimplePieChart';
import ShowWorldCases from '../../components/ShowWorldCases';
import ShowFirstCountriesCases from '../../components/ShowFirstCountriesCases';

const Home = () => {
  const [option, setOption] = useState({ value: 'brazil', label: 'Brazil' });

  return (
    <div id="page-home">
      <main>
        <GetCountries setOption={setOption} />
        {option.value && (
          <div>
            <div className="country-title">
              <h2>{option.label}</h2>
            </div>
            <div id="presentation">
              <ShowCountriesCases countrySelected={option.value} />
              <SimplePieChart countrySelected={option.value} />
              <ChartCountryCasesPerDay countrySelected={option.value} />
            </div>
          </div>
        )}
        <div id="footer-presentation">
          <ShowWorldCases />
          <ShowFirstCountriesCases />
        </div>
      </main>
    </div>
  );
};

export default Home;
