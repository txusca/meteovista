import { Cloud } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-sky-500 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href={'/'} className="flex items-center ">
          <Cloud size={32} className="" />
          <span className="text-2xl ml-2 font-bold">MeteoVista</span>
        </Link>
        <nav className="">
          <ul className=" hidden md:flex">
            <li>
              <Link href={'#'} className="hover:underline mr-4">
                Previsão
              </Link>
              <Link href={'#'} className="hover:underline mr-4">
                Mapas
              </Link>
              <Link href={'#'} className="hover:underline mr-4">
                Notícias
              </Link>
              <Link href={'#'} className="hover:underline ">
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
