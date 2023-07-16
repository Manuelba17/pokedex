import { $li, d } from "./pokedex.js";

export const getPokemons = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then(({ results }) => {
      results.map((pokemon) => {
        const $ul = d.createElement("ul");
        $li.appendChild($ul);
        $ul.setAttribute("class", "pokemonCard");
        

        fetch(pokemon.url)
          .then((response) => response.json())
          .then((data) => {
            const peso = (data.weight * 100) / 1000;
            const altura = (data.height * 10) / 100;
           
           const tipos = data.types.map(tipos => tipos.type.name)             
          
           
            $ul.innerHTML = `
           <div class='escucha'>
                      </div>
                <h3 class=nombrePokemon>${data.name}</h3>

                <img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png  />
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
                    ${tipos.map( types => {
                      return `<span class="${types} types_pokemon">${types} </span>`
                    }).join(' ')}
                    </div>
                </div>
                
                </div>
           
            `;
          });
      });
    });
};
