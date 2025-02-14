import Card from './Card';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Previsao(props: any) {
  const tempNow = Math.ceil(props.current?.main.temp - 273.15);
  const teste = props.current?.weather[0].description;
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Previsão para os Próximos Dias{' '}
          {props.current?.name && `em ${props.current.name}`}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card day="Hoje" temp={tempNow} description={teste} />
          <Card day="Hoje" temp={tempNow} description={teste} />
          <Card day="Hoje" temp={tempNow} description={teste} />
        </div>
      </div>
    </div>
  );
}
