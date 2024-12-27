import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {GameService} from "../../service/game.service";



@Component({
  selector: 'app-score',
  standalone: true,
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent  {

  @Input() countdown!: number;
  @Input() message!: string;
  @Input() score!: number;


  constructor( public gameService: GameService) {


  }






}
