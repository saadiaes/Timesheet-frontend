import { Component, OnInit } from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";

import {FormBuilder, FormGroup} from "@angular/forms";

import {ProjetService} from "../services/projet.service";
import {Projet} from "../model/projet.model";


@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  projet !: Observable<Array<Projet>>;
  errorMessage!: object;

  searchFormGroup: FormGroup | undefined;

  constructor( private projetService: ProjetService, private fb: FormBuilder )
  {}

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control("")
    });
    this.handleSearchprojets();
  }
  handleSearchprojets() {
    let kw = this.searchFormGroup?.value.keyword;
    this.projet = this.projetService.searchProjets(kw).pipe(
        catchError(err => {
          this.errorMessage = err.message;
          return throwError(err);
        })
    );
  }

   handleDeleteProjet(p: Projet) {
      let conf=confirm("Are you sure?");
      if(!conf)return;
      this.projetService.deleteProjet(p.id).subscribe({
        next: (resp) => {
          this.projet = this.projet.pipe(
              map( data=>{
                let index=data.indexOf(p);
                data.slice(index,1)
                return data;
              })
          );

        },


        error:err=>{
          console.log(err);
        }
      })

   }

}




