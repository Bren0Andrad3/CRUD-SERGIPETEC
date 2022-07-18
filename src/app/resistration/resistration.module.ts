import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResistrationService } from './services/resistration.service';
import { ListResistrationComponent } from './list-resistration/list-resistration.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InsertResistrationComponent } from './insert-resistration/insert-resistration.component';
import { UpdateResistrationComponent } from './update-resistration/update-resistration.component';



@NgModule({
  declarations: [
    ListResistrationComponent,
    InsertResistrationComponent,
    UpdateResistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ResistrationService
  ]
})
export class ResistrationModule { }
