import Image from 'next/image';
import Link from 'next/link';

const DoctorCard = () => {
  return (
    <Link
      href="/"
      className="relative p-4 bg-white flex flex-col justify-center items-center transition-colors !text-slate-700 hover:!text-slate-500"
    >
      <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
        <Image
          src="https://i.pinimg.com/736x/f0/44/a6/f044a6812c8d9d09761d9dc7f6116ced.jpg"
          alt="Doctor Image"
          fill={false}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover bg-center bg-no-repeat"
        />
      </div>

      <h3 className="font-semibold text-base py-2">Bác sĩ 1</h3>

      <p>
        Ai bị các vấn đề về răng cứ đến gặp tôi, tôi đấm cho gãy luôn. Đảm bảo
        uy tín!
      </p>
    </Link>
  );
};

export default DoctorCard;
