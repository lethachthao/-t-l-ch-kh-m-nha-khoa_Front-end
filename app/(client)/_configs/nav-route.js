import { BsInfoCircle, BsTelephoneOutbound } from 'react-icons/bs';
import { GrGroup } from 'react-icons/gr';
import { FaRegHospital } from 'react-icons/fa';

export const navRoute = [
  {
    text: 'Giới thiệu',
    pathname: '/gioi-thieu',
    icon: <BsInfoCircle />,
  },
  {
    text: 'Đội ngũ',
    pathname: '/doi-ngu',
    icon: <GrGroup />,
  },
  {
    text: 'Chuyên khoa',
    pathname: '/chuyen-khoa',
    icon: <FaRegHospital />,
  },
  {
    text: 'Liên hệ',
    pathname: '/lien-he',
    icon: <BsTelephoneOutbound />,
  },
];
