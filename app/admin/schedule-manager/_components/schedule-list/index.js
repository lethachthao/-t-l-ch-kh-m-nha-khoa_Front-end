import { Button, Space, Table, Tag } from 'antd';
import { getDateFormat } from '@/utils/date-format';
import { useDeleteSchedule } from '../../_hooks/use-delete-schedule';

const ScheduleList = ({ schedules, onUpdate }) => {
  const { mutate: deleteSchedule } = useDeleteSchedule();

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Doctor',
      dataIndex: 'doctor',
      key: 'doctor',
      render: (text, record) => <a>{record.doctor.name}</a>,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text) => {
        return getDateFormat(text);
      },
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      render: (_, record) =>
        record.time.map((time, index) => (
          <Tag color="geekblue" key={index}>
            {time.start} - {time.end}
          </Tag>
        )),
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="small">
          <Button
            type="primary"
            size="small"
            onClick={() =>
              onUpdate(
                schedules.find((schedule) => schedule._id === record._id),
              )
            }
          >
            Sửa
          </Button>
          <Button
            type="primary"
            size="small"
            onClick={() => deleteSchedule(record._id)}
            danger
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={schedules} pagination={false} />;
};
export default ScheduleList;
