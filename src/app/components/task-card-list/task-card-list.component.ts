import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../../Question';
import { TaskStatusEnum } from './task-status.enum';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-card-list',
  templateUrl: './task-card-list.component.html',
  styleUrls: ['./task-card-list.component.css']
})
export class TaskCardListComponent implements OnInit {

  @Input() question: Question;

  questions: Question[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getQuestions().subscribe((questions) => this.questions = questions);
  }

  cardList: Question[] = [
    {
      logosrc: "Locked.png",
      state: TaskStatusEnum.LOCKED,
      isLocked: true,
      text: "1",
      questionContent: "",
      answerContent: ""
    },
    {
      logosrc: "src/assets/Ask/png",
      state: TaskStatusEnum.ASK,
      isLocked: false,
      text: "2",
      questionContent: "",
      answerContent: ""
    },
    {
      logosrc: "src/assets/Answer.png",
      state: TaskStatusEnum.ANSWER,
      isLocked: false,
      text: "3",
      questionContent: "",
      answerContent: ""
    },
    {
      logosrc: "src/assets/Asked.png",
      state: TaskStatusEnum.ASKED,
      isLocked: false,
      text: "4",
      questionContent: "",
      answerContent: ""
    },
    {
      logosrc: "src/assets/Answered.png",
      state: TaskStatusEnum.ANSWERED,
      isLocked: false,
      text: "5",
      questionContent: "",
      answerContent: ""
    }
  ];

  getState(state: TaskStatusEnum): string {
    return state.toString();
  }

  getQuestions(){ //TODO implement the API call to the JSON Server
    this.taskService.getQuestions()
  }

  clickCard(question: Question) {
    console.log("Skrrt Skrrt")
  }

}
