'use client';

// import type { Current } from '@/types/Current';
import { Search } from 'lucide-react';
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import ErroMessage from './ErroMessage';

interface Location {
  latitude: number;
  longitude: number;
}

interface CitySelectProps {
  location: Location | undefined;
  setLocation: Dispatch<SetStateAction<Location | undefined>>;
  // setLocation: (location: Location) => void;
}

interface Cidade {
  geonameId: number;
  name: string;
  countryName: string;
}

export default function CitySelect({ setLocation }: CitySelectProps) {
  const [cidade, setCidade] = useState('');
  const [result, setResult] = useState<Cidade[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const key = process.env.NEXT_PUBLIC_APIKEY;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  async function handleLocation() {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=1&appid=${key}`
      );
      if (!response.ok) {
        if (response.status === 404) {
          setErrorMessage('Erro ao buscar localização');
          return;
        }
      }
      const data = await response.json();
      const { lat, lon } = data[0];
      setLocation({ latitude: lat, longitude: lon });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleChange(e: React.FormEvent) {
    const value = (e.target as HTMLInputElement).value;
    setCidade(value);
    if (value.length > 2) {
      const response = await fetch(`/api/geonames?q=${value}`);
      const data = await response.json();
      const resultadoUnico = filtrarDuplicatas(data.geonames);
      setResult(resultadoUnico);
    } else {
      setResult([]);
    }
  }

  function handleCidadeSelecionada(cidade: Cidade) {
    setCidade(`${cidade.name}, ${cidade.countryName}`);
    setResult([]);
  }

  function filtrarDuplicatas(cidades: Cidade[]) {
    const set = new Set();
    return cidades.filter((cidade) => {
      const nome = `${cidade.name}, ${cidade.countryName}`;
      if (!set.has(nome)) {
        set.add(nome);
        return true;
      }
      return false;
    });
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
            handleLocation();
          }}
        >
          <input
            type="text"
            onChange={handleChange}
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
        {result.length > 2 && (
          <ul className="bg-white rounded-md py-1 pl-3">
            {result.map((cidade: Cidade) => (
              <li
                key={cidade.geonameId}
                onClick={() => handleCidadeSelecionada(cidade)}
                className="cursor-pointer hover:bg-sky-50 py-2"
              >
                {cidade.name}, {cidade.countryName}
              </li>
            ))}
          </ul>
        )}
        {errorMessage && <ErroMessage errorMessage={errorMessage} />}
      </div>
    </div>
  );
}
