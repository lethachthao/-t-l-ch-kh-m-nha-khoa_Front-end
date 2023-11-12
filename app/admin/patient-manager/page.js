'use client';

import withAuth from '@/hocs/withAuth';

const BookingManager = () => {
  return <div>BookingManager</div>;
};

export default withAuth({ role: ['doctor'] })(BookingManager);
