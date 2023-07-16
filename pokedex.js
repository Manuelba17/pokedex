import { buscar} from "./buscar.js";
import { funciones } from "./funciones.js";
import { getPokemons } from "./getPokemons.js";

export const d = document,
        $li = d.getElementById('pokemons')


export const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'

 d.addEventListener("DOMContentLoaded", () => {
   buscar()
   getPokemons(url)   
   funciones()
})




