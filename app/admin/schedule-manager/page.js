'use client';

import ScheduleForm from './_components/form/schedule-form';
import { useAddSchedule } from './_hooks/use-add-schedule';
import { useDoctors } from './_hooks/use-doctors';

const ScheduleManager = () => {
  const { data: doctors } = useDoctors();
  const { mutate: addSchedule } = useAddSchedule();

  const addScheduleHandler = (data) => {
    addSchedule(data);
  };

  return (
    <div className="w-[800px] mx-auto bg-white rounded-lg shadow p-4">
      <ScheduleForm doctors={doctors?.data} onSubmit={addScheduleHandler} />
    </div>
  );
};

export default ScheduleManager;

// còn 1 số cái cân phân tích
