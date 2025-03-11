import { NextResponse, type NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const latitude = req.nextUrl.searchParams.get('lat');
  const longitude = req.nextUrl.searchParams.get('lon');

  const key = process.env.NEXT_PUBLIC_APIKEY;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
    );
    const data = await response.json();
    return NextResponse.json(data, {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
