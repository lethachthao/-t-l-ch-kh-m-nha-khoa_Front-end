'use client';

import { Avatar, Button, Input, List, Skeleton } from 'antd';
import { useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useMedicalExaminationHistory } from './_hooks/use-medical-exam-history';
import moment from 'moment';

const MedicalExamHistory = () => {
  const inputRef = useRef();
  const [email, setEmail] = useState('');

  const { data, isLoading } = useMedicalExaminationHistory(email);

  const searchHandler = () => {
    setEmail(inputRef.current.input.value);
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <div className="mb-4 flex items-center gap-4">
        <Input
          ref={inputRef}
          prefix={<BsSearch />}
          placeholder="Tìm kiếm lịch sử khám bệnh"
        />

        <Button type="primary" onClick={searchHandler}>
          Tìm kiếm
        </Button>
      </div>
      <div>
        {isLoading ? (
          <Skeleton />
        ) : (
          <List
            itemLayout="horizontal"
            dataSource={data?.data}
            renderItem={(item, index) => (
              <List.Item
                key={item.title}
                extra={
                  item?.bill?.billFile && (
                    <a href={`${item?.bill?.billFile}`}>Tải xuống hóa đơn</a>
                  )
                }
              >
                <List.Item.Meta
                  //   avatar={<Avatar src={item.avatar} />}
                  title={
                    <span className="font-semibold text-black">
                      Đơn khám: <span className="text-red-500">{item._id}</span>
                    </span>
                  }
                  description={
                    <div className="flex flex-col gap-4">
                      <div>
                        Người khám:{' '}
                        <span className="font-semibold">{item.name}</span>
                      </div>
                      <div className="flex flex-row gap-4 items-center">
                        {item.doctor && (
                          <div className="flex flex-row gap-2">
                            <div>
                              <Avatar
                                src={item.doctor.avatar.path}
                                size="small"
                              />
                            </div>
                            <div className="font-semibold">
                              <span>Bác sĩ: </span>
                              <span>{item.doctor.name}</span>
                            </div>
                          </div>
                        )}
                        {moment(item.date).format('DD/MM/YYYY')} /{' '}
                        {item.startTime} - {item.endTime}
                      </div>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        )}
      </div>
    </div>
  );
};

export default MedicalExamHistory;
