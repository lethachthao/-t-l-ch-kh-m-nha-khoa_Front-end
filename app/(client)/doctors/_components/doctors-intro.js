'use client';

import { Avatar, Statistic, Typography } from 'antd';
import CountUp from 'react-countup';
import OverrideConfigProvider from './provider/override-config-provider';
const { Title, Paragraph } = Typography;

const DoctorsIntro = () => {
  const formatter = (value) => <CountUp end={value} separator="." />;

  return (
    <OverrideConfigProvider>
      <section className="relative block w-full bg-white shadow">
        <div className="container">
          <div className="flex flex-rows gap-8 p-4">
            <div>
              <Avatar
                src="https://i.pinimg.com/564x/b0/1b/a2/b01ba2182db61ec4040e2e02f60cb821.jpg"
                size={120}
              />
            </div>
            <div className="flex-1">
              <Title level={3}>Bác sĩ Nha khoa</Title>
              <Paragraph ellipsis={{ rows: 2, expandable: true }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Paragraph>
            </div>

            <div>
              <Statistic
                title="Số lượng bác sĩ"
                value={100}
                formatter={formatter}
              />
            </div>
          </div>
        </div>
      </section>
    </OverrideConfigProvider>
  );
};

export default DoctorsIntro;
