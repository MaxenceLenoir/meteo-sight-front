import { helper } from '@ember/component/helper';

export default helper(function dateHelper(params) {
  let temp = Math.floor(params[0]);

  return temp;
});
