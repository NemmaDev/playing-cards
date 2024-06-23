import { CommonModule } from '@angular/common';
import { Component, computed, inject, model, signal } from '@angular/core';
import { PlayingCardsComponent } from '../../components/playing-cards/playing-cards.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { Monster } from '../../models/monster.model';
import { MonsterService } from '../../services/monster/monster.service';

@Component({
  selector: 'app-monster-list',
  standalone: true,
  imports: [CommonModule, PlayingCardsComponent, SearchBarComponent],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css'
})
export class MonsterListComponent {
  monsterService= inject(MonsterService);
  
  monsters= signal<Monster[]>([]) ; 
  search=model('');
  filteredMonster= computed(()=> {
    return this.monsters().filter(monster=> monster.name.includes(this.search()))
  })
  
  constructor() {
   this.monsters.set(this.monsterService.getAll());

    
  }
  addMonster(){
    const genericMonster = new Monster();
    this.monsterService.add(genericMonster);
    this.monsters.set(this.monsterService.getAll());
  }
  
}
