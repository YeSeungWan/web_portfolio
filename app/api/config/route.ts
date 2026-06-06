
import { NextResponse } from 'next/server';

export async function GET() {
  const config = {
    API_URL: process.env.NEXT_PUBLIC_API_URL || '',
    PROFILE_IMAGE: process.env.NEXT_PUBLIC_MY_PROFILE_IMAGE || '',
    PORTPORT_FRONT_SRC_URL: process.env.NEXT_PUBLIC_MY_PORTFOLIO_FRONT_ADDR,
    PORTPORT_BACK_SRC_URL: process.env.NEXT_PUBLIC_MY_PORTFOLIO_BACK_ADDR,
  };

  return NextResponse.json(config);
}
