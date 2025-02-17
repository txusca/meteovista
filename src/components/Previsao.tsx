import type { Current } from '@/types/Current';
import Card from './Card';
import type { Forecast, List } from '@/types/Forecast';

type PrevisaoProps = {
  current?: Current;
  forecast?: Forecast;
  forecastList?: List[];
};

export default function Previsao(props: PrevisaoProps) {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Previsão para os Próximos Dias{' '}
          {props.current?.name && `em ${props.current.name}`}
        </h2>

        <div className="grid grid-cols-1 mb-4">
          <Card
            day="Agora"
            temp={Math.ceil((props.current?.main.temp ?? 0) - 273.15)}
            description={props.current?.weather[0].description}
            min={Math.ceil((props.current?.main.temp_min ?? 0) - 273.15)}
            max={Math.ceil((props.current?.main.temp_max ?? 0) - 273.15)}
          />
        </div>

        <div className="grid justify-center items-center grid-cols-1 md:grid-cols-3 gap-8">
          {Array.isArray(props.forecastList) &&
            props.forecastList.map((day, index) => (
              <Card
                key={day.dt}
                day={
                  index === 0
                    ? 'Hoje'
                    : index === 1
                    ? 'Amanhã'
                    : 'Depois de amanhã'
                }
                temp={Math.ceil(day.main.temp - 273.15)}
                description={day.weather[0].description}
                min={Math.ceil((day?.main.temp_min ?? 0) - 273.15)}
                max={Math.ceil((day?.main.temp_max ?? 0) - 273.15)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
