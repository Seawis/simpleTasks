// @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)
const takeOldest = (users, value = 1) => {
    const sorted = _.sortBy(users, [(o) => Date.parse(o.birthday)]);
    sorted.splice(value);
    return sorted;
  };
  export default takeOldest;
// END
