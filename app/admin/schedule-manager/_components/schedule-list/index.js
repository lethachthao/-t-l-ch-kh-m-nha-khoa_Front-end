import { Button, Space, Table, Tag } from 'antd';
import { getDateFormat } from '@/utils/date-format';
import { useDeleteSchedule } from '../../_hooks/use-delete-schedule';
import { useFilterTable } from '@/app/admin/_hooks/use-filter-table';

const ScheduleList = ({ schedules, onUpdate }) => {
  const { mutate: deleteSchedule } = useDeleteSchedule();
  const filterTable = useFilterTable();

  const sortedSchedules = [...schedules].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  });

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
      title: 'Doctor',
      dataIndex: 'doctor',
      key: 'doctor',
      render: (text, record) => record.doctor.name,
      ...filterTable('doctor', (record) => record.name),
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

  return (
    <Table columns={columns} dataSource={sortedSchedules} pagination={false} />
  );
};
export default ScheduleList;
