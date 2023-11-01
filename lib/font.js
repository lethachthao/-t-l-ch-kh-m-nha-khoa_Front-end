import { Inter } from 'next/font/google';

// rồi mình sẽ cấu hình font family tức là font chữ cho toàn bộ frontend em nha
// ở nextjs có một feature là Font Optimization, feature này nó tối ưu font cho chúng ta, nó có đầy đủ font của google, mình cần xài cái nào thì đưa vào cái đó
// mình sẽ dùng font Inter của Google, font này nó đơn giản nhưng đẹp, nó hỗ trợ đầy đủ kí tự tiếng Việt

export const fontInter = Inter({
  subsets: ['latin', 'vietnamese'], // font sẽ preload trước để tối ưu tối độ cho quá trình load trang, preload có nghĩa là nó sẽ load trước
  variable: '--font-inter', // tạo một css variable cho tailwind có thể sử dụng cái font này áp dụng cho font mặc định của tailwind
  preload: true,
  display: 'swap', // cái này có nghĩa là nếu lần tải trang đầu tiên nếu font chính ko được load thì nó sẽ lấy font dự phòng để áp dụng cho font-family
});
