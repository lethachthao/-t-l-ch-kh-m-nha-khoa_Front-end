import { Modal } from 'antd';
import ScheduleForm from '../schedule-form';

const ScheduleModal = ({
  isOpen,
  isSubmitting,
  schedulesSeed,
  doctorsSeed,
  defaultData,
  onCancel,
  onSubmit,
}) => {
  return (
    <Modal
      open={isOpen}
      centered
      destroyOnClose
      title={null}
      footer={null}
      onCancel={onCancel}
    >
      <ScheduleForm
        isSubmitting={isSubmitting}
        doctorsSeed={doctorsSeed}
        schedulesSeed={schedulesSeed}
        defaultData={defaultData}
        onSubmit={onSubmit}
      />
    </Modal>
  );
};

export default ScheduleModal;
