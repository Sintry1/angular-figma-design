import { Component, OnInit } from '@angular/core';
import { CardType } from './card-type.interface';
import { TaskStatusEnum } from './task-status.enum';

@Component({
  selector: 'app-task-card-list',
  templateUrl: './task-card-list.component.html',
  styleUrls: ['./task-card-list.component.css']
})
export class TaskCardListComponent implements OnInit {

  cardList: CardType[] = [
    {
      logosrc: './assets/Ask.png',
      state: TaskStatusEnum.ASK,
      isLocked: true,
      text: "1",
      questionContent: ''
    },
    {
      logosrc: "",
      state: TaskStatusEnum.ASK,
      isLocked: false,
      text: "2",
      questionContent: ''
    },
    {
      logosrc: "",
      state: TaskStatusEnum.ANSWER,
      isLocked: false,
      text: "3",
      questionContent: 'Whatchu want?'
    },
    {
      logosrc: "",
      state: TaskStatusEnum.ASKED,
      isLocked: false,
      text: "4",
      questionContent: ''
    },
    {
      logosrc: "",
      state: TaskStatusEnum.ANSWERED,
      isLocked: false,
      text: "5",
      questionContent: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getState(state: TaskStatusEnum): string {
    return state.toString();
  }

  getQuestions(){ //TODO implement the API call to the JSON Server
    
  }

}
