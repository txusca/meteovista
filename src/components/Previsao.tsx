import type { Current } from '@/types/Current';
import type { ListForecast } from '@/types/Forecast';
import { useEffect, useState } from 'react';
import Card from './Card';

type PrevisaoProps = {
  location?: { latitude: number; longitude: number };
};

export default function Previsao(props: PrevisaoProps) {
  const key = process.env.NEXT_PUBLIC_APIKEY;
  const [current, setCurrent] = useState<Current>();
  const [forecastList, setForecastList] = useState<ListForecast[]>([]);
  const { latitude, longitude } = props.location || {};
  useEffect(() => {
    async function fetchCurrentWeather() {
      try {
        const response = await fetch(
          `/api/meteovista/current?lat=${latitude}&lon=${longitude}`
        );
        const data = await response.json();
        setCurrent(data);
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchForecast() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=3&appid=${key}`
        );
        const data = await response.json();
        setForecastList(data.list);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCurrentWeather();
    fetchForecast();
  }, [key, latitude, longitude, props.location]);

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Previsão para os Próximos Dias {current?.name && `em ${current.name}`}
        </h2>

        <div className="grid grid-cols-1 mb-4">
          <Card
            day="Agora"
            temp={Math.floor((current?.main.temp ?? 0) - 273.15)}
            description={current?.weather[0].description}
            min={Math.floor((current?.main.temp_min ?? 0) - 273.15)}
            max={Math.floor((current?.main.temp_max ?? 0) - 273.15)}
          />
        </div>

        <div className="grid justify-center items-center grid-cols-1 md:grid-cols-3 gap-8">
          {Array.isArray(forecastList) &&
            forecastList.map((day, index) => (
              <Card
                key={day.dt}
                day={
                  index === 0
                    ? 'Hoje'
                    : index === 1
                    ? 'Amanhã'
                    : 'Depois de amanhã'
                }
                // temp={Math.floor(day.main.temp - 273.15)}
                // description={day.weather[0].description}
                min={Math.floor((day?.temp.min ?? 0) - 273.15)}
                max={Math.floor((day?.temp.max ?? 0) - 273.15)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
