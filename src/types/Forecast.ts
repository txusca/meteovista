export interface Coord {
  lon: number;
  lat: number;
}

export interface City {
  coord: Coord;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Clouds {
  all: number;
}

// Parte do dia
export interface Sys {
  pod: string;
}

export interface ListForecast {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: Temp;
  feels_like: Feelslike;
  pressure: number;
  humidity: number;
  weather: Weather[];
  speed: number;
  deg: number;
  gust: number;
  clouds: number;
  pop: number;
  rain: number;
}

export interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

interface Feelslike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Forecast {
  city: City;
  cnt: number;
  cod: string;
  list: Array<ListForecast>;
  message: string;
}
