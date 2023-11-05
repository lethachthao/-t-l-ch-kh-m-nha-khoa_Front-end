import { Modal } from 'antd';
import UserForm from '../form/user-form';

const EditAccountModal = ({
  isOpen,
  isSubmitting,
  data,
  onSubmit,
  onCancel,
}) => {
  return (
    <Modal
      open={isOpen}
      title="Edit Account"
      footer={null}
      onCancel={onCancel}
      destroyOnClose
    >
      <UserForm
        defaultData={data}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
      />
    </Modal>
  );
};

export default EditAccountModal;
