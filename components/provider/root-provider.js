'use client';

import React, { useRef } from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import { ConfigProvider, FloatButton } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// chúng ta cần một provider gốc trong đó chứa tất cả các provider cần thiết để bọc cái Nextjs App của chúng ta lại
// provider em có thể hiểu nó là một cái component quản lí tất cả các config cho những component hay tính năng gì đó bên trong nó

// em có gì hông hiểu hông? may cai hook nay em ko biet anh a, em ko biết hook nào useMemo
// useMemo nó là một hook để ghi nhớ các giá trị để tránh bị tính toán lại ở mỗi  lần component của em bị render lại, da thoi de em tu tim hieu no vay
// làm từ từ là em sẽ hiểu nha, vang a
const RootProvider = ({ children }) => {
  // chúng ta dùng hook useMemo để ghi nhớ cái giá trị tính toán cho cache CSS được tạo ra từ thư viện ant design
  // để tránh mỗi lần component render là nó cũng sẽ tính toán lại và có thể tạo ra một tham chiếu mới
  const cache = React.useMemo(() => createCache(), []);
  const isInsertCache = useRef(false);

  // for tanstack query config provider
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 0, // thời gian để cache không revalidate lại trong  5 phút, sau 5 phút query sẽ được fetch lại nếu truy cập
            gcTime: 1000 * 60 * 5, // sẽ dọn dẹp cache nếu cache đó bị vô hiệu hóa (ví dụ cache ở trang A, nhưng user qua trang B và họ ở đó hơn 5 phút) thì cache ở trang A sẽ được dọn dẹp
            refetchOnWindowFocus: false, // không fetch lại data khi nhấn chuột vào bất cứ đâu trong trình duyệt
            refetchOnReconnect: false, // không fetch lại data khi mất kết nối và sau đó có kết nối lại internet
            retryOnMount: true, // ko retry fetch lại data nếu query đó có error xảy ra
          },
        },
      }),
  );

  // đây là một hook của Next.js có nhiệm vụ là nó insert style css của thư viện antd vào HTML của chúng ta mỗi khi chúng ta chuyển trang
  useServerInsertedHTML(() => {
    if (isInsertCache.current) return;
    isInsertCache.current = true;

    return (
      <style
        id="antd"
        dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
      />
    );
  });

  // mình sẽ config thêm một số thứ về màu sắc cho dự án ha, em muốn màu chủ đạo tức là màu primary là màu gì? mau xanh nuoc bien anh oi
  return (
    <StyleProvider hashPriority="high" cache={cache}>
      <ConfigProvider
        theme={{
          token: {
            fontSize: 16,
            colorPrimary: '#06b6d4',
            colorLink: '#0891b2',
            colorLinkHover: '#0e7490',
            colorLinkActive: '#164e63',
          },
        }}
      >
        <QueryClientProvider client={queryClient}>
          {children}
          <FloatButton.BackTop />
        </QueryClientProvider>
      </ConfigProvider>
    </StyleProvider>
  );
};

export default RootProvider;
