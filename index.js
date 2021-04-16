// write your code here

function squareNumber(number) {
  let sqrNum = number * number;
  console.log("The result of squaring the number " + number + " is " + sqrNum);
  return sqrNum;
}

function halfNumber(number) {
  let hlfNum = number / 2;
  console.log("Half of " + number + " is " + hlfNum);
  return hlfNum;
}

function percentOf(num1, num2) {
  let prctNum = num1 / num2;
  console.log(num1 + " is " + prctNum + " of " + num2);
  return prctNum;
}

function areaOfCircle(radius) {
  let areaNum = Math.PI * squareNumber(radius);
  console.log("The area for a circle with radius " + radius + " is " + areaNum);
  return areaNum;
}

function allTogether(number) {
  let half = halfNumber(number),
    squared = squareNumber(half),
    area = areaOfCircle(squared),
    percent = percentOf(area, squared);
}

//////

let sqrButton = document.getElementById("square-button");
sqrButton.addEventListener("click", function () {
  let number = document.getElementById("square-input").value;
  let solution = document.getElementById("solution");
  solution.innerHTML = squareNumber(number);
});

let hlfButton = document.getElementById("half-button");
hlfButton.addEventListener("click", function () {
  let number = document.getElementById("half-input").value;
  let solution = document.getElementById("solution");
  solution.innerHTML = halfNumber(number);
});

let percentButton = document.getElementById("percent-button");
hlfButton.addEventListener("click", function () {
  let num1 = document.getElementById("percent1-input").value;
  let num2 = document.getElementById("percent2-input").value;
  let solution = document.getElementById("solution");
  solution.innerHTML = percentOf(num1, num2);
});

let areaButton = document.getElementById("area-button");
hlfButton.addEventListener("click", function () {
  let radius = document.getElementById("area-input").value;
  let solution = document.getElementById("solution");
  solution.innerHTML = areaOfCircle(radius);
});
///
