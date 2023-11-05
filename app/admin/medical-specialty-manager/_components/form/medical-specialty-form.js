import { Button, Form, Input, Spin, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useUploadManual } from '../../_hooks/use-upload-manual';

const initialValues = {
  _id: '',
  name: '',
  description: '',
  avatar: '',
};

const MedicalSpecialtyForm = ({ isSubmitting = false, data, onSubmit }) => {
  const { _id, name, description, avatar } = data || initialValues;

  const [form] = Form.useForm();
  const { getUploadProps } = useUploadManual({ maxCount: 1 });

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const isEditMode = Boolean(data);

  const submitHandler = (values) => {
    const formData = new FormData();

    for (let fieldName in values) {
      if (fieldName === 'avatar') {
        const [file] = values[fieldName];

        if (
          Array.isArray(values[fieldName]) &&
          file.originFileObj instanceof File
        ) {
          formData.append(fieldName, file.originFileObj);
          continue;
        } else {
          continue;
        }
      }

      formData.append(fieldName, values[fieldName]);
    }

    if (!isEditMode) {
      onSubmit?.(null, formData);
    } else {
      onSubmit?.(_id, formData);
    }
  };

  return (
    <Spin spinning={isSubmitting}>
      <Form
        name="medical_specialty"
        layout="vertical"
        form={form}
        initialValues={{
          name: name || '',
          description: description || '',
          ...(avatar && {
            avatar: [
              {
                uid: avatar?._id,
                name: avatar?.filename,
                status: 'done',
                url: avatar?.path,
              },
            ],
          }),
        }}
        onFinish={submitHandler}
      >
        <Form.Item
          name="name"
          label="Tên chuyên khoa"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên chuyên khoa!',
            },
          ]}
        >
          <Input placeholder="Tên chuyên khoa" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Mô tả"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mô tả cho chuyên khoa',
            },
          ]}
        >
          <Input placeholder="Mô tả chuyên khoa" />
        </Form.Item>

        <Form.Item
          name="avatar"
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[
            {
              required: true,
              message: 'Vui lòng chọn một ảnh cho chuyên khoa',
            },
          ]}
          extra="Bạn chỉ được chọn tối đa một hình ảnh"
        >
          <Upload {...getUploadProps}>
            <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {!isEditMode ? 'Tạo' : 'Cập nhật'} chuyên khoa
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default MedicalSpecialtyForm;
