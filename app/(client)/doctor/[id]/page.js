'use client';

import {
  App,
  Avatar,
  Button,
  Checkbox,
  Radio,
  Select,
  Skeleton,
  Space,
  Tag,
  Typography,
} from 'antd';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { CiBadgeDollar } from 'react-icons/ci';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { IoShareSocialOutline } from 'react-icons/io5';
import { BsFacebook } from 'react-icons/bs';
import { SiZalo } from 'react-icons/si';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import moment from 'moment';
import 'moment/locale/vi.js';
import { useDoctorDetail } from './_hooks/use-doctor-detail';
import { useDoctorSchedule } from './_hooks/use-doctor-schedule';
import BookingModal from './_components/booking-modal';
import { useBooking } from './_hooks/use-booking';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';

moment.locale('vi');

const { Title, Paragraph } = Typography;

const DoctorDetail = () => {
  const { id } = useParams();

  const { data: profile, isError } = useAuth();
  const { data: doctor, isLoading: isDoctorDetailLoading } =
    useDoctorDetail(id);

  const [date, setDate] = useState('');
  const [bookingData, setBookingData] = useState(null);
  const [specialistPicker, setSpecialistPicker] = useState([]);
  const { message } = App.useApp();

  const { data: schedule, isLoading: isScheduleLoading } = useDoctorSchedule(
    id,
    date,
  );

  const { mutate: booking, isPending: isBookingSubmitting } = useBooking();

  const generateNextWeek = useMemo(() => {
    const days = [...Array(7)]
      .map((_, i) => i + 1)
      .map((day) => ({
        label: moment().add(day, 'd').locale('vi').format('dddd, DD/MM/YYYY'),
        value: moment().add(day, 'd').format('YYYY/MM/DD'),
      }));

    return days;
  }, []);

  useEffect(() => {
    setDate(generateNextWeek[0].value);
  }, [generateNextWeek]);

  const changeDateHandler = (value) => {
    setDate(value);
  };

  const bookingHandler = (date, startTime, endTime) => {
    return () => {
      if (!profile?.data || isError) {
        return message.error('Vui lòng đăng nhập để tiếp tục!');
      }

      if (!specialistPicker.length) {
        return message.error('Vui lòng chọn khoa khám!');
      }

      setBookingData({
        date,
        startTime,
        endTime,
        doctor: doctor.data,
      });
    };
  };

  const bookingSubmitHandler = (values) => {
    booking(values, {
      onSuccess: () => {
        setBookingData(null);
      },
    });
  };

  const specialistPickerHandler = (values) => {
    setSpecialistPicker(
      !!values.length
        ? values.map((v) => doctor.data.specialist.find((s) => s._id === v))
        : [],
    );
  };

  if (isDoctorDetailLoading) {
    return <Skeleton />;
  }

  return (
    <>
      <div className="container flex gap-8">
        <div className="flex flex-row gap-6 w-1/2 p-4">
          <div>
            <Avatar src={doctor.data.avatar.path} size={120} />
          </div>

          <Space size={3} direction="vertical">
            <Title level={3}>Bác sĩ {doctor.data.name}</Title>

            {!!doctor.data.specialist.length && (
              <Space size={10}>
                {doctor.data.specialist.map((item) => (
                  <Link
                    href={`/specialist/${item._id}`}
                    className="font-semibold flex items-center gap-1.5"
                    key={item._id}
                  >
                    <Avatar
                      src={item.avatar.path}
                      size={20}
                      className="inline-block"
                    />
                    <span>{item.name}</span>

                    <span>
                      <RiVerifiedBadgeFill className="text-cyan-600" />
                    </span>
                  </Link>
                ))}
              </Space>
            )}

            <div className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Đã tham gia:</span>{' '}
              <span>{moment(doctor.data.createdAt).fromNow()}</span>
            </div>
            <Paragraph>{doctor.data.bio}</Paragraph>

            <div className="flex gap-1">
              <span className="flex items-center gap-1">
                <MdOutlineAlternateEmail /> Hộp thư:
              </span>
              <span>
                <a href="mailto:mixigaming@gmail.com">{doctor.data.email}</a>
              </span>
            </div>

            <div className="flex items-center gap-1">
              <span className="flex items-center gap-1">
                <IoShareSocialOutline /> Liên kết xã hội:
              </span>
              <Space size={5}>
                <Button
                  type="link"
                  href="https://facebook.com"
                  shape="circle"
                  ghost
                  icon={<BsFacebook />}
                />
                <Button
                  type="link"
                  href="https://zalo.me"
                  shape="circle"
                  ghost
                  icon={<SiZalo />}
                />
              </Space>
            </div>
          </Space>
        </div>

        <div className="w-1/2 p-4">
          <div>
            <div>
              <span className="font-bold text-gray-600">Địa chỉ khám: </span>
            </div>
            <div>
              <address>{doctor.data.address}</address>
            </div>
          </div>

          <div className="flex gap-2 flex-col mt-6">
            <div className="flex items-center gap-1">
              <span>
                <BsCalendar3 />
              </span>
              <span>Lịch khám</span>
            </div>

            <div className="flex flex-col gap-4">
              <Select
                defaultValue={generateNextWeek[0].value}
                className="w-[200px]"
                onChange={changeDateHandler}
                options={generateNextWeek}
              />

              {isScheduleLoading ? (
                <Skeleton />
              ) : (
                <div>
                  {!!schedule?.data?.time?.length ? (
                    <div>
                      <Space size={10} wrap>
                        {schedule.data.time.map((time) => (
                          <Button
                            key={time._id}
                            type="primary"
                            ghost
                            disabled={time.isDisabled}
                            onClick={bookingHandler(
                              schedule.data.date,
                              time.start,
                              time.end,
                            )}
                          >
                            {time.start} - {time.end}
                          </Button>
                        ))}
                      </Space>

                      <div className="mt-5">
                        <span>Chọn khoa khám: </span>

                        <div className="mt-1">
                          <Checkbox.Group
                            options={doctor.data.specialist.map((s) => ({
                              label: s.name,
                              value: s._id,
                            }))}
                            onChange={specialistPickerHandler}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <span>Chưa có lịch vào ngày này</span>
                  )}
                </div>
              )}

              <div className="flex items-center gap-1 text-amber-500">
                <span>
                  <CiBadgeDollar />
                </span>
                <span className="text-sm  italic">
                  Chọn và đặt lịch miễn phí
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={Boolean(bookingData)}
        isSubmitting={isBookingSubmitting}
        booking={bookingData}
        specialistPicker={specialistPicker}
        onSubmit={bookingSubmitHandler}
        onCancel={() => setBookingData(null)}
      />
    </>
  );
};

export default DoctorDetail;
