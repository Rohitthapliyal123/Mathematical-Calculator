// JAVASCRIPT FOR ALIVE CALCULATOR...

let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-red");
let equal = document.querySelector(".btn-green");

// SABSE PEHLE HUM CHAHTE HAI KI HMARE BUTTONS KI VALUE SCREEN MEIN SHOW HO...

buttons.forEach(function (Button) {
   Button.addEventListener("click", function (e) {
      // e is a pointer event  
      let value = e.target.dataset.num;
      screen.value += value;
   });
});

// LOGIC FOR EQUAL...

equal.addEventListener("click", function (e) {
   if (screen.value === "") {
      screen.value = "Please enter";
   } else {
      let answer = eval(screen.value);

      screen.value = answer;
   }
});

// Logic for clear...

clear.addEventListener("click", function (e) {
   screen.value = "";
});
