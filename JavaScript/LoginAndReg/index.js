function Login() {
  console.log("Login button clicked");

  const em = document.getElementById("loginEmail").value; //const =final so that nothing can change it .value to fetch value
  console.log("My email is" + em);

  const ps = document.getElementById("loginPassword").value;
  console.log(ps);

  alert("login done");

  document.getElementById("loginEmail").value = ""; //to mark those fields empty again after clicking
  document.getElementById("loginPassword").value = "";
}
function Register() {
  console.log("Register button clicked");

  const rm = document.getElementById("regName").value;
  console.log("Your Name is: " + rm);

  
}
