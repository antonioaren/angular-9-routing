import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemons.service';

interface PokemonModel  {
   name:  string;
   url: string;
   id: string;
}

@Component({
  selector: 'master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  pokemons: PokemonModel[] = [];

  constructor(private pokemonServices: PokemonService) { }

  async ngOnInit(): Promise<void> {
    const pokedex = (await this.pokemonServices.getAllPokemon()).data;

    console.log({pokedex});

    this.pokemons = pokedex.results.map(pokemon => {
      const arrayUrlSplitted = pokemon.url.split('/');
      return {
        ...pokemon,
        id: arrayUrlSplitted[arrayUrlSplitted.length - 2]
      }
    });
    console.log(this.pokemons);
  }

}
