'use client';

import CitySelect from '@/components/CitySelect';
import { useState } from 'react';
import { Current } from '@/types/Current'; // Import the new type
import Header from '@/components/Header';
import Previsao from '@/components/Previsao';

export default function Home() {
  const [current, setCurrent] = useState<Current>(); // Use the new type
  return (
    <div>
      <Header />
      <CitySelect setCurrent={setCurrent} />
      <Previsao />
      <div>
        <p>Cidade: {current?.name}</p>
        <p>Temperatura: {current?.main.temp} TA EM KELVIN AINDA</p>
        <p>{current?.weather[0].description}</p>
      </div>
    </div>
  );
}
