import React, { FC, useState } from 'react';
import { ICurrency, IStops, StopsFilter } from '../types/form';
import { formatStopsLabel } from '../helpers/formatStopsLabel';

interface FilterProps {
  setFilters: (arg1: StopsFilter) => void;
}
const Currencies: ICurrency[] = ['USD', 'EUR', 'RUB'];
const variants = [
  { key: 'all', label: 'Все' },
  { key: 'nonStop', label: 'Без пересадок' },
  { stops: 1, key: 'oneStop', label: '1' },
  { stops: 2, key: 'twoStops', label: '2' },
  { stops: 3, key: 'threeStops', label: '3' },
];

const stopsFilterInitialState: StopsFilter = {
  all: {
    value: Infinity,
    checked: false,
  },
  nonStop: {
    value: 0,
    checked: false,
  },
  oneStop: {
    value: 1,
    checked: false,
  },
  twoStops: {
    value: 2,
    checked: false,
  },
  threeStops: {
    value: 3,
    checked: false,
  },
};
export const FilterForm: FC<FilterProps> = ({ setFilters }) => {
  const [stopsFilter, setStopsFilter] = useState(stopsFilterInitialState);
  const [currencyFilter, setCurrencyFilter] = useState<ICurrency>('none');

  const handleStopsChange = (key: IStops) => {
    const newStopsFilter = { ...stopsFilter };
    newStopsFilter[key].checked = !newStopsFilter[key].checked;
    setStopsFilter(newStopsFilter);
    setFilters(newStopsFilter);
  };
  const handleCurrencyChange = (currency: ICurrency) => {
    setCurrencyFilter(currency);
  };
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 h-[60%] my-5">
      <h2 className="text-xl mb-4">Фильтр</h2>
      <div>
        <h3>По валюте:</h3>
        {Currencies.map((currency, index) => (
          <button
            key={currency}
            onClick={() => handleCurrencyChange(currency)}
            className={`border px-4 py-2  transition hover:bg-blue-500 hover:border-blue-500 hover:text-white ${
              currencyFilter === currency
                ? 'bg-blue-500 text-white'
                : 'text-blue-500'
            } ${
              index === 0
                ? 'rounded-l-md'
                : index === Currencies.length - 1
                ? 'rounded-r-md'
                : 'rounded-none'
            }`}
          >
            {currency}
          </button>
        ))}
      </div>
      <div>
        <h3 className="mb-2">По количеству пересадок:</h3>
        {variants.map((variant) => (
          <label
            key={variant.key}
            className="flex items-center mb-1 hover:bg-[rgb(59,130,246,0.1)]"
          >
            <input
              type="checkbox"
              checked={stopsFilter[variant.key].checked}
              onChange={() => handleStopsChange(variant.key as IStops)}
              className="mr-2"
            />
            {variant.label} {variant.stops && formatStopsLabel(variant.stops)}
          </label>
        ))}
      </div>
    </div>
  );
};
