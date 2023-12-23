'use client';

import withAuth from '@/hocs/withAuth';
import { Button, DatePicker, Table } from 'antd';
import { useBooking } from './_hooks/use-booking';
import { useMemo, useState } from 'react';
import dayjs from 'dayjs';
import BillModal from './_components/bill-modal';
import { useBill } from './_hooks/use-bill';

const BookingManager = () => {
  const [date, setDate] = useState(() => dayjs());
  const { data: bookings } = useBooking(parsedDate(date));
  const [bookingId, setBookingId] = useState(null);
  const { mutate: sendBill, isPending: isSubmitting } = useBill();

  function parsedDate(value) {
    return dayjs(value).format('YYYY/MM/DD');
  }

  const columns = [
    // {
    //   title: 'ID',
    //   dataIndex: '_id',
    //   key: '_id',
    // },

    {
      title: 'Số thứ tự',
      dataIndex: 'index', // Đặt dataIndex là 'index' để hiển thị số thứ tự
      key: 'index',
      render: (_, record, index) => index + 1, // Hiển thị số thứ tự
    },

    {
      title: 'Thời gian',
      dataIndex: 'time',
      key: 'time',
      render: (text, record) => (
        <span>
          {record.startTime} - {record.endTime}
        </span>
      ),
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },

    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      render: (text, record) => <span>{record.phoneNumber}</span>,
    },

    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
      render: (text) => {
        return text === 'male' ? 'Nam' : 'Nữ';
      },
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button
          type="primary"
          size="small"
          onClick={() => setBookingId(record._id)}
        >
          Xác nhận
        </Button>
      ),
    },
  ];

  const bookingData = useMemo(() => {
    if (!bookings) return null;

    // const sortedBookings = [...bookings.data].sort((a, b) =>
    //   dayjs(a.date).isBefore(b.date) ? -1 : 1,
    // );
    // return sortedBookings.find((booking) => booking._id === bookingId);
    return bookings.data.find((booking) => booking._id === bookingId);
  }, [bookings, bookingId]);

  const sendBillHandler = (formData) => {
    sendBill(formData, {
      onSuccess: () => {
        setBookingId(null);
      },
    });
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex gap-2 items-center">
          <span>Chọn ngày khám: </span>

          <div>
            <DatePicker
              format="DD/MM/YYYY"
              defaultValue={date}
              showToday
              onChange={(value) => setDate(value)}
            />
          </div>
        </div>

        <div>
          <Table
            columns={columns}
            dataSource={bookings?.data}
            pagination={false}
          />
        </div>
      </div>

      <BillModal
        isOpen={Boolean(bookingId)}
        isSubmitting={isSubmitting}
        bookingData={bookingData}
        onCancel={() => setBookingId(null)}
        onSubmit={sendBillHandler}
      />
    </>
  );
};

export default withAuth({ role: ['doctor'] })(BookingManager);
