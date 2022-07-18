import { Component, OnInit } from '@angular/core';
import { Resistration } from 'src/app/shared/models/resistration.model';
import { ResistrationService } from '../services/resistration.service';

@Component({
  selector: 'app-list-resistration',
  templateUrl: './list-resistration.component.html',
  styleUrls: ['./list-resistration.component.css']
})
export class ListResistrationComponent implements OnInit {

  resistrations: Resistration[] = []

  constructor(private resistrationService: ResistrationService) { }

  ngOnInit(): void {
    this.resistrations = this.GetAll();
  }

  GetAll(): Resistration[] {
    return this.resistrationService.GetAll();

  }
  remove($event: any, resistration: Resistration): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o cadastro ${resistration.name}?`)) {
      this.resistrationService.remove(resistration.id!)
      this.resistrations = this.GetAll();

    }
  }

}
