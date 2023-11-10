import { ConfigProvider } from 'antd';

export default function OverrideConfigProvider({ children }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Statistic: {
            titleFontSize: 20,
            contentFontSize: 40,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
