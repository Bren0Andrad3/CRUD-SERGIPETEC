import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertResistrationComponent } from './resistration/insert-resistration/insert-resistration.component';
import { ListResistrationComponent } from './resistration/list-resistration/list-resistration.component';
import { UpdateResistrationComponent } from './resistration/update-resistration/update-resistration.component';
import { Resistration } from './shared/models/resistration.model';

const routes: Routes = [
  {
  path:'',
  redirectTo: 'resistration/list',
  pathMatch: "full"},

  {path:'resistration',
  redirectTo: 'resistration/list'},

  {path:'resistration/list',
  component: ListResistrationComponent},

  {path:'resistration/novo',
  component: InsertResistrationComponent},

  {path:'resistration/editar/:id',
  component: UpdateResistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
