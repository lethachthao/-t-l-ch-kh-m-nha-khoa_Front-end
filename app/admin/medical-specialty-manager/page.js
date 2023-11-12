'use client';

import { Alert, Button } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';
import MedicalSpecialtyList from './_components/medical-specialty-list';
import { useToggle } from '@/hooks/use-toggle';
import MedicalSpecialtyModal from './_components/modal/medical-specialty';
import { useAddMedicalSpecialty } from '../_hooks/use-add-medical-specialty';
import { useMedicalSpecialty } from './_hooks/use-medical-specialty';
import withAuth from '@/hocs/withAuth';

const MedicalSpecialty = () => {
  const {
    toggleState,
    on: openMedicalSpecialtyModal,
    off: cancelMedicalSpecialtyModal,
  } = useToggle(false);

  const { data, isLoading, isError } = useMedicalSpecialty();
  const { mutate: addMedicalSpecialty, isPending: isSubmitting } =
    useAddMedicalSpecialty();

  const addMedicalSpecialtyHandler = (_, formData) => {
    addMedicalSpecialty(formData, {
      onSuccess: () => {
        cancelMedicalSpecialtyModal();
      },
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Alert message="Xảy ra lỗi trong quá trình tải các chuyên khoa" />;
  }

  return (
    <div>
      <div className="mb-8">
        <Button
          type="primary"
          icon={<FileAddOutlined />}
          onClick={openMedicalSpecialtyModal}
        >
          Thêm chuyên khoa
        </Button>
      </div>

      <MedicalSpecialtyList data={data.data} />

      <MedicalSpecialtyModal
        isOpen={toggleState}
        isSubmitting={isSubmitting}
        data={null}
        onSubmit={addMedicalSpecialtyHandler}
        onCancel={cancelMedicalSpecialtyModal}
      />
    </div>
  );
};
export default withAuth({ role: ['admin'] })(MedicalSpecialty);
