import { helper } from '@ember/component/helper';

export default helper(function dateHelper(params) {
  let time = new Date(params[0]).toLocaleTimeString();

  const hour = time.slice(0, 2);
  let hourShort = '';

  if (hour == '00') {
    hourShort = 'Midnight';
  } else if (hour == '12') {
    hourShort = 'Noon';
  } else if (hour < 12) {
    hourShort = `${parseInt(hour)} am`;
  } else {
    hourShort = `${hour - 12} pm`;
  }

  return hourShort;
});
