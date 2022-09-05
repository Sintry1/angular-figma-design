import { TaskStatusEnum } from "./app/components/task-card-list/task-status.enum";

export interface Question {
    logosrc: string;
    state: TaskStatusEnum;
    isLocked: Boolean;
    text: string;
    questionContent: string;
    answerContent: string;
}