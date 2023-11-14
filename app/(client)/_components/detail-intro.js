'use client';

import { Avatar, Statistic, Typography } from 'antd';
import CountUp from 'react-countup';
import OverrideConfigProvider from '../doctors/_components/provider/override-config-provider';
const { Title, Paragraph } = Typography;

const DetailIntro = ({ title, description, avatar, count = 100 }) => {
  const formatter = (value) => <CountUp end={value} separator="." />;

  return (
    <OverrideConfigProvider>
      <section className="relative block w-full bg-white shadow">
        <div className="container">
          <div className="flex flex-rows gap-8 p-4">
            <div>
              <Avatar
                src={
                  avatar ||
                  'https://i.pinimg.com/564x/b0/1b/a2/b01ba2182db61ec4040e2e02f60cb821.jpg'
                }
                size={120}
              />
            </div>
            <div className="flex-1">
              <Title level={3}>{title}</Title>
              <Paragraph ellipsis={{ rows: 2, expandable: true }}>
                {description}
              </Paragraph>
            </div>

            <div>
              <Statistic title="Số lượng" value={count} formatter={formatter} />
            </div>
          </div>
        </div>
      </section>
    </OverrideConfigProvider>
  );
};

export default DetailIntro;
