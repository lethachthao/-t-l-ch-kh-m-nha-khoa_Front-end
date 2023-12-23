import { Avatar, Skeleton } from 'antd';
import moment from 'moment';
import Link from 'next/link';

const BookingList = ({ loading, bookings }) => {
  if (loading) return <Skeleton />;

  if (!bookings || !bookings.length) return <div>Không có đơn đặt nào</div>;

  return (
    <div className="">
      {bookings.map((booking) => (
        <Link
          href={`/my-bookings/${booking._id}`}
          key={booking._id}
          className="flex gap-2 items-center -mx-2 px-2 py-2 rounded-lg !text-black hover:bg-gray-200"
        >
          <Avatar
            src={booking.doctorId?.avatar?.path}
            size="small"
            className="self-start"
          />
          <div className="text-sm">
            <div>
              Đơn <b>{booking._id}</b>
            </div>

            <div>
              Ngày khám: {moment(booking.date).format('DD/MM/YYYY')} /{' '}
              {booking.startTime} - {booking.endTime}
            </div>

            <div>Bác sĩ: {booking.doctorId.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BookingList;
