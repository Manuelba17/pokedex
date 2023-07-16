import { getPokemonByName } from "./getPokemonByName.js";
import { $li, d } from "./pokedex.js";

export let buscars;

export const buscar = () => {
  const $valor = d.getElementById("pokemon");
  d.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    if ($valor.value === "") return;

    getPokemonByName($valor.value).then((data) => {
      const peso = (data.weight * 100) / 1000;
      const altura = (data.height * 10) / 100;
      const tipos = data.types.map((tipos) => tipos.type.name);

      while ($li.firstChild) {
        $li.removeChild($li.firstChild);
      }
      const $ul = d.createElement("ul");
      $ul.setAttribute("class", "pokemonCard");

      $li.appendChild($ul);

      $ul.innerHTML = `
           
            <h3 class=nombrePokemon >${data.name}</h3>

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png"  />
            <div class="caracteristicas">
                <div class=about_card>
                    <span>About</span>
                    <div>
                        <span class="mdi mdi-weight-kilogram "></span>
                        <span>${peso} Kg</span>
                    </div>
                    <div>
                        <span class="mdi mdi-human-male-height"></span>
                        <span>${altura} m</span>
                        
                        
                    </div>
                </div>

            <div class=types_card>
                <span style="font-weight: 700;">Types</span>
                <div>
                ${tipos
                  .map((types) => {
                    return `<span class="${types} types_pokemon" >${types} </span>`;
                  })
                  .join(" ")}
                </div>
            </div>
            
            </div>
       
           
            `;
    }).catch((err) => alert("Pokemon no existe" +err));;

    $valor.value = "";
  });
};
