const divCards = document.getElementById("list-cards");
const divFilter = document.getElementById("order-type");
const selectOrder = document.getElementById("order-name");
const inputFilterName = document.getElementById("input-name");
const stats = document.getElementById("percentage");

const dataPoke = POKEMON.pokemon;

window.onload = () => {
  showCards(dataPoke);
  populateDropdown(dataPoke);
};

const populateDropdown = (pokemons) => {
  const pokemonsType = pokemons.map(poke => poke.type).flat();
  const uniqueTypes = [...new Set(pokemonsType)];
  const optionsLayout = uniqueTypes.map(type => `
    <option value=${type}>${type}</option>`).join("");
  document.querySelector("#order-type").innerHTML = optionsLayout;
};

const showCards = (data) => {
  divCards.innerHTML = data.map(poke => `
    <section class="box">
      <h3 class="name-poke"> ${poke.name}</h3>
      <img class="image-poke" src=${poke.img} />
      <div class="content-card">
          <p><strong>Tipo:</strong> ${poke.type.join(", ")}</p>
          <p><strong>Ovo:</strong> ${poke.egg}</p>
          <p><strong>Chance:</strong> ${poke.avg_spawns} % </p>
          <p><strong>Fraquezas:</strong> ${poke.weaknesses.join(", ")}</p>   
      </div>
    </section>
  `).join("");
};

selectOrder.addEventListener("change", ({ target: { value }}) => {
  const functionOrdena = window.sortData(dataPoke, "name", value);
  value === "none" ? showCards(dataPoke) : showCards(functionOrdena);
});

divFilter.addEventListener("change", () => {
  const filtered = window.filterSearch(dataPoke, divFilter.value, "type");
  showCards(filtered);
  stats.innerHTML = `
    <p class="text-percentage">
      Os pokémons do tipo ${divFilter.value} representam ${statistics(filtered, dataPoke)}% dos pokemóns da primeira geração.
    </p>`;
});

divFilter.addEventListener("change", (e) => { 
  showCards(filterSearch(dataPoke, e.target.value, "type"));
});

inputFilterName.addEventListener("input", (e) => {
  showCards(filterSearch(dataPoke, inputFilterName.value.charAt(0).toUpperCase() + inputFilterName.value.slice(1), "name")); 
});