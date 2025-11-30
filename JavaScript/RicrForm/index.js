function submit(){

     const selectedBatch = [];
     document.querySelectorAll("input[name='batch']:checked").forEach((element=>{
        selectedBatch.push(element.value)
     }));
     console.log(selectedBatch);


     const Na =document.getElementById("name").value;
     const mo =document.getElementById("mobile").value;
     const em =document.getElementById("email").value;
     const dob =document.getElementById("dob").value;
     const Qu =document.getElementById("qualifications").value;
     const sco =document.getElementById("score").value;
     const cou =document.getElementById("course").value;
     const Add =document.getElementById("address").value;
     const pi =document.getElementById("pin").value;
     const cit =document.getElementById("text").value;
     const Gna =document.getElementById("Gname").value;
     const Gmo =document.getElementById("Gmobile").value;
     const hduhau =document.getElementById("AI").value;
     const sr  =document.getElementById("special requirements").value;
     console.log( Na ,mo )}