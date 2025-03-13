import { Component, inject, Input } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { CommonModule } from '@angular/common';
import { QuestioncardComponent } from "../questioncard/questioncard.component";

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
  selector: 'app-quiz',
  imports: [CommonModule, QuestioncardComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  @Input()questions:Question[]=[];

  checkAns(question:Question,selectedOption:string){
    console.log("here")
    if(!question.selectedOption){
      question.selectedOption = selectedOption;
      question.isCorrect = selectedOption === question.answer;
    }
  }

  selectOption(question: any, selected: string) {
    question.selectedOption = selected; // Store selected option
    question.isCorrect=true
    console.log('Selected Option:', selected);
  }

}
