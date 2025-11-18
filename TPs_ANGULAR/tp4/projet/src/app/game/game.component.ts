import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Question {
  question: string;
  options: string[];
  reponse: string;
  answered: boolean;
  correct?: boolean;
}

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  score: number = 0;
  currentIndex: number = 0;

  selectedOption: string | null = null;

  questions: Question[] = [
    {
      question: "Capital de la France ?",
      options: ["Paris", "Madrid", "Berlin"],
      reponse: "Paris",
      answered: false
    },
    {
      question: "Résultat de 5 * 3 ?",
      options: ["8", "15", "10"],
      reponse: "15",
      answered: false
    },
    {
      question: "Langage utilisé par Angular ?",
      options: ["C#", "TypeScript", "Python"],
      reponse: "TypeScript",
      answered: false
    }
  ];

  get currentQuestion(): Question {
    return this.questions[this.currentIndex];
  }

  isCorrect(option: string, q: Question): boolean {
    return option === q.reponse;
  }

  isSelected(option: string): boolean {
    return option === this.selectedOption;
  }

  onSelectOption(option: string, question: Question) {
    if (question.answered) return;

    this.selectedOption = option;
    question.answered = true;
    question.correct = option === question.reponse;

    if (question.correct) this.score += 10;
    else this.score -= 5;

    // passer à la question suivante après 1 seconde
    setTimeout(() => {
      this.selectedOption = null;
      if (this.currentIndex < this.questions.length - 1) {
        this.currentIndex++;
      }
    }, 1000);
  }

  allAnswered(): boolean {
    return this.questions.every(q => q.answered);
  }
}
