import {
  sort,
  comparator,
  lt
} from 'ramda';

export const sortByProp = (p: string , list: Array<any>) =>
  sort(comparator((a, b) => lt(a[p], b[p])) , list);
