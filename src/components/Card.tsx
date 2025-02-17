import { Cloud } from 'lucide-react';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Card(props: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold mb-2">{props.day}</h3>
      <p className="">Minima: {props.min}</p>
      <p className="">Máxima: {props.max}</p>
      <div className="mb-2 text-sky-500">
        <Cloud size={24} />
      </div>
      {typeof props.temp === 'number' && !isNaN(props.temp) && (
        <p className="mb-2 text-3xl font-bold">{props.temp}</p>
      )}
      <p className="text-gray-600">{translateDescription(props.description)}</p>
    </div>
  );
}
