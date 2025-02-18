import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  CloudSunRain,
  Cloudy,
  Sun,
} from 'lucide-react';

const translateDescription = (description: string) => {
  const translations: { [key: string]: string } = {
    'clear sky': 'Céu limpo',
    'few clouds': 'Poucas nuvens',
    'scattered clouds': 'Nuvens dispersas',
    'broken clouds': 'Nuvens quebradas',
    'shower rain': 'Chuva de banho',
    rain: 'Chuva',
    thunderstorm: 'Trovoada',
    snow: 'Neve',
    mist: 'Névoa',
  };
  return translations[description] || description;
};

const icons = (description: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    'Céu limpo': <Sun size={24} />,
    'Poucas nuvens': <CloudSun size={24} />,
    'Nuvens dispersas': <Cloud size={24} />,
    'Nuvens quebradas': <Cloudy size={24} />,
    'Chuva de banho': <CloudSunRain size={24} />,
    Chuva: <CloudRain size={24} />,
    Trovoada: <CloudLightning size={24} />,
    Neve: <CloudSnow size={24} />,
    Névoa: <CloudFog size={24} />,
  };
  return icons[description] || description;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Card(props: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold mb-2">{props.day}</h3>
      {props.day !== 'Agora' && (
        <>
          <p className="text-xl">Minima: {props.min}</p>
          <p className="text-xl">Máxima: {props.max}</p>
        </>
      )}
      <div className="mb-2 text-sky-500">
        {icons(translateDescription(props.description))}
      </div>
      {props.day === 'Agora' && (
        <>
          {typeof props.temp === 'number' && !isNaN(props.temp) && (
            <p className="mb-2 text-3xl font-bold">{props.temp}</p>
          )}
          <p className="text-gray-600">
            {translateDescription(props.description)}
          </p>
        </>
      )}
    </div>
  );
}
