// import required modules
// import { Navigation } from 'swiper/modules';
import { cn } from '@/utils/cn';
import Link from 'next/link';

//
export default function HomeSection({
  title,
  to,
  isLoading = false,
  loader,
  className,
  children,
}) {
  return (
    <section className="mb-8">
      <div className="container max-w-5xl flex flex-col gap-2">
        <div className="py-8">
          <h1 className="relative font-bold text-2xl text-center before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-[-10px] before:mx-auto before:w-[120px] before:h-[3px] before:bg-teal-600">
            {title}
          </h1>
        </div>

        {isLoading ? loader : <div>{children}</div>}

        <div className="text-center">
          <Link
            href={to}
            className="inline-block text-center !text-cyan-800 px-4 py-1 rounded-full transition-colors border border-cyan-800 hover:!bg-cyan-800 hover:!text-white"
          >
            Xem thêm
          </Link>
        </div>
      </div>
    </section>
  );
}
