import { Avatar, Dropdown } from 'antd';

const items = [
  {
    label: 'Đăng xuất',
    danger: true,
    key: '0',
  },
];

const HeaderAdmin = () => {
  return (
    <div className="px-6 flex justify-between items-center">
      <div>Hôm nay là {new Date().toLocaleDateString()}!</div>

      <div className="flex items-center gap-2">
        <Dropdown
          menu={{
            items,
          }}
          trigger={['click']}
        >
          <Avatar
            size="default"
            className="cursor-pointer"
            src="https://i.pinimg.com/564x/29/50/af/2950afd4334f8a1903ad8dec0f7d0ac1.jpg"
          >
            Admin
          </Avatar>
        </Dropdown>

        <span className="font-bold">Xin chào Admin!</span>
      </div>
    </div>
  );
};

export default HeaderAdmin;
