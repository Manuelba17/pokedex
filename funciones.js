import { getPokemonByName } from "./getPokemonByName.js";
import { getPokemons } from "./getPokemons.js";
import { $li, d, url } from "./pokedex.js";

export const funciones = () => {
    d.addEventListener("click", (e) =>{

        if(e.target.matches('#todos')){
            while ($li.firstChild) {
                $li.removeChild($li.firstChild);
              }
            getPokemons(url)
        }

       if(e.target.matches('.escucha')){
        const $nombrePokemon = e.target.nextElementSibling.textContent //
        getPokemonByName($nombrePokemon).then(data => {
            
        })
       }

    })
}