'use client';

import { Button, Skeleton } from 'antd';
import { FileAddOutlined } from '@ant-design/icons';

import ScheduleModal from './_components/modal/schedule';
import ScheduleList from './_components/schedule-list';
import { useAddSchedule } from './_hooks/use-add-schedule';
import { useDoctors } from './_hooks/use-doctors';
import { useSchedules } from './_hooks/use-schedules';
import { useToggle } from '@/hooks/use-toggle';
import { useState } from 'react';
import { useUpdateSchedule } from './_hooks/use-update-schedule';
import withAuth from '@/hocs/withAuth';

const ScheduleManager = () => {
  const { data: schedules, isPending: isSchedulesPending } = useSchedules();
  const { data: doctorsSeed, isPending: isDoctorsSeedPending } = useDoctors();
  const { mutate: addSchedule, isPending: isSubmitting } = useAddSchedule();
  const { mutate: updateSchedule } = useUpdateSchedule();

  const {
    toggleState: isOpenScheduleModal,
    on: openScheduleModal,
    off: cancelScheduleModal,
  } = useToggle(false);

  const [editData, setEditData] = useState(null);

  const addScheduleHandler = (data, id, isUpdateMode) => {
    if (!isUpdateMode) {
      addSchedule(data, {
        onSuccess: cancelScheduleModal,
      });
      return;
    }

    updateSchedule(
      { id, data },
      {
        onSuccess: () => {
          cancelScheduleModal();
        },
      },
    );
  };

  const updateScheduleHandler = (data) => {
    openScheduleModal();
    setEditData(data);
  };

  if (isSchedulesPending) {
    return <Skeleton />;
  }

  return (
    <div>
      <div className="mb-8">
        <Button
          type="primary"
          icon={<FileAddOutlined />}
          onClick={openScheduleModal}
        >
          Thêm lịch trình
        </Button>
      </div>

      <ScheduleList
        schedules={schedules.data}
        onUpdate={updateScheduleHandler}
      />
      <ScheduleModal
        isOpen={isOpenScheduleModal}
        isSubmitting={isSubmitting}
        schedulesSeed={schedules?.data}
        doctorsSeed={doctorsSeed?.data}
        defaultData={editData}
        onSubmit={addScheduleHandler}
        onCancel={() => {
          if (editData) {
            setEditData(null);
          }

          cancelScheduleModal();
        }}
      />
    </div>
  );
};

export default withAuth({ role: ['admin'] })(ScheduleManager);
