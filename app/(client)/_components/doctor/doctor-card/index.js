import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { cn } from '@/utils/cn';

const DoctorCard = ({ className, doctor }) => {
  const { _id, name, description, address } = doctor;

  return (
    <Link
      href={`/doctor/${_id}`}
      className={cn(
        'relative p-4 !bg-white flex flex-col justify-center items-center gap-2 transition-colors !text-slate-700 hover:!text-slate-500 oveflow-hidden',
        className,
      )}
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

      <h3 className="font-semibold text-lg">Bác sĩ {name}</h3>

      <p className="text-slate-700">
        Ai bị các vấn đề về răng cứ đến gặp tôi, tôi đấm cho gãy luôn. Đảm bảo
        uy tín!
      </p>

      <div className="flex items-center w-full gap-1 font-semibold text-sm text-left">
        <span>
          <HiOutlineLocationMarker />
        </span>
        <span>{address}</span>
      </div>
    </Link>
  );
};

export default DoctorCard;
