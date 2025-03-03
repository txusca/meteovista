'use client';

import CitySelect from '@/components/CitySelect';
import Header from '@/components/Header';
import Previsao from '@/components/Previsao';
import { useState } from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

export default function Home() {
  const [location, setLocation] = useState<Location>();
  return (
    <div>
      <Header />
      <CitySelect location={location} setLocation={setLocation} />
      {location && <Previsao location={location} />}
    </div>
  );
}
