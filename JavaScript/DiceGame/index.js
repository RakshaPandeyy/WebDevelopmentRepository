function start() {
  console.log("game sstarted");

  document.getElementById("p1play").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
}
function restart() {
  // console.log("game refreshed");

  window.location.reload();
}

function p1Play() {
  console.log("player 1 plays");

  let score = Number(document.getElementById("p1score").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;
  console.log(DF);

//   switch(DF){
//    case 1 : { 
//     document.getElementById("p1dice").src = imgname
//    }
//   }

  if (DF === 6) {
    document.getElementById("p2play").disabled = false;
    document.getElementById("p1play").disabled = true;
  } else {
    score = score + DF;

    document.getElementById("p1score").innerText = score;
  }
}

function p2Play() {
  console.log("player 2 plays");

  let score = Number(document.getElementById("p2score").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;
  console.log(DF);

  if (DF === 6) {
    document.getElementById("p1play").disabled = false;
    document.getElementById("p2play").disabled = true;
  } else {
    score = score + DF;

    document.getElementById("p2score").innerText = score;
  }
}
