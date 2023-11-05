import { Modal } from 'antd';
import MedicalSpecialtyForm from '../form/medical-specialty-form';

const MedicalSpecialtyModal = ({
  isOpen,
  isSubmitting,
  data,
  onSubmit,
  onCancel,
}) => {
  return (
    <Modal
      open={isOpen}
      onCancel={onCancel}
      title={`${!data ? 'Tạo' : 'Cập nhật'} chuyên khoa`}
      footer={null}
      centered
      destroyOnClose
    >
      <MedicalSpecialtyForm
        data={data}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
      />
    </Modal>
  );
};

export default MedicalSpecialtyModal;
