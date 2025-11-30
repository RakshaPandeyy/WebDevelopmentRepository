const userColor = document.getElementById("bgcolor");

console.log(userColor.value);

userColor.addEventListener("change", () => changeBgColor(userColor.value));
function changeBgColor(bgcolor) {
  document.getElementById("child1").style.backgroundColor = bgcolor;
}

const userColor2 = document.getElementById("hcolor");

console.log(userColor2.value);

userColor2.addEventListener("change", () => changeHColor(userColor2.value));
function changeHColor(hcolor) {
  document.getElementById("h1id").style.color = hcolor;
}

const userColor3 = document.getElementById("pcolor");

console.log(userColor3.value);

userColor3.addEventListener("change", () => changePColor(userColor3.value));
function changePColor(pcolor) {
  document.getElementById("pid").style.color = pcolor;
}

