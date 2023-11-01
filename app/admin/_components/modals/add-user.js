import { Modal } from 'antd';
import AddUserForm from '../form/add-user';

const AddUserModal = ({ name, isOpen, onCancel, onAddAction }) => {
  return (
    <Modal
      title={`Thêm tài khoản ${name}`}
      footer={null}
      centered
      open={isOpen}
      onCancel={onCancel}
    >
      <AddUserForm name={name} onSubmit={onAddAction} />
    </Modal>
  );
};

export default AddUserModal;
