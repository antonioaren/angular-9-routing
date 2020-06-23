import { Component, OnInit, OnChanges } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pokemon: any = {};

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemon = (await this.pokemonService.getPokemonById(id)).data;
  }


}
