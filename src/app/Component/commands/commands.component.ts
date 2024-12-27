import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GameService } from '../../service/game.service';

@Component({
  selector: 'app-commands',

  templateUrl: './commands.component.html',
  styleUrl: './commands.component.css'
})
export class CommandsComponent {

  @Input() IsPlay!: boolean;
  @Input() EndGame!: boolean;
  @Input() countdown!: number;

  @Output() startGame = new EventEmitter<void>();
  @Output() resetGame = new EventEmitter<void>();
  @Output() resetPlayerSequence = new EventEmitter<void>();
  @Output() checkSequence = new EventEmitter<void>();

  constructor(public gameService: GameService) {}

  onStartGame() {
    this.startGame.emit();
  }

  onRestGame() {
    this.resetGame.emit();
  }

  onResetPlayerSequence() {
    this.resetPlayerSequence.emit();
  }

  onIsGood() {
    this.checkSequence.emit();
  }
}
