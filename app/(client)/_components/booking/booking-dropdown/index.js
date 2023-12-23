import { Typography } from 'antd';

import BookingList from '../booking-list';

const { Title } = Typography;

export default function BookingDropdown({ loading, bookings }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-[360px] min-h-[200px] max-h-screen">
      <Title level={3} className="!text-base !font-semibold">
        Đơn đã đặt
      </Title>

      <BookingList loading={loading} bookings={bookings} />
    </div>
  );
}
