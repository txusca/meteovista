/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

// import type { Current } from '@/types/Current';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import ErroMessage from './ErroMensage';

export default function CitySelect(props: any) {
  const [cidade, setCidade] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const key = process.env.NEXT_PUBLIC_APIKEY;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        async function fetchDataLatLon(latitude: number, longitude: number) {
          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
            );
            const data = await response.json();
            props.setCurrent(data);
          } catch (error) {
            console.log(error);
          }
        }
        fetchDataLatLon(latitude, longitude);
      });
    }
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`
      );
      if (!response.ok) {
        if (response.status === 404) {
          setErrorMessage('Cidade não encontrada!');
          return;
        }
        throw new Error('Cidade não encontrada!');
      }
      const data = await response.json();
      props.setCurrent(data);
      setErrorMessage('');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchDataOthersDay() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${key}`
      );
      if (!response.ok) {
        if (response.status === 404) {
          setErrorMessage('Cidade não encontrada!');
          return;
        }
        throw new Error('Cidade não encontrada!');
      }
      const data = await response.json();
      const today = new Date();
      const dates = [
        today.toISOString().split('T')[0],
        new Date(today.setDate(today.getDate() + 1))
          .toISOString()
          .split('T')[0],
        new Date(today.setDate(today.getDate() + 1))
          .toISOString()
          .split('T')[0],
      ];

      const filteredData = dates.map((date) =>
        data.list.find((item: any) => item.dt_txt.startsWith(date))
      );

      console.log(filteredData);
      props.setForecast(data);
      props.setForecastList(filteredData);
      setErrorMessage('');
      // props.setCurrent(filteredData);
    } catch (error) {
      console.log(error);
    }
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
            fetchDataOthersDay();
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
        {errorMessage && <ErroMessage errorMessage={errorMessage} />}
      </div>
    </div>
  );
}
