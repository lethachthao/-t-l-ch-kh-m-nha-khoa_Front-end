import Image from 'next/image';
import Link from 'next/link';

export default function MedicalSpecialtyCard({ id, name, imageUrl }) {
  return (
    <Link
      href={`/chuyen-khoa/${id}`}
      className="flex flex-col text-center gap-2 transition-colors !text-slate-700 hover:!text-slate-500"
    >
      <div className="relative w-full h-[180px] rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill={false}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover bg-center"
        />
      </div>

      <h3 className="text-base font-semibold">{name}</h3>
    </Link>
  );
}
