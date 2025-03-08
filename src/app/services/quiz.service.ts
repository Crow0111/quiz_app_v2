import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Question{
  
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

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private firestore:Firestore) { 
  }

  async addQuestion(topic:string,question:Question){
    console.log(topic)
    const questionCollection = collection(this.firestore,topic);
    await addDoc(questionCollection,question);
    console.log("Question Added!")
  }

  getQuestion(topic:string) : Observable<any[]>{
    const collectionName = collection(this.firestore,topic);
    console.log("service"+topic)
    const fetchedData =  collectionData(collectionName);
    fetchedData.subscribe((data)=>{
      console.log(data)
    })
    return fetchedData;

  }
}
