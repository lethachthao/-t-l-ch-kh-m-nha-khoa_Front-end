'use client';

import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import { ConfigProvider } from 'antd';

// chúng ta cần một provider gốc trong đó chứa tất cả các provider cần thiết để bọc cái Nextjs App của chúng ta lại
// provider em có thể hiểu nó là một cái component quản lí tất cả các config cho những component hay tính năng gì đó bên trong nó

// em có gì hông hiểu hông? may cai hook nay em ko biet anh a, em ko biết hook nào useMemo
// useMemo nó là một hook để ghi nhớ các giá trị để tránh bị tính toán lại ở mỗi  lần component của em bị render lại, da thoi de em tu tim hieu no vay
// làm từ từ là em sẽ hiểu nha, vang a
const RootProvider = ({ children }) => {
  // chúng ta dùng hook useMemo để ghi nhớ cái giá trị tính toán cho cache CSS được tạo ra từ thư viện ant design
  // để tránh mỗi lần component render là nó cũng sẽ tính toán lại và có thể tạo ra một tham chiếu mới
  const cache = React.useMemo(() => createCache(), []);

  // đây là một hook của Next.js có nhiệm vụ là nó insert style css của thư viện antd vào HTML của chúng ta mỗi khi chúng ta chuyển trang
  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));

  // mình sẽ config thêm một số thứ về màu sắc cho dự án ha, em muốn màu chủ đạo tức là màu primary là màu gì? mau xanh nuoc bien anh oi
  return (
    <StyleProvider cache={cache}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#096DC7',
          },
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
};

export default RootProvider;
