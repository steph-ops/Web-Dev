import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Question {
  question: string;
  options: string[];
  reponse: string;
  answered: boolean;
}

@Component({
  selector: 'app-game',
    standalone: true, 
    imports: [FormsModule,CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  
  questions: Question[] = [
    {
      question: 'Quel est le plus grand océan du monde ?',
      options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'],
      reponse: 'Pacifique',
      answered: false
    },
    {
      question: "Quelle est la capitale de l'Algerie ?",
      options: ['Alger', 'Tunis', 'Tanja'],
      reponse: 'Alger',
      answered: false
    },
    {
      question: 'Quelle est la couleur du ciel ?',
      options: ['Bleu', 'Vert', 'Rouge'],
      reponse: 'Bleu',
      answered: false
    }
  ];

  score = 0;
  correctCount = 0;
  wrongCount = 0;

  selectedAnswer = "";

  timer = 10;
  interval: any;
  currentQuestionIndex = 0;

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timer = 10;

    this.interval = setInterval(() => {
      this.timer--;

      if (this.timer <= 0) {
        clearInterval(this.interval);
        this.autoFailCurrentQuestion();
      }
    }, 1000);
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.startTimer();
    } else {
      clearInterval(this.interval);
    }
  }

  onSelectOption(option: string, question: Question) {
    if (question.answered) return;

    question.answered = true;

    if (option === question.reponse) {
      this.score += 10;
      this.correctCount++;
    } else {
      this.score -= 5;
      this.wrongCount++;
    }

    clearInterval(this.interval);
    this.nextQuestion();
  }

  submitTypedAnswer(question: Question) {
    if (question.answered) return;

    question.answered = true;

    if (this.selectedAnswer.toLowerCase() === question.reponse.toLowerCase()) {
      this.score += 10;
      this.correctCount++;
    } else {
      this.score -= 5;
      this.wrongCount++;
    }

    this.selectedAnswer = "";
    clearInterval(this.interval);
    this.nextQuestion();
  }

  autoFailCurrentQuestion() {
    let q = this.questions[this.currentQuestionIndex];

    if (!q.answered) {
      q.answered = true;
      this.score -= 5;
      this.wrongCount++;
    }

    this.nextQuestion();
  }
}
