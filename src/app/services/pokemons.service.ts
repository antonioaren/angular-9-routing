import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {take} from 'rxjs/operators'
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }


  getAllPokemon(): Promise<any> {
    return axios.get('https://pokeapi.co/api/v2/pokemon');
  }

  getPokemonById(id: string) : Promise<any> {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}


