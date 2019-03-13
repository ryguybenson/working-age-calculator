
export function Calender(month, day, year) {
  this.month=month;
  this.day=day;
  this.year=year;
}
Calender.prototype.checkYear = function() {
  if ((this.year % 4 === 0) && (this.year % 100 !== 0) || (this.year % 400 === 0)) {
      return true
  } else {
      return false;
  }
}

Calender.prototype.checkMonth = function() {
  if (this.month === 3) {
    return true
  } else {
    return false;
  }
}

Calender.prototype.checkDay = function() {
  if (this.day < 31) {
    return true
  }else  {
      return false;
  }
}


//  export class Calender {
//   constructor(month, day, year) {
//     this.month=month;
//     this.day=day;
//     this.year=year;
//   }
//   checkYear() {
//     if ((this.year % 4 === 0) && (this.year % 100 !== 0) || (this.year % 400 === 0)) {
//         return true
//     } else {
//         return false;
//     }
//   }
// }
