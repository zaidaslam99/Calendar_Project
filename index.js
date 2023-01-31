const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

const monthInx = new Date().getMonth();

// Get the last day of each month
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();

// Get the last day of each month
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() + 5;

const months = [
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

// Get the month and date on the month class.
monthEl.innerText = months[monthInx];
fullDateEl.innerText = new Date().toDateString();

// Looping through to get the right numbers for the days.
let days = "";

for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}

for (let i = 0; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

// Set the days.
daysEl.innerHTML = days;
