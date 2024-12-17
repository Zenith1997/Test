Date.prototype.daysTo = function (date) {
  if (!(date2 instanceof Date)) {
    throw new Error("The argument must be a valid Date object");
  }

  let Difference_In_Time = date.getTime() - this.getTime();

  let Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
  return Difference_In_Days < 0
    ? Math.abs(Difference_In_Days)
    : Difference_In_Days;
};

let date2 = new Date("01/1/2024 00:00:00");
let date1 = new Date("01/2/2024 12:00:00");

console.log(date1.daysTo(date2));
