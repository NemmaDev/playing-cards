import { MonsterType, MonsterTypeProperties } from './../../utilis/monster.utilis';
import { Component, Input, InputSignal, OnChanges, OnInit, SimpleChanges, computed, input } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-cards',
  standalone: true,
  imports: [],
  templateUrl: './playing-cards.component.html',
  styleUrl: './playing-cards.component.css'
})
export class PlayingCardsComponent {
 
  monster= input(new Monster());
   MonsterTypeIcon= computed(()=>{
     return MonsterTypeProperties[this.monster().type].imageUrl;
   })
   backgroundColor = computed(()=>{
    return MonsterTypeProperties[this.monster().type].color;
  })

   
    
  }


