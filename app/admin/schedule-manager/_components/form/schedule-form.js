import React, { useEffect, useMemo } from 'react';
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
} from 'antd';

const ScheduleForm = ({ doctors, onSubmit }) => {
  const [form] = Form.useForm();

  const time = [
    {
      label: '8:00 - 9:00',
      value: '8,9',
    },
    {
      label: '9:00 - 10:00',
      value: '9,10',
    },
    {
      label: '10:00 - 11:00',
      value: '10,11',
    },
    {
      label: '11:00 - 11:30',
      value: '11,11:30',
    },
    {
      label: '13:00 - 14:00',
      value: '13,14',
    },
    {
      label: '14:00 - 15:00',
      value: '14,15',
    },
    {
      label: '15:00 - 16:00',
      value: '15,16',
    },
  ];

  const doctorList = useMemo(
    () =>
      doctors && Array.isArray(doctors)
        ? doctors.map((doctor) => ({
            label: doctor.name,
            value: doctor._id,
          }))
        : [],
    [doctors],
  );

  return (
    <Form
      name="schedule_form"
      layout="vertical"
      form={form}
      initialValues={{}}
      onFinish={onSubmit}
    >
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item
            name="doctor"
            label="Chọn bác sĩ"
            rules={[
              {
                required: true,
                message: 'Vui lòng chọn bác sĩ!',
              },
            ]}
          >
            <Select
              placeholder="Please select a country"
              options={doctorList}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name="date"
            label="Chọn ngày khám"
            rules={[
              {
                type: 'object',
                required: true,
                message: 'Vui lòng chọn ngày khám!',
              },
            ]}
          >
            <DatePicker picker="date" format="DD/MM/YYYY" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name="time"
        label="Chọn giờ hẹn"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Vui lòng chọn giờ hẹn!',
          },
        ]}
      >
        <Checkbox.Group>
          <Row gutter={[15, 15]}>
            {time.map((t) => (
              <Col span={8} key={t.value}>
                <Checkbox value={t.value}>{t.label}</Checkbox>
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Tạo lịch trình
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ScheduleForm;
