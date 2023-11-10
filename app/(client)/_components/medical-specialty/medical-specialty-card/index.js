import Image from 'next/image';
import Link from 'next/link';

export default function MedicalSpecialtyCard() {
  return (
    <Link
      href="/"
      className="flex flex-col text-center gap-2 transition-colors !text-slate-700 hover:!text-slate-500"
    >
      <div className="relative w-full h-[180px] rounded-lg overflow-hidden">
        <Image
          src="https://i.pinimg.com/736x/a6/be/8b/a6be8b9a79fcbabeea67021d37d74611.jpg"
          alt="Chuyên khoa"
          fill={false}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover bg-center"
        />
      </div>

      <h3 className="text-base font-semibold">Nha khoa</h3>
    </Link>
  );
}
