import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { StructureComponent } from './structure/structure.component';
import { DynamiqueComponent } from './dynamique/dynamique.component';

const routes: Routes = [
  {path:"", component: AccueilComponent},
  {path: "structure", component: StructureComponent},
  {path: "dynamique", component: DynamiqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
