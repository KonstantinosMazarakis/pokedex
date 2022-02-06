var pokemonName = document.querySelector("#pokemonName")
var screen = document.querySelector("#screen")
var Num = document.querySelector("#Num")
var Pname = document.querySelector("#Pname")
var Type = document.querySelector("#Type")
var Type2 = document.querySelector("#Type2")
var Weight = document.querySelector("#Weight")
var screen2 = document.querySelector("#screen2")
var Audio1 = document.querySelector("#Audio1")


Audio1.volume = 0.03;


async function search(){
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`);
    var coderData = await response.json();
// bugfixes -_-
Type.style.fontSize = "1rem";
Type2.style.fontSize = "1rem";
Type2.innerText = "";
// ------------------
Num.innerText = coderData.id;
Pname.innerText = coderData.name;
Type.innerText = coderData.types["0"]["type"].name;
Weight.innerText = coderData.weight;
screen2.innerHTML = `<img src="${coderData.sprites.front_default}" id="Photo" alt="photo">`
if(coderData.types["1"].slot == 2){
    Type2.innerText = ` ,${coderData.types["1"]["type"].name}`;
    Type.style.fontSize = "x-small";
    Type2.style.fontSize = "x-small";
}
}

function mStop(){
    Audio1.pause()
}

function mStart(){
    Audio1.play() 
}