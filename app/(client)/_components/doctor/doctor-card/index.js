import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { cn } from '@/utils/cn';
import { Avatar } from 'antd';

const DoctorCard = ({ className, doctor }) => {
  const { _id, name, avatar, bio, address, specialist } = doctor;

  return (
    <Link
      href={`/doctor/${_id}`}
      className={cn(
        'relative h-full p-4 !bg-white flex flex-col justify-center items-center gap-2 transition-colors !text-slate-700 hover:!text-slate-500 overflow-hidden',
        className,
      )}
    >
      <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
        <Image
          src={avatar.path}
          alt="Doctor Image"
          fill={false}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover bg-center bg-no-repeat"
        />
      </div>

      <h3 className="font-semibold text-lg">Bác sĩ {name}</h3>

      <p className="text-slate-700 line-clamp-3">{bio}</p>

      {specialist && !!specialist.length && (
        <div className="w-full gap-1 font-semibold text-sm text-left">
          {specialist.map((item) => (
            <div
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-gray-200 p-1.5"
              key={item._id}
            >
              <Avatar src={item.avatar.path} size={20} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </Link>
  );
};

export default DoctorCard;
