import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import {Projet} from "../model/projet.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})

export class ProjetService {

  constructor(private http: HttpClient) {
  }


  public searchProjets(keyword: string): Observable<Array<Projet>> {
    return this.http.get<Array<Projet>>(environment.backendHost + "/projet/search?keyword=" + keyword)
  }


  public deleteProjet(id: number) {
    return this.http.delete(environment.backendHost + "/projet/" + id);

  }

  public getProjet(): Observable<Array<Projet>> {
   return this.http.get<Array<Projet>>(environment.backendHost + "/projet")
}



public saveProjet(projet: Projet): Observable<Projet> {
 return this.http.post<Projet>(environment.backendHost + "/projet", projet);


}
}
