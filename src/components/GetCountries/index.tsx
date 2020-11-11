import React, { useEffect, useState, SetStateAction, Dispatch } from 'react';
import axios from 'axios';
import Select from 'react-select';
import './styles.css';

interface SelectProp {
  setOption: Dispatch<SetStateAction<{ value: string; label: string }>>;
}

interface Option {
  value: string;
  label: string;
}

interface Paises {
  Country: string;
  Slug: string;
  ISO2: string;
}
const GetCountries: React.FC<SelectProp> = ({ setOption }) => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    axios.get<Paises[]>('https://api.covid19api.com/countries').then((response) => {
      const paises = response.data
        .filter((pais) => pais.ISO2 !== 'MO')
        .map((pais) => ({
          value: pais.Slug,
          label: pais.Country
        }));
      setOptions(paises);
    });
  }, []);

  return (
    <div className="container">
      <div className="component-busca">
        <h2>Buscar por outro país</h2>
        <Select
          className="form-field-name"
          options={options}
          onChange={(opt) => setOption(opt as Option)}
        />
      </div>
    </div>
  );
};

export default GetCountries;
