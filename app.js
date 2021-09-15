"use strict";

function bigImg(x) {
  x.style.height = "400px";
  x.style.width = "400px";
}

function normalImg(x) {
  x.style.height = "200px";
  x.style.width = "300px";
}

function bestCoderEver() {
  let bestCoder = prompt("Who is the best coder in the world? Hint: Erich");
  let codeGod = "Erich";
  if (codeGod.toLowerCase() === bestCoder) {
    alert("That's correct! How did you know?");
  } else if (codeGod.toLowerCase() != bestCoder) {
    prompt("That is incorrect. Please try again. Hint: Erich.");
  }
}
