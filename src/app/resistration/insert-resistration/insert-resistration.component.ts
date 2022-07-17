import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Resistration } from 'src/app/shared/models/resistration.model';
import { ResistrationService } from '../services/resistration.service';

@Component({
  selector: 'app-insert-resistration',
  templateUrl: './insert-resistration.component.html',
  styleUrls: ['./insert-resistration.component.css']
})
export class InsertResistrationComponent implements OnInit {
  @ViewChild ('formResistration') formResistration! : NgForm;
  resistration! : Resistration
  generate: boolean = false
  
  constructor(
    private resistrationService: ResistrationService,
    private router: Router
  ) { }
   
  ngOnInit(): void {
    this.resistration = new Resistration();
    
  }

  insert(): void{
    if(this.formResistration.form.valid){
        this.resistrationService.insert(this.resistration)
        this.router.navigate(["/resistration/"])
    }
  }

  generateInput(){
    this.generate = true
  }

}
