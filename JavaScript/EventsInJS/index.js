function On() {
  document.getElementById("bulb").style.backgroundColor = "yellow";
}

function Off() {
  document.getElementById("bulb").style.backgroundColor = "white";
}
function Red() {
  document.getElementById("bulb").style.backgroundColor = "Red";
}
function Green() {
  document.getElementById("bulb").style.backgroundColor = "Green";
}
function Blue() {
  document.getElementById("bulb").style.backgroundColor = "Blue";
}

const userColor = document.getElementById("color");

console.log(userColor).value;

userColor.addEventListener("change", () => changeBulbColour(userColor.value));

//callback fn : always non parameterized, no parantheses, only called when execution is rqrd
//any default fn can be changed to call back by removing{}

function changeBulbColour(color) {
  document.getElementById("bulb").style.backgroundColor = color;
}

function sbcontrol() {
  const btn = document.getElementById("sbbtn");
  if (btn.innerText === "on") {
    document.getElementById("sbbtn").innerText = "off";
    document.getElementById("smartbulb").classList.add("on");
  }else {
    document.getElementById("sbbtn").innerText = "on";
    document.getElementById("smartbulb").classList.remove("on");
  }
}

function sbcontrol2(){
    document.getElementById("smartbulb").classList.toggle("on");
}
