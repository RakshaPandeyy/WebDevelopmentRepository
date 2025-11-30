function done() {
  console.log("submit button clicked");
 
  const name = document.getElementById("name").value; //const =final so that nothing can change it .value to fetch value
  console.log(name + "submitted");

  const contact = document.getElementById("contactnumber").value;
  console.log(contact);

  const email = document.getElementById("email").value;
  console.log(email);

  const Qualification = document.getElementById("Qualification").value;
  console.log(Qualification);

  const CollegeName = document.getElementById("SorCname").value;
  console.log(CollegeName);

  const year = document.getElementById("year").value;
  console.log(year);

  const branch = document.getElementById("branch").value;
  console.log(branch);

  const soi = document.getElementById("sourceofinfo").value;
  console.log(soi);
}
