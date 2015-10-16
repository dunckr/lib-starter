import expect from 'expect'
import describedSpec from '../src';

describe('index', () => {

  it('should return a list of features', () => {
    expect(describedSpec().length).toBe(6);
  });

});
