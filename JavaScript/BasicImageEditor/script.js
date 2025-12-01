let b = 1,
  c = 1,
  g = 0,
  s = 0,
  i = 0;

const img = document.getElementById("img");

console.log(img);

if (img.src === "http://127.0.0.1:5500/JavaScript/BasicImageEditor/index.html#") {
  document.getElementById("img").style.display = "none";
}
function uploadImage() {
  const file = document.getElementById("upload").files[0];
  console.log(file);

  const fileURL = URL.createObjectURL(file);

  document.getElementById("img").src = fileURL;
  document.getElementById("img").style.display = "block";
  document.getElementById("uploadLabel").style.display = "none";
}

function applyFilter() {
  document.getElementById("img").style.filter = `brightness($b),
  constrast($c)`;
}

function changeBrightness() {
  const value = document.getElementById("brightness").value;
  b = (value * 2) / 100;
}

function changeContrast() {
  const value = document.getElementById("contrast").value;
  document.getElementById("img").style.filter = `contrast(${
    (value * 2) / 100
  })`;
}-/

function changeGreyscale() {
  const value = document.getElementById("greyscale").value;
  document.getElementById("img").style.filter = `grayscale(${value})`;
}

function changeSepia() {
  const value = document.getElementById("sepia").value;
  document.getElementById("img").style.filter = `sepia(${value})`;
}

function changeSaturation() {
  const value = document.getElementById("saturate").value;
  document.getElementById("img").style.filter = `saturate(${value})`;
}

function changeBlur() {
  const value = document.getElementById("blur").value;
  document.getElementById("img").style.filter = `blur(${value}px)`;
}

function changeInversion() {
  const value = document.getElementById("invert").value;
  document.getElementById("img").style.filter = `invert(${
    (value * 2) / 100
  }px)`;
}
