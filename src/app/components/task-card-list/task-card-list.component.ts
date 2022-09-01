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
      logosrc: "",
      state: TaskStatusEnum.ASKED,
      isLocked: false,
      text: "1"
    },
    {
      logosrc: "",
      state: TaskStatusEnum.ASK,
      isLocked: false,
      text: "2"
    },
    {
      logosrc: "",
      state: TaskStatusEnum.ANSWER,
      isLocked: false,
      text: "3"
    },{
      logosrc: "",
      state: TaskStatusEnum.ANSWERED,
      isLocked: false,
      text: "4"
    },
    {
      logosrc: "",
      state: TaskStatusEnum.ANSWERED,
      isLocked: true,
      text: "5"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getClass(state: TaskStatusEnum): string {
    return state.toString();
  }

}
