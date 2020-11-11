import React from 'react';

interface Label {
  x: string;
  y: string;
  stroke: string;
  value: string;
}

const ChartCustomizedLabel: React.FC<Label> = ({ x, y, stroke, value }) => {
  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

export default ChartCustomizedLabel;
