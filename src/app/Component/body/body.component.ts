import { Component, QueryList, ViewChildren } from '@angular/core';
import { BoxColorComponent } from "../box-color/box-color.component";
import { GameService } from "../../service/game.service";


@Component({
  selector: 'app-body',
 // standalone: true,
 // imports: [BoxColorComponent, NgStyle, NgClass, CommandsComponent, ScoreComponent],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  gameSequence: string[] = [];
  randomizedSequence: string[] = [];
  containerWidth: number = 800;
  message: string = '';
  countdown: number = 0;
  StartAnswers: boolean = false;
  score: number = 0;
  Border: string = "";
  EndGame: boolean = false;
  Round: number = 2;
  startTime!: number;
  endTime!: number;
  IsPlay: boolean = false;
  RandomColor: string[] = []

  @ViewChildren(BoxColorComponent) boxComponents!: QueryList<BoxColorComponent>;

  constructor(public gameService: GameService) {

  }

  RestGame(): void {
    this.message = '';
    this.Round = 2
    this.gameService.gameSequence = []
    this.score = 0
    this.startGame()
  }

  startGame(): void {
    this.StartAnswers = false;
    this.IsPlay = true
    this.EndGame = false;
    this.countdown = 15;
    this.gameService.generateSequence(this.Round);
    this.gameSequence = this.gameService.gameSequence;
   // this.RandomColor = this.shuffleArray(this.gameSequence);
    this.RandomColor = this.gameService.gameSequence;
    this.randomizeSequence();
    this.displaySequence();
    console.log('Generated sequence:', this.RandomColor);
  }

  shuffleArray(array: string[]): string[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }


  randomizeSequence(): void {
    this.randomizedSequence = this.shuffleArray(this.gameSequence)
  }

  displaySequence(): void {

    let delay = 0;
    this.RandomColor.forEach((color) => {
      setTimeout(() => {
        const box = this.boxComponents.find((b) => b.color === color);
        if (box) {
          let highlightDuration = this.getHighlightDuration();
          box.highlight(highlightDuration);
        }
      }, delay);
      delay += 1000;
    });

    let countdownTimer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(countdownTimer);
        this.message = 'Start Answers.';
        this.StartAnswers = true;
        this.startTime = Date.now();
      }
    }, 1000);
  }


  getHighlightDuration(): number {
    let baseDuration = 500 - (this.gameSequence.length * 20);
    console.log("baseDuration" , baseDuration)
    let countdownFactor = 1 + (20 - this.countdown) * 0.1;
    console.log("countdownFactor" , countdownFactor)
    let finalDuration = Math.max(100, baseDuration / countdownFactor);
    console.log("finalDuration" , finalDuration)

    return finalDuration;
  }

  handlePlayerClick(color: string): void {
    this.gameService.playerSequence.push(color);
    console.log(this.gameService.playerSequence);
  }

  ResetPlayerSequence(): void {
    this.gameService.playerSequence = [];
  }


  IsGood(): void {

    if (this.gameService.CheckingAnswers(this.RandomColor)) {
      this.score = this.gameService.CalcScore(this.endTime ,this.startTime  ,this.score )
      this.Round++;
      this.startGame();
      this.message = '';
    } else {
      this.EndGame = true;
      this.message = `Game Over! Your final score is ${this.score}.`;
    }

    this.ResetPlayerSequence();
  }

  getDynamicSize(): number {
    const maxSize = 200;
    const minSize = 50;
    const sizeFactor = 9;
    return Math.max(minSize, maxSize - ((this.gameService.gameSequence.length - sizeFactor) * 10));
  }

  getColumnCount(): number {
    const boxSize = this.getDynamicSize();
    const cols = Math.floor(this.containerWidth / boxSize);
    return cols > 0 ? cols : 1;
  }
}
