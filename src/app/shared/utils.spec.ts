import {sortByProp} from './utils';

describe('sortByProp()', () => {
  it('should sort an array of objects by a named property', () => {
    const elements = [
      { id: 0, title: 'b '},
      { id: 1, title: 'a '},
      { id: 2, title: 'c '},
      { id: 4, title: 'b '},
    ];

    expect(sortByProp('title', elements)).toEqual([
      { id: 1, title: 'a '},
      { id: 0, title: 'b '},
      { id: 4, title: 'b '},
      { id: 2, title: 'c '},
    ]);
  });
});

