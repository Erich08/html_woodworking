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
