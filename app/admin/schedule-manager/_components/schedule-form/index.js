import { useEffect, useMemo } from 'react';
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Row,
  Select,
  Spin,
} from 'antd';
import locale from 'antd/es/date-picker/locale/vi_VN';
import moment from 'moment';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';

import { time } from '../../_configs/time';
import { isArray } from '@/utils/assertions';
import { getDateFormat } from '@/utils/date-format';
import { isSameDate } from '@/utils/date-compare';

const initialData = {
  doctor: '',
  date: '',
  time: [],
};

const ScheduleForm = ({
  isSubmitting,
  doctorsSeed,
  schedulesSeed,
  defaultData,
  onSubmit,
}) => {
  const {
    doctor: defaultDoctor,
    date: defaultDate,
    time: defaultTime,
  } = defaultData || initialData;

  const [form] = Form.useForm();
  const dateField = Form.useWatch('date', form);

  const doctorsFormat = (values) => {
    return values.map((doctor) => ({
      label: doctor.name,
      value: doctor._id,
    }));
  };

  const doctorsData = useMemo(() => {
    if (!isArray(doctorsSeed) || !isArray(schedulesSeed)) {
      return [];
    }

    if (!schedulesSeed.length) {
      return doctorsFormat(doctorsSeed);
    }

    const doctorsFilter = doctorsSeed.filter((doctor) => {
      return !schedulesSeed.some((s) => {
        return (
          doctor._id === s.doctor._id && isSameDate(s.date, dateField?.['$d'])
        );
      });
    });

    return doctorsFormat(doctorsFilter);
  }, [doctorsSeed, schedulesSeed, dateField]);

  const isEditMode = Boolean(defaultData);

  const submitHandler = (values) => {
    values.time = values.time.map((v) => JSON.parse(v));
    onSubmit?.(values, defaultData?._id, isEditMode);
  };

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
  };

  return (
    <Spin spinning={isSubmitting}>
      <Form
        name="schedule_form"
        layout="vertical"
        form={form}
        initialValues={{
          ...(defaultDoctor && { doctor: defaultDoctor._id }),
          ...(defaultDate && { date: dayjs(defaultDate) }),
          ...(defaultTime && {
            time: defaultTime.map((x) => {
              delete x._id;
              return JSON.stringify(x);
            }),
          }),
        }}
        onFinish={submitHandler}
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
              <Select placeholder="Chọn bác sĩ">
                {doctorsData.map((doctor) => (
                  <Select.Option key={doctor.value} value={doctor.value}>
                    {doctor.label}
                  </Select.Option>
                ))}
              </Select>
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
              <DatePicker picker="date" disabledDate={disabledDate} />
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
              {time.map((t, index) => (
                <Col span={8} key={index}>
                  <Checkbox value={JSON.stringify(t.value)}>{t.label}</Checkbox>
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
    </Spin>
  );
};

export default ScheduleForm;
