import { NextResponse, type NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const cidade = req.nextUrl.searchParams.get('q');

  const key = process.env.NEXT_PUBLIC_APIKEY;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=1&appid=${key}`
    );
    if (response.status === 404) {
      return NextResponse.json(
        { message: 'Erro ao buscar localização' },
        { status: 404 }
      );
    }
    const data = await response.json();
    if (data.length === 0) {
      return NextResponse.json(
        { message: 'Cidade não encontrada' },
        { status: 404 }
      );
    }
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
