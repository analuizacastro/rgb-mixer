window.addEventListener("load", render());

function render(){
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    
    let outputR = document.querySelector('#outputR');
    let outputG = document.querySelector('#outputG');
    let outputB = document.querySelector('#outputB');

    outputR.textContent = red;
    outputG.textContent = green;
    outputB.textContent = blue;
    
    let rgb = `rgb(${red}, ${green}, ${blue})`;
    document.querySelector('.square-1').style.background = rgb;
}

