import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {ProjetService} from "../services/projet.service";

import {Projet} from "../model/projet.model";

@Component({
  selector: 'app-new-projet',
  templateUrl: './new-projet.component.html',
  styleUrls: ['./new-projet.component.css']
})
export class NewProjetComponent implements OnInit {
  newProjetFormGroup!:FormGroup;

  constructor( private fb:FormBuilder,private projetService:ProjetService) { }

  ngOnInit(): void {
    this.newProjetFormGroup = this.fb.group({
      name: this.fb.control(null, [Validators.required]),
      status: this.fb.control(null, [Validators.required]),
      date_debut: this.fb.control(null, [Validators.required]),
      date_fin: this.fb.control(null, [Validators.required]),


    })
  }
    handleSaveProjet() {

      let projet:Projet=this.newProjetFormGroup.value;
      this.projetService.saveProjet(projet).subscribe({
        next:data=>{
          alert("Project has been successfully saved!");

        },
        error:err=>{
          console.log(err);

        }
      })

    }



}






