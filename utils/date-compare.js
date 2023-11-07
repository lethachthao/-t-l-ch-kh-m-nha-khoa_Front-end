import moment from 'moment';

export const isSameDate = (date1, date2) => {
  return (
    moment(date1).format('DD/MM/YYYY') === moment(date2).format('DD/MM/YYYY')
  );
};
