'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Avatar, Button, Dropdown, Input } from 'antd';
import { BsSearch } from 'react-icons/bs';

import Logo from '@/assets/images/tooth-logo.jpg';
import { navRoute } from '../../_configs/nav-route';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { useLogout } from '@/hooks/use-logout';

const Header = () => {
  const { data: profile, isError } = useAuth();
  const { logout } = useLogout();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchValue, setSearchValue] = useState(() => searchParams.get('q'));

  useEffect(() => {
    if (pathname !== '/search') {
      setSearchValue(null);
      return;
    }

    setSearchValue(searchParams.get('q'));
  }, [pathname, searchParams]);

  const searchHandler = (e) => {
    const { keyCode, target } = e;

    if (keyCode === 13) {
      e.preventDefault();

      return router.push(`/search?q=${target.value}`);
    }
  };

  const items = [
    {
      label: 'Đăng xuất',
      key: '0',
      danger: true,
      onClick: logout,
    },
  ];

  return (
    <header className="block sticky top-0 left-0 right-0 z-[999] w-full shadow-md bg-white">
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

          {pathname !== '/' && (
            <div>
              <Input
                prefix={<BsSearch />}
                value={searchValue}
                placeholder="Tìm kiếm chuyên khoa, bác sĩ"
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyUp={searchHandler}
              />
            </div>
          )}

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

          <div className="">
            {!profile?.data || isError ? (
              <Button href="/login" type="primary">
                Đăng nhập
              </Button>
            ) : (
              <div className="flex items-center gap-2 font-semibold">
                <Dropdown menu={{ items }} trigger={['click']}>
                  <Avatar src={profile.data?.avatar?.path} size="default">
                    {profile.data.name.slice(0, 1)}
                  </Avatar>
                </Dropdown>
                <span>{profile.data.name}</span>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
