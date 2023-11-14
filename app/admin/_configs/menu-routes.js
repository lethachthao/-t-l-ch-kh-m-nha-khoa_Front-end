import Link from 'next/link';
import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { FaHospitalUser } from 'react-icons/fa';

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
    roleAccess: ['admin'],
  },
  {
    key: 'booking-manager',
    icon: <FaHospitalUser />,
    label: <Link href="/admin/booking-manager">Quản lí đơn khám</Link>,
    roleAccess: ['doctor'],
  },
  {
    key: 'medical-specialty-manager',
    icon: <UserOutlined />,
    label: (
      <Link href="/admin/medical-specialty-manager">Quản lí chuyên khoa</Link>
    ),
    roleAccess: ['admin'],
  },
  {
    key: 'scheduling-manager',
    icon: <TeamOutlined />,
    label: <Link href="/admin/schedule-manager">Quản lí lịch trình</Link>,
    roleAccess: ['admin'],
  },
  {
    key: 'medical-examination-history',
    icon: <FileOutlined />,
    label: (
      <Link href="/admin/medical-examination-history">Lịch sử khám bệnh</Link>
    ),
    roleAccess: ['admin', 'doctor'],
  },
];
