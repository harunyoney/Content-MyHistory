

let month = Number(prompt ("Enter the month (1-12)" ))
let day = Number (prompt ("Enter the month (1-31)"))


console.log("mount"+ month , "day" + day);


if ((month <1 || month > 12) || (day < 1 || day > 31)) {
    alert ("Invalid input. Please enter a valid month (1-12) and day (1-31).") }

    else if ((month == 2 && day >= 21) || (month > 2 && month < 6)) {
        console.log("spring");
      } else if ((month >= 6 && month < 9) || (month == 9 && day <= 21)) {
        console.log("summer");
      } else if (
        //   (month == 9 && day >= 22) ||
        month >= 9 ||
        (month == 12 && day <= 20)
      ) {
        console.log("Fall");
      } else {
        console.log("Winter");
      }

let year = +prompt( "23");
// let year = 0

      if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0) && (year !== 0)) {
        console.log(`${year} is a leap year`);
      } else {
        0;
        console.log(`${year} is not a leap year`);
      }
