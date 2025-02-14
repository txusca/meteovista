import { Cloud } from 'lucide-react';

export default function Card(props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold mb-2">{props.day}</h3>
      <div className="mb-2 text-sky-500">
        <Cloud size={24} />
      </div>
      {typeof props.temp === 'number' && !isNaN(props.temp) && (
        <p className="mb-2 text-3xl font-bold">{props.temp}</p>
      )}
      <p className="text-gray-600">{props.description}</p>
    </div>
  );
}
