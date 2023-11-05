import Link from 'next/link';
import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const menuRoutes = [
  {
    key: 'account-manager',
    icon: <PieChartOutlined />,
    label: 'Quản lí tài khoản',
    children: [
      {
        key: 'add-account',
        label: (
          <Link href="/admin/account-manager/add-account">
            Thêm tài khoản mới
          </Link>
        ),
      },
      {
        key: 'patient',
        label: (
          <Link href="/admin/account-manager/patients">Quản lí bệnh nhân</Link>
        ),
      },
      {
        key: 'doctor',
        label: (
          <Link href="/admin/account-manager/doctors">Quản lí bác sĩ</Link>
        ),
      },
    ],
  },
  {
    key: 'medical-specialty-manager',
    icon: <UserOutlined />,
    label: (
      <Link href="/admin/medical-specialty-manager">Quản lí chuyên khoa</Link>
    ),
  },
  {
    key: 'scheduling-manager',
    icon: <TeamOutlined />,
    label: <Link href="/admin/schedule-manager">Quản lí lịch trình</Link>,
  },
  {
    key: 'history-manager',
    icon: <FileOutlined />,
    label: <Link href="/admin/history-manager">Quản lí lịch sử khám</Link>,
  },
];
