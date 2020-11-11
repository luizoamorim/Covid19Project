import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, Legend, Bar, BarChart } from 'recharts';
import './styles.css';

interface Collection {
  collection: {
    labelX: string;
    confirmados: number;
    recuperados: number;
    mortes: number;
  }[];
}

const Charts: React.FC<Collection> = ({ collection }) => {
  return (
    <div>
      <div id="container-chart">
        <div id="component-chart">
          {window.innerWidth >= 1100 && (
            <LineChart width={500} height={250} data={collection}>
              <Line
                type="monotone"
                dataKey="confirmados"
                stroke="#f4d03f"
                strokeWidth={3}
                name="Confirmados"
              />
              <Line
                type="monotone"
                dataKey="recuperados"
                stroke="#2ecc71"
                strokeWidth={3}
                name="Recuperados"
              />
              <Line
                type="monotone"
                dataKey="mortes"
                stroke="#e74c3c"
                strokeWidth={3}
                name="Mortes"
              />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="labelX" />
              <Tooltip />
            </LineChart>
          )}
          {window.innerWidth <= 1100 && (
            <BarChart
              width={300}
              height={200}
              data={collection}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="labelX" />

              <Tooltip />
              <Legend />
              <Bar dataKey="confirmados" stackId="a" fill="#f1c40f" />
              <Bar dataKey="recuperados" stackId="a" fill="#2ecc71" />
              <Bar dataKey="mortes" stackId="a" fill="#e74c3c" />
            </BarChart>
          )}
        </div>
      </div>
    </div>
  );
};

export default Charts;
