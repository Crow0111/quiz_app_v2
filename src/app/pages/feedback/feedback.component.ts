import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuizService } from '../../services/quiz.service';

interface Feeback{
  title: '', suggestion: ''
}

@Component({
  selector: 'app-feedback',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  feedback:Feeback = { title: '', suggestion: '' };

  quizservice = inject(QuizService);

  feedbackForm!:FormGroup;
  constructor(private fb:FormBuilder,private firestore:Firestore){
    this.feedbackForm = this.fb.group({
      title:['',Validators.required],
      suggestion:['',Validators.required]
    })
  }

  async submitFeedback() {
    this.feedback.title = this.feedbackForm.value.title;
    this.feedback.suggestion = this.feedbackForm.value.suggestion;
    this.quizservice.createFeedBack(this.feedback);
  }
}
