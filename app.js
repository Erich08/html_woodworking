"use strict";

let month = new Date();
let currentMonth = month.getMonth();

let day = new Date();
let currentDay = day.getDay();

let hour = new Date();
let currentHour = hour.getHours();

let minutes = new Date();
let currentMinutes = minutes.getMinutes();

let date = new Date();
let currentDate = date.getDate();

let seconds = new Date();
let currentSeconds = seconds.getSeconds();
//Utilizing a switch statement instead of if...else if to be more efficient
switch (currentMonth) {
  case 0:
    currentMonth = "January";
    break;
  case 1:
    currentMonth = "February";
    break;
  case 2:
    currentMonth = "March";
    break;
  case 3:
    currentMonth = "April";
    break;
  case 4:
    currentMonth = "May";
    break;
  case 5:
    currentMonth = "June";
    break;
  case 6:
    currentMonth = "July";
    break;
  case 7:
    currentMonth = "August";
    break;
  case 8:
    currentMonth = "September";
    break;
  case 9:
    currentMonth = "October";
    break;
  case 10:
    currentMonth = "November";
  case 11:
    currentMonth = "December";
    break;
  default:
    currentMonth = "???";
}

switch (currentDay) {
  case 0:
    currentDay = "Sunday";
    break;
  case 1:
    currentDay = "Monday";
    break;
  case 2:
    currentDay = "Tuesday";
    break;
  case 3:
    currentDay = "Wednesday";
    break;
  case 4:
    currentDay = "Thursday";
    break;
  case 5:
    currentDay = "Friday";
    break;
  case 6:
    currentDay = "Saturday";
    break;
  default:
    currentDay = "???";
}

//Time displays as a single digit for minutes if less than 10(example: 17:1 instead of 17:01). Added this to correct the issue because I could not find a better solution.

//Commented out because it doesn't seem to be working. Leaving to asking questions later.
/*if (currentMinutes === 0) {
  currentMinutes = 00;
} else if (currentMinutes === 1) {
  currentMinutes = 01;
} else if (currentMinutes === 2) {
  currentMinutes = 02;
} else if (currentMinutes === 3) {
  currentMinutes = 03;
} else if (currentMinutes === 4) {
  currentMinutes = 04;
} else if (currentMinutes === 5) {
  currentMinutes = 05;
} else if (currentMinutes === 6) {
  currentMinutes = 06;
} else if (currentMinutes === 7) {
  currentMinutes = 07;
} else if (currentMinutes === 8) {
  currentMinutes = 08;
} else if (currentMinutes === 9) {
  currentMinutes = 09;
}

if (currentSeconds === 0) {
  currentSeconds = 00;
} else if (currentSeconds === 1) {
  currentSeconds = 01;
} else if (currentSeconds === 2) {
  currentSeconds = 02;
} else if (currentSeconds === 3) {
  currentSeconds = 03;
} else if (currentSeconds === 4) {
  currentSeconds = 04;
} else if (currentSeconds === 5) {
  currentSeconds = 05;
} else if (currentSeconds === 6) {
  currentSeconds = 06;
} else if (currentSeconds === 7) {
  currentSeconds = 07;
} else if (currentSeconds === 8) {
  currentSeconds = 08;
} else if (currentSeconds === 9) {
  currentSeconds = 09;
}*/

let timeDay = `Date: ${currentDay}, ${currentMonth} ${currentDate}. Time: ${currentHour}:${currentMinutes}:${currentSeconds}.`;

document.querySelector("p").innerHTML = `${timeDay}`;
console.log(timeDay);
