'use client';

import Typewriter from 'typewriter-effect';
import { BsSearch } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

const textIntro = 'Chào mừng bạn đến với phòng khám nha khoa iTooth!';

const HeaderIntro = () => {
  const router = useRouter();

  const searchHandler = (e) => {
    const { keyCode, target } = e;

    if (keyCode === 13) {
      e.preventDefault();

      router.push(`/search?q=${target.value}`);
    }
  };

  return (
    <section className="block bg-[url('/images/bg-cover.jpg')] bg-center bg-cover h-[400px] overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent backdrop-blur-sm"></div>
      <div className="container relative p-10 flex flex-col justify-center items-center h-full gap-10">
        <h1 className="text-4xl text-white font-bold text-center">
          <Typewriter
            options={{
              strings: textIntro,
              autoStart: true,
              delay: 100,
              loop: true,
            }}
          />
        </h1>

        <div className="flex items-center gap-2.5 rounded-full bg-white text-slate-500 px-6 py-3">
          <span>
            <BsSearch className="text-lg" />
          </span>
          <input
            className=" border-none bg-transparent appearance-none w-[500px] focus:outline-none text-lg"
            placeholder="Tìm chuyên khoa hoặc bác sĩ"
            onKeyUp={searchHandler}
          />
        </div>
      </div>
    </section>
  );
};
// anh doi em ti
export default HeaderIntro;
