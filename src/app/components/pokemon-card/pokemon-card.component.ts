import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/model/Pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {

  @Input('pokemon')
  public pokemon: Pokemon;

  public leadingZero(str: string | Number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2))
    {
      s = '0' + s;
    }

    return s;
  }

}
