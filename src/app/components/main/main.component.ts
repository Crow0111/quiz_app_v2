import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionformComponent } from "../questionform/questionform.component";
import { QuizService } from '../../services/quiz.service';
import { QuizComponent } from "../quiz/quiz.component";

@Component({
  selector: 'app-main',
  imports: [CommonModule, QuestionformComponent, QuizComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  quizService = inject(QuizService)
  questions:any[]=[]
  topic: string = '';
  isTopicSelected:boolean=false;
  topics = [
    {
      title: 'History',
      description: 'Explore the past through engaging quizzes.',
    },
    {
      title: 'Polity',
      description:
        'Test your knowledge of political structures and governance.',
    },
    {
      title: 'Geography',
      description: 'Discover the world with geography-based quizzes.',
    },
    {
      title: 'Economy',
      description: 'Challenge yourself with quizzes on economics and finance.',
    },
    {
      title: 'Physics',
      description: 'Learn about the laws of nature through physics quizzes.',
    },
    {
      title: 'Chemistry',
      description: 'Test your knowledge of elements, compounds, and reactions.',
    },
    {
      title: 'Biology',
      description: 'Explore life sciences with exciting biology quizzes.',
    },
  ];
   setTopic(topic:string){
    this.isTopicSelected=true;
    this.topic = topic.toLowerCase();
    console.log("here"+this.topic)
    this.quizService.getQuestion(this.topic).subscribe((data)=>{
      this.questions = data;
      console.log(this.questions)
    })
   }

}
