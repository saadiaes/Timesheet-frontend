import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {User} from "../model/user.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {
  }

  public getUser(): Observable<Array<User>> {
    return this.http.get<Array<User>>(environment.backendHost + "/user")
  }

  public searchUsers(keyword: string): Observable<Array<User>> {
    return this.http.get<Array<User>>(environment.backendHost + "/user/search?keyword=" + keyword)
  }

  public saveUser(user: User): Observable<User> {
    return this.http.post<User>(environment.backendHost + "/user", user);


  }

  public deleteUser(id: number) {
    return this.http.delete(environment.backendHost + "/user/" + id);
  }





}