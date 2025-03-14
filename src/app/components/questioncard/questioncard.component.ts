import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Question {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
  selectedOption: string;
  isCorrect: boolean;
  exam: string;
  subtopic: string;
}

@Component({
  selector: 'app-questioncard',
  imports: [CommonModule],
  templateUrl: './questioncard.component.html',
  styleUrl: './questioncard.component.scss',
})
export class QuestioncardComponent {
  isSelected: boolean = false;

  iscloseDetail: boolean = true;
  @Input() questionNo!: number;
  @Input() question!: Question;

  checkAnswer(option: string) {
    this.question.selectedOption = option;
    this.question.isCorrect =
      this.question.selectedOption.trim() === this.question.answer.trim()
        ? true
        : false;
    this.isSelected = true;
  }

  closeDetails() {
    this.iscloseDetail = false;
  }
}
