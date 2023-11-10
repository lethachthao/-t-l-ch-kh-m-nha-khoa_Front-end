import VNPay from '@/components/icons/vnpay';

export default function Footer() {
  return (
    <footer className="bg-gray-100 block relative">
      <div className="container">
        <section className="p-4 flex flex-rows gap-8">
          <div className="w-1/4 flex flex-col gap-4">
            <span className="font-semibold">Giới thiệu</span>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry is standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
          <div className="w-1/4 flex flex-col gap-4">
            <span className="font-semibold">Dịch vụ</span>
            <div>
              <ul>
                <li>
                  <a href="">Giảm giá khám</a>
                </li>
                <li>
                  <a href="">Chăm sóc bệnh nhân</a>
                </li>
                <li>
                  <a href="">Khám tận nhà</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/4 flex flex-col gap-4">
            <span className="font-semibold">Thanh toán</span>
            <div>
              <VNPay className="w-1/2 h-auto" />
            </div>
          </div>
          <div className="w-1/4 flex flex-col gap-4">
            <span className="font-semibold">Kết nối</span>
            <div>
              <ul>
                <li>
                  <a href="https://facebook.com">Facebook</a>
                </li>
                <li>
                  <a href="https://facebook.com">Youtube</a>
                </li>
                <li>
                  <a href="https://facebook.com">Github</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="p-4">
          <div className="text-sm text-center text-gray-400">
            iTooth © {new Date().getFullYear()}. All rights reserved.
          </div>
        </section>
      </div>
    </footer>
  );
}
