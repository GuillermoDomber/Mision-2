// // function viSible() {
// //   const visibl = document.getElementById("bodySubtitle");
// //   visibl.style.visibility = `hidden`;
// // }

// let counterValue = document.getElementById("counter");
// let initial = 0;

// function incrementByOne() {
//   console.log("BEFORE", initial);
//   initial++;
//   console.log("AFTER", initial);
//   counterValue.textContent = initial;
// }

// // function decrementByOne() {
// //   console.log("BEFORE", initial);
// //   if (initial > 0) initial--;
// //   console.log("AFTER", initial);
// //   counterValue.textContent = initial;
// // }

// // function decrementByOne() {
// //   initial = 0;
// //   counterValue.textContent = initial;
// //   element.innerHTML = "Press the button to start the countdown --------->"

// // }

// let secs = 10;
// let element = document.getElementById("status");
// let button = document.getElementById("#button");

// function countDown() {
//   element.innerHTML = "You have " + secs + " seconds";
//   secs--;
//  if (secs != 0) {
//   setTimeout(countDown, 1000);
// // button.addEventListener("click", countDown);

//  }
//   // setTimeout(countDown, 1000);
//   if (secs === 0)
//   {
//     element.innerHTML = "<h2>Press the 'Reset' button and beat yourself!</h2>";
//     alert(`You've 'Clicked' ${initial} times!`);
//     secs = 10;}
//   // } else {
//   //   // secs = 10;

//   // }
// }

// function decrementByOne() {
//   initial = 0;
//   counterValue.textContent = initial;
//   element.innerHTML = "Press the button to start the countdown --------->"
// }

// // button.addEventListener("click", countDown);

let counterValue = document.getElementById("counter");
let initial = 0;

function incrementByOne() {
  console.log("BEFORE", initial);
  initial++;
  console.log("AFTER", initial);
  counterValue.textContent = initial;
}

let secs = 10;
let element = document.getElementById("status");

function countDown() {
  element.innerHTML = "You have " + secs + " seconds";
  secs--;
 if (secs != 0) {
  setTimeout(countDown, 1000);
 }
 if (secs <! 0)
  {
    element.innerHTML = "<h2>Press the 'Reset' button and beat yourself!</h2>";
    alert(`You've 'Clicked' ${initial} times!`);
    secs = 10;}

}

function decrementByOne() {
  initial = 0;
  counterValue.textContent = initial;
  element.innerHTML = "Press the button to start the countdown --------->"
}
