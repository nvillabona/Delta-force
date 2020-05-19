import { FilterUserPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterUserPipe();
    expect(pipe).toBeTruthy();
  });
});
