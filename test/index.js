import expect from 'expect'
import describeSpec from '../src';

describe('index', function() {

  it('should return message', function() {
    expect(describeSpec()).toBe('Hello World');
  });

});
