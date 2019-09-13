// esta é uma função de exemplo
// veja como agregamos a função ao objeto global window

/*const example = () => {
  return "example";
};

window.example = example;*/


const POKEMONS = POKEMON.pokemon;

for (let poke of POKEMONS){
  document.write(`${poke.name}<br>`);
  var name = document.getElementById("test");
  name.innerHTML += '<name = "${poke.name}">';
  
}


































