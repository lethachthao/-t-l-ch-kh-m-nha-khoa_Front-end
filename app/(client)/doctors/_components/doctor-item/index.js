'use client';

import { useMemo, useState } from 'react';
import { Avatar, Select, Skeleton } from 'antd';
import Link from 'next/link';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsCalendar3 } from 'react-icons/bs';
import moment from 'moment';
import 'moment/locale/vi.js';
import { useSchedule } from '../../_hooks/use-schedule';

moment.locale('vi');

const DoctorItem = ({ doctor }) => {
  const { _id, name, address } = doctor;

  const generateNextWeek = useMemo(() => {
    const days = [...Array(7)]
      .map((_, i) => i + 1)
      .map((day) => ({
        label: moment().add(day, 'd').locale('vi').format('dddd, DD/MM/YYYY'),
        value: moment().add(day, 'd').format(),
      }));

    return days;
  }, []);

  const [date, setDate] = useState(generateNextWeek[0].value);

  const { data, isPending } = useSchedule(_id, date);

  const dateChangeHandler = (values) => {
    setDate(values);
  };

  return (
    <div className="relative bg-white p-4 shadow rounded-xl flex flex-row gap-4">
      <div className="w-1/2 flex gap-4">
        <div>
          <Link href="/">
            <Avatar
              src="https://i.pinimg.com/564x/a6/e4/ba/a6e4ba24a1ecafec76b3d43a7ee4410e.jpg"
              size={100}
            />
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <Link
            href={`/doctor-detail/${_id}`}
            className="font-semibold text-lg"
          >
            Bác sĩ {name}
          </Link>

          <p className="text-slate-600">
            Hơn 10 năm cống hiến trong lĩnh vực răng sứ thẩm mỹ Từ tu nghiệp,
            học tập chuyên sâu về lĩnh vực phục hình tại Cuba Từng công tác tại
            Bệnh viện răng hàm mặt
          </p>

          <div className="flex items-center gap-1 font-semibold text-sm">
            <span>
              <HiOutlineLocationMarker />
            </span>
            <span>{address}</span>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        <div className="flex items-center gap-1">
          <span>
            <BsCalendar3 />
          </span>
          <span>Lịch khám</span>
        </div>
        <div>
          <Select
            defaultValue={date}
            className="w-[200px]"
            onChange={dateChangeHandler}
            options={generateNextWeek}
          />
        </div>

        <div>
          {isPending ? (
            <Skeleton />
          ) : (
            <Link
              href="/"
              className="inline-block px-4 py-1 rounded-md border-2 border-cyan-600 !text-cyan-600 hover:bg-cyan-600 hover:!text-white"
            >
              8:00 - 9:00
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default DoctorItem;
