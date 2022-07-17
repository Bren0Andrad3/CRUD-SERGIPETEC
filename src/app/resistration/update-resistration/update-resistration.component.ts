import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Resistration } from 'src/app/shared/models/resistration.model';
import { ResistrationService } from '../services/resistration.service';

@Component({
  selector: 'app-update-resistration',
  templateUrl: './update-resistration.component.html',
  styleUrls: ['./update-resistration.component.css']
})
export class UpdateResistrationComponent implements OnInit {
  @ViewChild ('formResistration') formResistration! : NgForm;
  resistration! : Resistration;
  generate: boolean = false

  constructor(
    private resistrationService: ResistrationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id']
    const res = this.resistrationService.GetById(id);
    if(res!== undefined){
      this.resistration = res;
    }else{
      throw new Error("Cadastro não encontrado: id = " + id);
    }
  }

  update(): void{
    if(this.formResistration.form.valid){
      this.resistrationService.update(this.resistration)
      this.router.navigate(['resistration']);
    }
  }
  generateInput(){
    this.generate = true
  }

}


