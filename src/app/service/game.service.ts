import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  colors: string[] = [
    "red", "green", "blue", "yellow", "purple", "orange", "pink", "brown",
    "cyan", "magenta", "indigo", "violet", "lime", "teal", "gold", "silver",
    "beige", "coral", "navy", "olive", "turquoise"
  ];
  gameSequence: string[] = [];
  playerSequence: string[] = [];


  constructor() { }

  generateSequence(round: number): void {
    const minColors = 2;
    const sequenceLength = Math.max(round, minColors);
    console.log("sequenceLength........" , sequenceLength)

    const shuffledColors = [...this.colors].sort(() => Math.random() - 0.5);

    while (this.gameSequence.length < sequenceLength) {
      const newColor = shuffledColors.find(color => !this.gameSequence.includes(color));
      if (newColor) {
        this.gameSequence.push(newColor);
      }
    }
  }


  CheckingAnswers(RandomColor: string[]): boolean {
    console.log('Generated sequence:', RandomColor);
    if (RandomColor.length !== this.playerSequence.length) {
      console.log("length not")
      return false;
    }
    const isMatching = RandomColor.every((value, index) => value === this.playerSequence[index]);

    if (isMatching) {
      console.log("true")
      return true;
    } else {
      console.log("false")
      return false;
    }
  }

  CalcScore(endTime : number ,startTime : number ,score : number ): number {
    endTime = Date.now();
    const elapsedTime = (endTime - startTime) / 1000;
    console.log("elapsedTime" , elapsedTime);
    const timeBonus = Math.max(0, 15 - elapsedTime) * 10;
    console.log("timeBonus" , timeBonus);
    score += 50 + Math.floor(timeBonus);
    return score ;
  }
}
