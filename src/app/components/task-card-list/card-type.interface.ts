import { TaskStatusEnum } from "./task-status.enum";

export interface CardType {
    logosrc: string;
    state: TaskStatusEnum;
    isLocked: Boolean;
    text: string;
    questionContent: string;
    answerContent: string;
}