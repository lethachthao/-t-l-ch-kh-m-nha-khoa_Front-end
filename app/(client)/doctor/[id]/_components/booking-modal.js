import { Modal } from 'antd';
import BookingForm from './booking-form';

export default function BookingModal({
  isOpen,
  isSubmitting,
  onCancel,
  onSubmit,
  booking,
}) {
  return (
    <Modal
      open={isOpen}
      onCancel={onCancel}
      centered
      title="Đặt lịch khám"
      footer={null}
      destroyOnClose
    >
      <BookingForm
        isSubmitting={isSubmitting}
        booking={booking}
        onSubmit={onSubmit}
      />
    </Modal>
  );
}
