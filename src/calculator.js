
export class Age {

  constructor(age){
    this.age = age;
    this.expected = 80;
  }
//PLANET AGE CALCULATOR FUNCTIONS
mercuryChecker() {
  let age = this.age;
  const mercury = 0.24;
  let decimalAge = (age * mercury);
  let answer = Math.floor(decimalAge);
  return answer;
}
venusChecker() {
  let age = this.age;
  const venus = 0.62;
  let decimalAge = (age * venus);
  let answer = Math.floor(decimalAge);
  return answer;
}
marsChecker() {
  let age = this.age;
  const mars = 1.88;
  let decimalAge =  (age * mars);
  let answer = Math.floor(decimalAge);
  return answer;
}
jupiterChecker() {
  let age = this.age;
  const jupiter = 11.86;
  let decimalAge =  (age * jupiter);
  let answer = Math.floor(decimalAge);
  return answer;
}

  //PLANET LIFE EXPECTANCY FUNCTIONS
  mercuryLifeChecker() {
    let age = this.age;
    const mercury = 0.24;
    const answer = (age * mercury);
    const expected = this.expected;

    if (answer < expected) {
      let remainingAge = (expected - answer);
      let remaining = Math.floor(remainingAge);
      return remaining;
    } else {
      let remainingAge = (answer - expected);
      let remaining = Math.floor(remainingAge);
      return remaining;
    }
  }
  venusLifeChecker() {
    let age = this.age;
    const mercury = 0.62;
    const answer = (age * mercury);
    const expected = this.expected;

    if (answer < expected) {
      let remainingAge = (expected - answer);
      let remaining = Math.floor(remainingAge);
      return remaining;
    } else {
      let remainingAge = (answer - expected);
      let remaining = Math.floor(remainingAge);
      return remaining;
    }
  }
  marsLifeChecker() {
    let age = this.age;
    const mercury = 1.88;
    const answer = (age * mercury);
    const expected = this.expected;

    if (answer < expected) {
      let remainingAge = (expected - answer);
      let remaining = Math.floor(remainingAge);
      return remaining;
    } else {
      let remainingAge = (answer - expected);
      let remaining = Math.floor(remainingAge);
      return remaining;
    }
  }
  jupiterLifeChecker() {
    let age = this.age;
    const mercury = 11.86;
    const answer = (age * mercury);
    const expected = this.expected;

    if (answer < expected) {
      let remainingAge = (expected - answer);
      let remaining = Math.floor(remainingAge);
      return remaining;

    } else {
      let remainingAge = (answer - expected);
      let remaining = Math.floor(remainingAge);
      return remaining;
    }
  }

}
