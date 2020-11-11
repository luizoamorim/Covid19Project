import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import axios from 'axios';
import { parseISO } from 'date-fns';
import './styles.css';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }
];

const COLORS = ['#2ecc71', '#e74c3c', '#3498db'];

interface Props {
  countrySelected: string;
}

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

interface ProportionalCases {
  name: string;
  value: number;
}

const SimplePieChart: React.FC<Props> = ({ countrySelected }) => {
  const [country, setCountry] = useState<Country | null>(null);
  const [proportionalCases, setProportionalCases] = useState<ProportionalCases[]>([]);

  const proportionalCalc = (value: number, countryValues: Country): number => {
    if (countryValues) {
      return parseFloat(((value / parseInt(countryValues.Confirmed, 10)) * 100).toFixed(2));
    }
    return 0;
  };

  useEffect(() => {
    if (countrySelected) {
      axios
        .get<Country[]>(`https://api.covid19api.com/total/dayone/country/${countrySelected}`)
        .then((response) => {
          const countryToday = response.data.find((countryData) => {
            const d = new Date();
            return (
              parseISO(countryData.Date).getMonth() === d.getMonth() &&
              parseISO(countryData.Date).getDate() === d.getDate() - 3
            );
          });
          if (countryToday) {
            setCountry(countryToday);
            setProportionalCases([
              {
                name: 'Recuperados',
                value: proportionalCalc(parseInt(countryToday.Recovered, 10), countryToday)
              },
              {
                name: 'Mortos',
                value: proportionalCalc(parseInt(countryToday.Deaths, 10), countryToday)
              },
              {
                name: 'Em recuperação',
                value: parseFloat(
                  (
                    100 -
                    (proportionalCalc(parseInt(countryToday.Recovered, 10), countryToday) +
                      proportionalCalc(parseInt(countryToday.Deaths, 10), countryToday))
                  ).toFixed(2)
                )
              }
            ]);
          } else {
            setCountry(null);
            setProportionalCases([]);
          }
        });
    }
  }, [countrySelected]);
  return (
    <div id="component-pie">
      {countrySelected && country && (
        <div className="lineChart-pie">
          <h2>Proporção %</h2>
          <PieChart width={300} height={400}>
            <Pie
              data={proportionalCases}
              cx={150}
              cy={150}
              labelLine
              outerRadius={90}
              fill="#f4d03f"
              dataKey="value"
              label>
              {data01.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      )}
    </div>
  );
};

export default SimplePieChart;
