let facts=["Chuck Norris a déjà compté jusqu'à l'infini. Deux fois", 
"Google, c'est le seul endroit où tu peux taper Chuck Norris...", 
"Certaines personnes portent un pyjama Superman. Superman porte un pyjama Chuck Norris.",
"Chuck Norris donne fréquemment du sang à la Croix-Rouge. Mais jamais le sien.",
"Chuck Norris et Superman ont fait un bras de fer, le perdant devait mettre son slip par dessus son pantalon.",
"Chuck Norris ne se mouille pas, c'est l'eau qui se Chuck Norris.",
"Chuck Norris peut gagner une partie de puissance 4 en trois coups.",
"Un jour, Chuck Norris a perdu son alliance. Depuis c'est le bordel dans les terres du milieu...",
"Jesus Christ est né en 1940 avant Chuck Norris.",
"Chuck Norris ne porte pas de montre. Il décide de l'heure qu'il est."];

console.log(facts);

function randomFact(){
    return facts[ Math.floor( Math.random()*10)];
}

function modifieQuote(){
    let quote = document.getElementById("quote"); 
    console.log(quote); 
    quote.textContent = randomFact();   
}

let r = Math.floor(Math.random*256);
let g = Math.floor(Math.random*256);
let b = Math.floor(Math.random*256);

function randomColor(){
    return (`${r},${g},${b}`);
}

