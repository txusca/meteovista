'use client';

import CitySelect from '@/components/CitySelect';
import { useState } from 'react';
import { Current } from '@/types/Current'; // Import the new type

export default function Home() {
  const [current, setCurrent] = useState<Current>(); // Use the new type
  return (
    <div>
      <CitySelect setCurrent={setCurrent} />
      <div>
        <p>Cidade: {current?.name}</p>
        <p>Temperatura: {current?.main.temp} TA EM KELVIN AINDA</p>
        <p>{current?.weather[0].description}</p>
      </div>
    </div>
  );
}
