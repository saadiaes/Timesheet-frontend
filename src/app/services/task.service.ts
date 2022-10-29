import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {Task} from "../model/task.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TaskService
{


  constructor( private http: HttpClient) {

}
public getTask(): Observable<Array<Task>> {
  return this.http.get<Array<Task>>(environment.backendHost + "/task")
}

public searchTasks(keyword: string): Observable<Array<Task>> {
  return this.http.get<Array<Task>>(environment.backendHost + "/task/search?keyword=" + keyword)
}

public saveTask(task: Task): Observable<Task> {
  return this.http.post<Task>(environment.backendHost + "/task", task);


}

public deleteTask(id: number) {
  return this.http.delete(environment.backendHost + "/task/" + id);
}

}
