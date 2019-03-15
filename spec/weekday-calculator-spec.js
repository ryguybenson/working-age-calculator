import { Age } from './../src/calculator.js';


describe ('Age', function() {

  it('should return a normal mercury age', function() {
    let age = new Age(20)
    expect(age.mercuryChecker()).toEqual(22);
  })
})
