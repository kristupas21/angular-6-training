import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Array<Hero>;
  selectedHero: Hero;
 
  constructor(private heroService: HeroService) {
    
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes)
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}
