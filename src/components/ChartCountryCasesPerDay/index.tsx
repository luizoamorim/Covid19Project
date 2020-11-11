import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parseISO } from 'date-fns';
import Charts from '../Charts';
import './styles.css';

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

interface ChartData {
  labelX: string;
  confirmados: number;
  recuperados: number;
  mortes: number;
}

const ChartCountryCasesPerDay: React.FC<Props> = ({ countrySelected }) => {
  const [chartDatas, setChartDatas] = useState<ChartData[]>([]);
  const [responseApi, setResponseApi] = useState<Country[] | null>(null);
  useEffect(() => {
    if (countrySelected) {
      axios
        .get<Country[]>(`https://api.covid19api.com/total/dayone/country/${countrySelected}`)
        .then((response) => {
          if (response.data.length > 0) {
            setResponseApi(response.data);
            const cases = response.data
              .reduce(
                (total, case_, index, arrayOriginal) => {
                  if (
                    parseISO(case_.Date).getMonth() !==
                    parseISO(total[total.length - 1].Date).getMonth()
                  ) {
                    total.push({
                      Country: '',
                      CountryCode: '',
                      Province: '',
                      City: '',
                      CityCode: '',
                      Lat: '',
                      Lon: '',
                      Confirmed: '0',
                      Deaths: '0',
                      Recovered: '0',
                      Active: '',
                      Date: case_.Date
                    });
                  } else if (arrayOriginal[index - 1]) {
                    // Confirmed cases
                    total[total.length - 1].Confirmed = (
                      parseInt(total[total.length - 1].Confirmed, 10) +
                      (parseInt(case_.Confirmed, 10) -
                        parseInt(arrayOriginal[index - 1].Confirmed, 10))
                    ).toString();

                    // Recoverd cases
                    total[total.length - 1].Recovered = (
                      parseInt(total[total.length - 1].Recovered, 10) +
                      (parseInt(case_.Recovered, 10) -
                        parseInt(arrayOriginal[index - 1].Recovered, 10))
                    ).toString();

                    // Deaths cases
                    total[total.length - 1].Deaths = (
                      parseInt(total[total.length - 1].Deaths, 10) +
                      (parseInt(case_.Deaths, 10) - parseInt(arrayOriginal[index - 1].Deaths, 10))
                    ).toString();
                  }
                  return total;
                },
                [
                  {
                    Country: '',
                    CountryCode: '',
                    Province: '',
                    City: '',
                    CityCode: '',
                    Lat: '',
                    Lon: '',
                    Confirmed: '0',
                    Deaths: '0',
                    Recovered: '0',
                    Active: '',
                    Date: '2020-01-20T00:00:00Z'
                  }
                ]
              )
              .map((case_) => ({
                labelX:
                  parseISO(case_.Date).getMonth() === 0
                    ? 'JAN'
                    : parseISO(case_.Date).getMonth() === 1
                    ? 'FEV'
                    : parseISO(case_.Date).getMonth() === 2
                    ? 'MAR'
                    : parseISO(case_.Date).getMonth() === 3
                    ? 'ABR'
                    : parseISO(case_.Date).getMonth() === 4
                    ? 'MAI'
                    : parseISO(case_.Date).getMonth() === 5
                    ? 'JUN'
                    : parseISO(case_.Date).getMonth() === 6
                    ? 'JUL'
                    : parseISO(case_.Date).getMonth() === 7
                    ? 'AGO'
                    : parseISO(case_.Date).getMonth() === 8
                    ? 'SET'
                    : parseISO(case_.Date).getMonth() === 9
                    ? 'OUT'
                    : parseISO(case_.Date).getMonth() === 10
                    ? 'NOV'
                    : 'DEZ',
                confirmados: parseInt(case_.Confirmed, 10),
                recuperados: parseInt(case_.Recovered, 10),
                mortes: parseInt(case_.Deaths, 10)
              }));
            setChartDatas(cases);
          } else {
            setResponseApi(null);
          }
        });
    }
  }, [countrySelected]);
  return (
    <div>
      {countrySelected && responseApi && (
        <div id="component">
          <div className="lineChart">
            <h2>Dados por mês</h2>
            <Charts collection={chartDatas} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChartCountryCasesPerDay;
