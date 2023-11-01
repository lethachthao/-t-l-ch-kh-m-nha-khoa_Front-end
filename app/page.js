// page này luôn luôn được bọc bởi layout.js

import { Button } from 'antd';

// nếu có file layout nằm cùng cấp với nó hoặc cấp cha cao hơn thì nó sẽ nhận các layout đó và áp dụng cho page
export default function Home() {
  return (
    <div>
      <Button>Hello world</Button>
    </div>
  );
}
