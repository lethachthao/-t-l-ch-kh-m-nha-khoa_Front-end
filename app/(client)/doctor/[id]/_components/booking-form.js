import { BsCalendar3 } from 'react-icons/bs';
import {
  Avatar,
  Button,
  DatePicker,
  Divider,
  Form,
  Input,
  Radio,
  Spin,
} from 'antd';
import moment from 'moment';
import { useAuth } from '@/hooks/use-auth';
import dayjs from 'dayjs';

export default function BookingForm({ isSubmitting, booking, onSubmit }) {
  const { date, startTime, endTime, doctor } = booking;

  const { data: profile } = useAuth();

  const dateNode = `${moment(date).format(
    'dddd, DD/MM/YYYY',
  )} / ${startTime} - ${endTime}`;

  const submitHandler = (values) => {
    values.birthday = values.birthday.format();

    onSubmit?.({ ...values, doctorId: doctor._id, date, startTime, endTime });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <Avatar
          src="https://i.pinimg.com/736x/f0/44/a6/f044a6812c8d9d09761d9dc7f6116ced.jpg"
          size={64}
        />

        <div className="flex flex-col gap-2">
          <div className="font-semibold text-lg text-cyan-700">
            Bác sĩ {doctor.name}
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span>
              <BsCalendar3 />
            </span>
            <span>{dateNode}</span>
          </div>
        </div>
      </div>

      <Spin spinning={isSubmitting}>
        <Form
          name="booking"
          onFinish={submitHandler}
          layout="vertical"
          initialValues={{
            name: profile.data.name,
            gender: profile.data.gender,
            email: profile.data.email,
            birthday: dayjs(profile.data.birthday),
            phoneNumber: profile.data.phoneNumber,
            address: profile.data.address,
          }}
        >
          <Form.Item
            name="name"
            label="Họ tên"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập họ tên của bạn',
              },
            ]}
          >
            <Input placeholder="Nhập họ tên" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Giới tính"
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn giới tính của bạn',
              },
            ]}
          >
            <Radio.Group>
              <Radio value="male">Nam</Radio>
              <Radio value="female">Nữ</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập email của bạn',
              },
            ]}
          >
            <Input placeholder="Nhập địa chỉ email" />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Số diện thoại"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập số điện thoại của bạn',
              },
            ]}
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>

          <Form.Item
            name="birthday"
            label="Năm sinh"
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn ngày sinh của bạn',
              },
            ]}
          >
            <DatePicker format="DD/MM/YYYY" />
          </Form.Item>

          <Form.Item
            name="address"
            label="Địa chỉ"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập địa chỉ của bạn',
              },
            ]}
          >
            <Input placeholder="Nhập địa chỉ" />
          </Form.Item>

          <Form.Item
            name="reason"
            label="Lý do khám"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập lý do khám của bạn',
              },
            ]}
          >
            <Input.TextArea placeholder="Nhập lý do khám" />
          </Form.Item>

          <Form.Item
            name="payment"
            label="Hình thức thanh toán"
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn hình thức thanh toán của bạn',
              },
            ]}
          >
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="0" disabled>
                Thanh toán ngân hàng
              </Radio.Button>
              <Radio.Button value="1">Thanh toán tiền mặt</Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <div className="bg-gray-100 p-4">
              <ul className="flex flex-col gap-1.5 text-sm">
                <li>
                  <span className="font-semibold ">Giá khám: </span>
                  <span>400.000 VND</span>
                </li>
                <li>
                  <span className="font-semibold ">Voucher: </span>
                  <span>100.000 VND</span>
                </li>
              </ul>
              <Divider />
              <div>
                <span className="font-semibold ">
                  Tổng số tiền thanh toán:{' '}
                </span>
                <span className="text-red-500 text-lg font-bold">
                  400.000 VND
                </span>
              </div>
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đặt lịch khám
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
}
