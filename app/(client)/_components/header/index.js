import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/tooth-logo.jpg';
import { navRoute } from '../../_configs/nav-route';

const Header = () => {
  return (
    <header className="block sticky top-0 left-0 right-0 z-[9999] w-full shadow-md bg-white">
      <nav className="container">
        <div className="flex items-center w-full h-[60px]">
          <Link
            href="/"
            className="overflow-hidden max-w-[150px] h-full flex items-center justify-center gap-2"
          >
            <Image src={Logo} alt="iTooth" width={55} height={55} />
            <span className="inline-block font-extrabold text-transparent text-lg leading-tight bg-clip-text bg-gradient-to-br from-cyan-400 to-cyan-800">
              <small>Nha khoa</small> iTooth
            </span>
          </Link>

          <ul className="flex-1 flex items-center justify-center gap-8">
            {navRoute.map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.pathname}
                  className="leading-[60px] inline-flex items-center flex-row font-semibold text-base gap-2 transition-colors !text-slate-700 hover:!text-slate-500"
                >
                  {nav.icon}
                  <span>{nav.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
