'use client';

// import type { Current } from '@/types/Current';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

// type CitySelectType = {
//   current?: Current;
//   setCurrent: React.Dispatch<React.SetStateAction<Current>>;
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CitySelect(props: any) {
  const [cidade, setCidade] = useState('');

  const key = process.env.NEXT_PUBLIC_APIKEY;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        async function fetchDataLatLon(latitude: number, longitude: number) {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
          );
          const data = await response.json();
          props.setCurrent(data);
        }
        fetchDataLatLon(latitude, longitude);
      });
    }
  }, []);

  async function fetchData() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`
    );
    const data = await response.json();
    props.setCurrent(data);
    console.log(data);
  }

  return (
    <div className="bg-gradient-to-r from-sky-400 to-blue-500 flex flex-col justify-center items-center py-40">
      <h1 className="text-6xl text-white font-bold mb-4 text-center">
        Previsão do Tempo Precisa e Confiável
      </h1>
      <p className="text-xl text-white mb-8 text-center">
        Fique por dentro das condições meteorológicas em tempo real
      </p>
      <div className="">
        <form
          className="flex mx-auto max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
            fetchData();
          }}
        >
          <input
            type="text"
            onChange={(e) => setCidade(e.target.value)}
            value={cidade}
            placeholder="Digite sua localização"
            className="rounded px-3 py-2 flex-grow md:w-[304px]"
          />
          <button
            type="submit"
            className="ml-2 bg-[#181818] text-white px-4 py-2 flex rounded"
          >
            <Search className="mr-2" />
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}
