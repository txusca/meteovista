import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q');
  console.log(q);
  const key = process.env.NEXT_PUBLIC_GEONAMEKEY;

  try {
    const response = await fetch(
      `http://api.geonames.org/searchJSON?q=${q}&maxRows=5&username=${key}`
    );
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
