import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CardType } from '../../app/components/task-card-list/card-type.interface';
import { Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = 'http://localhost:5000/questions'

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<CardType> {
    return this.http.get<CardType>(this.apiURL);
  }

}
