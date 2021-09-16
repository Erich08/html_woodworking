"use strict";

function bigImg(x) {
  x.style.height = "400px";
  x.style.width = "400px";
}

function normalImg(x) {
  x.style.height = "200px";
  x.style.width = "300px";
}

function annoyingprompt() {
  let coder = prompt("Who is the best coder? Hint: Erich.");
  let bestCoder = "Erich";

  while (bestCoder != coder) {
    coder = prompt("Who is the best coder? Hint: Erich.");
  }

  if (bestCoder == coder) {
    alert("That is correct! How did you know?");
  } else if (bestCoder != coder) {
    alert("That is incorrect please try again.");
  }
}

function tableImages() {
  let i = 0;
  while (i === 0) {
    let table = Number(
      prompt("How many tables would you like to display? Max 5, min 1.")
    );
    if (Math.round(table) < 1 || Math.round(table) > 5 || Number.isNaN(table)) {
      alert("Invalid answer, please try again.");
    } else {
      for (let ii = 0; ii < Math.round(table); ii++) {
        document.write(
          '<img src="https://i0.wp.com/decoratoo.com/wp-content/uploads/2018/12/DIY-Pallet-Projects-25.jpg?w=736&ssl=1" alt="dogbowl">'
        );
      }
      i++;
    }
  }
}
