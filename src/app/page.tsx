'use client';

import CitySelect from '@/components/CitySelect';
import { useState } from 'react';
import { Current } from '@/types/Current'; // Import the new type
import Header from '@/components/Header';
import Previsao from '@/components/Previsao';
import type { Forecast, List } from '@/types/Forecast';

export default function Home() {
  const [current, setCurrent] = useState<Current>();
  const [forecastList, setForecastList] = useState<List[]>();
  const [forecast, setForecast] = useState<Forecast>();
  return (
    <div>
      <Header />
      <CitySelect
        setCurrent={setCurrent}
        setForecastList={setForecastList}
        setForecast={setForecast}
      />
      {current && (
        <Previsao
          current={current}
          forecast={forecast}
          forecastList={forecastList}
        />
      )}
    </div>
  );
}
