'use client';

import { useParams } from 'next/navigation';
import { useMyBookingDetail } from '../../_hooks/use-my-booking-detail';
import { Skeleton, Typography } from 'antd';
import moment from 'moment';
import withAuth from '@/hocs/withAuth';

const { Title } = Typography;

const MyBookingDetail = () => {
  const { id } = useParams();
  const { data: bookingDetail, isLoading } = useMyBookingDetail(id);

  return (
    <div className="container">
      {isLoading ? (
        <Skeleton />
      ) : !bookingDetail?.data ? (
        <div>Không tìm thấy đơn khám</div>
      ) : (
        <div className="mt-4 p-4 bg-white flex justify-center items-center flex-col">
          <Title level={3} className="!text-xl !font-bold">
            Thông tin đơn khám bệnh
          </Title>

          <div className="text-base flex flex-col gap-3">
            <div>
              <span>Mã đơn: </span>{' '}
              <span className="text-red-500 font-bold">
                {bookingDetail.data._id}
              </span>
            </div>
            <div>
              <span>Tên bệnh nhân: </span>{' '}
              <span className="font-bold">{bookingDetail.data.name}</span>
            </div>
            <div>
              <span>Ngày sinh: </span>{' '}
              <span className="font-bold">
                {moment(bookingDetail.data.birthday).format('DD/MM/YYYY')}
              </span>
            </div>
            <div>
              <span>Giới tính: </span>{' '}
              <span className="font-bold">
                {bookingDetail.data.gender === 'male' ? 'Nam' : 'Nữ'}
              </span>
            </div>
            <div>
              <span>Ngày đặt: </span>{' '}
              <span className="font-bold">
                {moment(bookingDetail.data.date).format('DD/MM/YYYY')}
              </span>
            </div>
            <div>
              <span>Thời gian đặt: </span>{' '}
              <span className="font-bold">
                {bookingDetail.data.startTime} đến {bookingDetail.data.endTime}
              </span>
            </div>

            <div>
              <span>Email: </span>{' '}
              <span className="font-bold">{bookingDetail.data.email}</span>
            </div>

            <div>
              <span>Số điện thoại: </span>{' '}
              <span className="font-bold">
                {bookingDetail.data.phoneNumber}
              </span>
            </div>
            <div>
              <span>Địa chỉ: </span>{' '}
              <span className="font-bold">{bookingDetail.data.address}</span>
            </div>
            <div>
              <span>Lý do khám: </span>{' '}
              <span className="font-bold">{bookingDetail.data.reason}</span>
            </div>

            <div>
              <span>Địa chỉ: </span>{' '}
              <span className="font-bold">{bookingDetail.data.address}</span>
            </div>

            <hr />

            <div>
              <span>Bác sĩ: </span>{' '}
              <span className="font-bold">
                {bookingDetail.data.doctorId.name}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withAuth({ role: ['user', 'doctor', 'admin'] })(MyBookingDetail);
