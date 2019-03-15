import { Age } from './../src/calculator.js';


describe ('Age', function() {

  it('should return a normal mercury age', function() {
    let age = new Age(20)
    expect(age.mercuryChecker()).toEqual(4.8);
  })
  it('should return a normal mercury age', function() {
    let age = new Age(20)
    expect(age.venusChecker()).toEqual(12.4);
  })
  it('should return a normal mercury age', function() {
    let age = new Age(20)
    expect(age.marsChecker()).toEqual(37.6);
  })
  it('should return a normal mercury age', function() {
    let age = new Age(20)
    expect(age.jupiterChecker()).toEqual(237.2);
  })
})
