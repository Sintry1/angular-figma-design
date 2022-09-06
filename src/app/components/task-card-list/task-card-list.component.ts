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

  //@Input() question: Question;

  questions: Question[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getQuestions().subscribe((questions) => this.questions = questions);
    setTimeout(() => {
      console.log(this.questions);
    }, 1000)
  }

  cardList: Question[] = [
    {
      logosrc: "/assets/Locked.png",
      state: TaskStatusEnum.LOCKED,
      isLocked: true,
      text: "1",
      questionContent: "",
      answerContent: ""
    },
    {
      logosrc: "/assets/Ask.png",
      state: TaskStatusEnum.ASK,
      isLocked: false,
      text: "2",
      questionContent: "",
      answerContent: ""
    },
    {
      logosrc: "/assets/Answer.png",
      state: TaskStatusEnum.ANSWER,
      isLocked: false,
      text: "3",
      questionContent: "",
      answerContent: ""
    },
    {
      logosrc: "/assets/Asked.png",
      state: TaskStatusEnum.ASKED,
      isLocked: false,
      text: "4",
      questionContent: "",
      answerContent: ""
    },
    {
      logosrc: "/assets/Answered.png",
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

  getLogo(state: TaskStatusEnum) {
      switch(state){
      case TaskStatusEnum.LOCKED: 
        return "assets/Locked.png";
        break;
      case TaskStatusEnum.ASK:
        return "/assets/Ask.png";
        break;
      case TaskStatusEnum.ANSWER:
        return "/assets/Answer.png";
        break;
      case TaskStatusEnum.ASKED:
        return "/assets/Asked.png";
        break;
      case TaskStatusEnum.ANSWERED:
        return "/assets/Answered.png";
        break;
      default:
        return "Ya fucked up";
      }
    }

}
