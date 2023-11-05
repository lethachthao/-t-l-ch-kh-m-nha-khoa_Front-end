import { Inter } from 'next/font/google';
import { cn } from '@/utils/cn';
import '../styles/globals.css';
import { fontInter } from '../lib/font';
import RootProvider from '@/components/provider/root-provider';
import { App } from 'antd';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'iTooth',
  description: 'A project built-in Next.js',
};

export default function RootLayout({ children }) {
  // chúng ta sẽ sử dụng cn để nối các classname lại với nhau, fontInter.variable là một class chứa cái --font-inter của chúng ta tạo ra lúc nãy trong font.js
  // vì chúng ta dùng tailwindcss, một thư viện rất nổi tiếng và xịn xò, nhanh chóng để viết css cho giao diện mà không cần tạo bất kì một file css nào
  // lợi ích là chúng ta không cần phải suy nghĩ ra cách đặt tên class như bên css thuần (điển hình là quy tắc đặt tên BEM), mỗi classname trong tailwind sẽ tượng trưng cho một thuộc tính css
  // ví dụ bên duối 'overflow-x-hidden' dịch ra css có nghĩa là overflow-x: hidden
  // test thử trong trình duyệt nha
  // đó em hiểu chưa? em thấy cái hay của nó chưa, overflow-x-hidden tacs dung gi vay anh
  // chúng ta sẽ để trong body ha vang
  // role là thuộc tính để xác định phần đó là phần thân chính của web
  // dir ltr => dir left-to-right, ngôn ngữ chúng ta viết từ trái sang phải nên khai báo trình duyệt biết để hiển thị nội dnug từ trái sang phải
  // chúng ta sẽ bọc cái provider vừa tạo vào layout để áp dụng cho toàn bộ cac page, layout trong nextjs

  return (
    <html lang="en" dir="ltr">
      <body
        className={cn(
          fontInter.variable,
          'overflow-x-hidden min-h-full text-base',
        )}
      >
        <RootProvider>
          <App>
            <main className="relative" role="main">
              {children}
            </main>
          </App>
        </RootProvider>
      </body>
    </html>
  );
}
