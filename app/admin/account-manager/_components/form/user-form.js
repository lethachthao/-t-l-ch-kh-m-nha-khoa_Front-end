import React, { useMemo } from 'react';
import { LockOutlined, UserOutlined, UploadOutlined } from '@ant-design/icons';
import { Alert, Avatar, Button, Form, Input, Radio, Spin, Upload } from 'antd';
import {
  useUploadManual,
  normFile,
} from '@/app/admin/_hooks/use-upload-manual';
import { isArray, isFile } from '@/utils/assertions';

const initialData = {
  _id: null,
  name: '',
  bio: '',
  email: '',
  phoneNumber: '',
  address: '',
  accountType: '',
  role: '',
  password: '',
  avatar: '',
};

const UserForm = ({ isSubmitting = false, defaultData, onSubmit }) => {
  const {
    _id,
    name,
    bio,
    email,
    phoneNumber,
    address,
    accountType,
    role,
    avatar,
  } = defaultData || initialData;

  const [form] = Form.useForm();
  const nameValue = Form.useWatch('name', form);
  const { getUploadProps } = useUploadManual({
    maxCount: 1,
  });

  const onFinish = (values) => {
    const formData = new FormData();

    for (let fieldName in values) {
      if (!values[fieldName]) {
        continue;
      }

      if (fieldName === 'avatar') {
        const [file] = values[fieldName];

        if (file && isFile(file.originFileObj)) {
          formData.append(fieldName, file.originFileObj);
          continue;
        } else {
          continue;
        }
      }

      formData.append(fieldName, values[fieldName]);
    }

    console.log(formData);

    onSubmit?.(formData, _id);
  };

  const isEditMode = useMemo(() => Boolean(defaultData), [defaultData]);
  // khi bấm submit, thì ngay lập tức cái prop callback `onFinish` trong Form sẽ được gọi, anh pass vào đó
  // cái onSubmit tiếp tục, onSubmit ở UserForm là cái prop callback của chúng ta tự làm riêng mục đích là truyền lên trên theo dạng callback void
  // đó em qua bên page kia em thấy cái prop y hệt cái onSubmit bên đây truyền lên, tức là bên đây truyền lên qua prop nào là bên page kia chúng ta sẽ có prop y hệt như vậy
  // em hông nói sớm giờ phải refactor lại tùm lum thứ, hôm đó em có bảo nhưng anh bảo mình cứ tính sau mà anh
  return (
    <div className="flex flex-col gap-4 bg-white p-8 rounded-xl">
      {/* <Alert
        message="Warning"
        description="Tạo tài khoản chỉ dành cho mục đích test, không sử dụng trong thực
            tế để đảm bảo an toàn thông tin người dùng."
        type="warning"
        showIcon
      /> */}

      <div className="flex flex-col items-center text-center gap-2">
        <Avatar size={100} icon={<UserOutlined />} />
        <span className="font-bold text-lg">{nameValue || ''}</span>
      </div>

      <Spin spinning={isSubmitting}>
        <Form
          name="signup_form"
          layout="vertical"
          form={form}
          initialValues={{
            name: name || '',
            bio: bio || '',
            email: email || '',
            phoneNumber: phoneNumber || '',
            address: address || '',
            accountType: accountType || '',
            role: role || '',
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
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please input name!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Name"
            />
          </Form.Item>

          <Form.Item
            name="bio"
            label="Bio"
            rules={[
              {
                required: true,
                message: 'Please input bio!',
              },
            ]}
          >
            <Input.TextArea placeholder="Bio" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: 'Please input Email!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Please input Phone Number!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Phone Number"
            />
          </Form.Item>

          <Form.Item
            name="avatar"
            label="Avatar"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="Upload tối đa 1 hình ảnh"
          >
            <Upload {...getUploadProps}>
              <Button icon={<UploadOutlined />}>Upload avatar</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: 'Please input Address!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Address"
            />
          </Form.Item>

          <Form.Item
            name="accountType"
            label="Loại tài khoản"
            rules={[
              {
                required: true,
                message: 'Please input Account Type!',
              },
            ]}
          >
            <Radio.Group>
              <Radio value="user">Bệnh nhân</Radio>
              <Radio value="doctor">Bác sĩ</Radio>
              <Radio value="admin">Quản trị viên</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="role"
            label="Vai trò"
            rules={[
              {
                required: true,
                message: 'Please select role!',
              },
            ]}
          >
            <Radio.Group>
              <Radio value="user">Bệnh nhân</Radio>
              <Radio value="doctor">Bác sĩ</Radio>
              <Radio value="admin">Quản trị viên</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            hidden={isEditMode}
            rules={[
              {
                required: !isEditMode,
                message: 'Please input Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {!isEditMode ? 'Tạo tài khoản' : 'Cập nhật tài khoản'}
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};
export default UserForm;
