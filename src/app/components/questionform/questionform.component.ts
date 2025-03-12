import { Component, inject, Input } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { QuizService } from '../../services/quiz.service';
import { CommonModule } from '@angular/common';

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
  selector: 'app-questionform',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './questionform.component.html',
  styleUrl: './questionform.component.scss',
})
export class QuestionformComponent {
  quizService = inject(QuizService);
  isVisible:boolean=false;
  text:string = 'Add';

  @Input() topic: string = '';
  questionForm!: FormGroup;
  newQuestion: Question = {
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
    selectedOption: '',
    isCorrect: false,
    exam: '',
    subtopic: '',
  };

  constructor(private fb: FormBuilder, private firestore: Firestore) {
    this.questionForm = this.fb.group({
      question: ['', Validators.required],
      option1: ['', Validators.required],
      option2: ['', Validators.required],
      option3: ['', Validators.required],
      option4: ['', Validators.required],
      correctAnswer: ['', Validators.required],
      exam: ['', Validators.required],
      subtopic: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.questionForm.value);
    this.newQuestion.question = this.questionForm.value.question;
    this.newQuestion.option1 = this.questionForm.value.option1
    this.newQuestion.option2 = this.questionForm.value.option2
    this.newQuestion.option3 = this.questionForm.value.option3
    this.newQuestion.option4 = this.questionForm.value.option4
    this.newQuestion.answer = this.questionForm.value.correctAnswer
    this.newQuestion.exam = this.questionForm.value.exam
    this.newQuestion.subtopic = this.questionForm.value.subtopic

    this.quizService.addQuestion(this.topic,this.newQuestion);

  }
  openForm(){
    this.isVisible = !this.isVisible; 
    this.text=!this.isVisible?"Add":"❌";
   }
}



