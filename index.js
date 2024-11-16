const dayElement = document.getElementById("day");
const weekdayElement = document.getElementById("weekday");
const monthElement = document.getElementById("month");
const yearElement = document.getElementById("year");

// Get current date
const today = new Date();

// Array of weekday and month names
const weekdayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Set the day, weekday, month, and year
dayElement.innerText = today.getDate();
weekdayElement.innerText = weekdayNames[today.getDay()];
monthElement.innerText = monthNames[today.getMonth()];
yearElement.innerText = today.getFullYear();
