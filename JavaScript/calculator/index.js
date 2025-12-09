function Input(char) {
  if (char === "=") {
    try {
      const exp = document.getElementById("screen").value;
      document.getElementById("screen").value = eval(exp);
    } catch (error) {
      alert("Invalid Expreession");
      document.getElementById("screen").value = "";
    }
  } else if (char === "C") {
    document.getElementById("screen").value = "";
  } else {
    document.getElementById("screen").value =
      document.getElementById("screen").value + char;
  }
}
document.addEventListener("keypress", (abc) => {
  console.log("Pressed key", abc.key);

  if (abc.key === "Enter") {
    Input("=");
  } else if (
    abc.key === "1" ||
    abc.key === "2" ||
    abc.key === "3" ||
    abc.key === "4" ||
    abc.key === "5" ||
    abc.key === "6" ||
    abc.key === "7" ||
    abc.key === "8" ||
    abc.key === "9" ||
    abc.key === "0" ||
    abc.key === "+" ||
    abc.key === "-" ||
    abc.key === "*" ||
    abc.key === "/"
  ) {
    Input(abc.key);
  } else if (abc.key === "Backspace") {
    Input("C");
  }
});
