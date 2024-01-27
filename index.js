let container = document.querySelector(".container");

//TITLE
let title = document.createElement("h1");
title.innerHTML = "CALCULATOR";
title.id = "title";
container.appendChild(title);

//paragraph
let paragraph = document.createElement("p");
paragraph.id = "description";
paragraph.innerHTML = "This is simple calculator using dom";
container.appendChild(paragraph);
paragraph.style = "display:none";

//input box

let inputbox = document.createElement("input");
inputbox.type = "text";
inputbox.className = "inputbox";
inputbox.id = "result";
inputbox.value = "";
container.appendChild(inputbox);

//clear button
let clearButton = document.createElement("button");
clearButton.innerHTML = "c";
clearButton.className = "button";
clearButton.id = "clear";
container.appendChild(clearButton);
clearButton.addEventListener("click", function onscreen(val) {
  inputbox.value = "";
});

//button div
let buttondiv = document.createElement("div");
buttondiv.className = "buttondiv";
container.appendChild(buttondiv);

// 1 button row
let buttonrow_one = document.createElement("div");
buttondiv.appendChild(buttonrow_one);
//7
let seven = document.createElement("button");
seven.innerHTML = "7";
seven.className = "button";
seven.id = "7";
buttonrow_one.appendChild(seven);
seven.addEventListener("click", function onscreen(val) {
  inputbox.value = inputbox.value + 7;
});
//8
let eight = document.createElement("button");
eight.innerHTML = "8";
eight.className = "button";
eight.id = "8";
buttonrow_one.appendChild(eight);
eight.addEventListener("click", function onscreen(val) {
  inputbox.value = inputbox.value + 8;
});

//9
let nine = document.createElement("button");
nine.innerHTML = "9";
nine.className = "button";
nine.id = "9";
buttonrow_one.appendChild(nine);
nine.addEventListener("click", function onscreen(val) {
  inputbox.value = inputbox.value + 9;
});
//divide
let divide = document.createElement("button");
divide.innerHTML = "/";
divide.className = "button";
buttonrow_one.appendChild(divide);
divide.addEventListener("click", function onscreen(val) {
  inputbox.value = inputbox.value + "/";
});

// 2 button row
let buttonrow_two = document.createElement("div");
buttondiv.appendChild(buttonrow_two);
//4
let four = document.createElement("button");
four.innerHTML = "4";
four.className = "button";
four.id = "4";
buttonrow_two.appendChild(four);
four.addEventListener("click", function onscreen(val) {
  inputbox.value = inputbox.value + 4;
});
//5
let five = document.createElement("button");
five.innerHTML = "5";
five.className = "button";
five.id = "5";
buttonrow_two.appendChild(five);
five.addEventListener("click", function onscreen(val) {
  inputbox.value = inputbox.value + 5;
});
//6
let six = document.createElement("button");
six.innerHTML = "6";
six.id = "6";
six.className = "button";
buttonrow_two.appendChild(six);
six.addEventListener("click", function onscreen(val) {
  inputbox.value = inputbox.value + 6;
});
//multiply
let multiply = document.createElement("button");
multiply.innerHTML = "*";
multiply.className = "button";
buttonrow_two.appendChild(multiply);
multiply.addEventListener("click", function onscreen(val) {
  inputbox.value = inputbox.value + "*";
});

// 3 button row
let buttonrow_three = document.createElement("div");
buttondiv.appendChild(buttonrow_three);
//1
let one = document.createElement("button");
one.innerHTML = "1";
one.className = "button";
one.id = "1";
buttonrow_three.appendChild(one);
one.addEventListener("click", function onscreen(val) {
  inputbox.value = inputbox.value + 1;
});
//2
let two = document.createElement("button");
two.innerHTML = "2";
two.className = "button";
two.id = "2";
buttonrow_three.appendChild(two);
two.addEventListener("click", function onscreen(val) {
  inputbox.value = inputbox.value + 2;
});
//3
let three = document.createElement("button");
three.innerHTML = "3";
three.className = "button";
three.id = "3";
buttonrow_three.appendChild(three);
three.addEventListener("click", function onscreen(val) {
  inputbox.value = inputbox.value + 3;
});
//minus
let minus = document.createElement("button");
minus.innerHTML = "-";
minus.className = "button";
minus.id = "subtract";
buttonrow_three.appendChild(minus);
minus.addEventListener("click", function onscreen(val) {
  inputbox.value = inputbox.value + "-";
});

// 4 button row
let buttonrow_four = document.createElement("div");
buttondiv.appendChild(buttonrow_four);
//dot
let dot = document.createElement("button");
dot.innerHTML = ".";
dot.className = "button";
buttonrow_four.appendChild(dot);
dot.addEventListener("click", function onscreen(val) {
  inputbox.value = inputbox.value + ".";
});
//0
let zero = document.createElement("button");
zero.innerHTML = "0";
zero.className = "button";
zero.id = "0";
buttonrow_four.appendChild(zero);
zero.addEventListener("click", function onscreen(val) {
  inputbox.value = inputbox.value + 0;
});
//plus
let plus = document.createElement("button");
plus.innerHTML = "+";
plus.className = "button";
plus.id = "add";
buttonrow_four.appendChild(plus);
plus.addEventListener("click", function onscreen(val) {
  inputbox.value = inputbox.value + "+";
});
// equals
let equals = document.createElement("button");
equals.innerHTML = "=";
equals.className = "button";
equals.id = "equal";
buttonrow_four.appendChild(equals);
equals.addEventListener("click", function result() {
  try {
    let result = eval(inputbox.value);
    inputbox.value = result;
  } catch (err) {
    alert("Invalid input");
    inputbox.value = "";
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "7") {
    inputbox.value = inputbox.value + 7;
  } else if (event.key === "8") {
    inputbox.value = inputbox.value + 8;
  } else if (event.key === "9") {
    inputbox.value = inputbox.value + 9;
  } else if (event.key === "4") {
    inputbox.value = inputbox.value + 4;
  } else if (event.key === "5") {
    inputbox.value = inputbox.value + 5;
  } else if (event.key === "6") {
    inputbox.value = inputbox.value + 6;
  } else if (event.key === "1") {
    inputbox.value = inputbox.value + 1;
  } else if (event.key === "2") {
    inputbox.value = inputbox.value + 2;
  } else if (event.key === "3") {
    inputbox.value = inputbox.value + 3;
  } else if (event.key === "0") {
    inputbox.value = inputbox.value + 0;
  } else {
    alert("Only numbers are allowed");
  }
});
