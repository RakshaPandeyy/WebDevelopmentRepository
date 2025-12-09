document.getElementById("c1").addEventListener("mouseenter", ()=> {
fillcolor("pink");
});

fillcolor(color){
    document.getElementById("bulb").style.backgroundColor = color;
}