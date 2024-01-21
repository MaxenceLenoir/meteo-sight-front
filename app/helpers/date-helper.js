import { helper } from '@ember/component/helper';

export default helper(function dateHelper(params) {
  const date = new Date(params[0]);
  return date.toDateString();
});
