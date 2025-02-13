import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_APIKEY: process.env.NEXT_PUBLIC_APIKEY,
  },
};

export default nextConfig;
