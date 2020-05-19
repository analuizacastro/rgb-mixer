window.addEventListener("load", start);

red.value=0;
green.value=0;
blue.value=0;

red.addEventListener("input", render());

function start(){
    render();
}

function render(){
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
    
    var outputR = document.querySelector('#outputR');
    var outputG = document.querySelector('#outputG');
    var outputB = document.querySelector('#outputB');

    outputR.textContent = red;
    outputG.textContent = green;
    outputB.textContent = blue;
    
    let rgb = `rgb(${red}, ${green}, ${blue})`;
    document.querySelector('.square-1').style.background = rgb;
}

