function Input(char) {
  if (char === "=") {
    try{
        const exp = document.getElementById("screen").value;
    document.getElementById("screen").value = eval(exp);
    }
    catch(error){
        alert("Invalid Expreession");
        document.getElementById("screen").value = "";
    }
  } else if (char === "C") {
    document.getElementById("screen").value = "";
  } else {
     document.getElementById("screen").value = document.getElementById("screen").value + char;
  }
}
