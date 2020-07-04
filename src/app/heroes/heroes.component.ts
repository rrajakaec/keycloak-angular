import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { HeroesApiService } from '../service/heroes.api.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [{
    id: 1,
    name: 'Rintu'
  }];

  constructor(private heroesapiservice: HeroesApiService) { }

  ngOnInit() {
    this.heroesapiservice.getHeroes().subscribe(
      (data) => {
        console.log('Rintu Here ======= ', data);
        this.heroes = data;
      }
    );
  }

}
