"use strict";

// const tempArray = [10, 20, 30, 15, 8, 18, 34, 22, 6, 17];
// const myHeight = 50;

const barArray = [];
let barHeight = getNumberOfCustomers();
const allBars = document.querySelectorAll("#bar");

window.addEventListener("load", startApp);

function startApp() {
  setInterval(updateNumbersOfCustomers, 1000);
}

function updateNumbersOfCustomers() {
  barArray.push(barHeight);

  updateBarHeight();

  if (barArray.length == 40) {
    barArray.shift();
  }

  console.log(barArray);

  barHeight = getNumberOfCustomers();
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function updateBarHeight() {
  for (let i = 0; i < allBars.length; i++) {
    for (let j = 0; j < barArray.length; j++) {
      allBars[j].style.height = `${barArray[j]}%`;
    }
  }
}
