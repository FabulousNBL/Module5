import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryComponent} from "./dictionary/dictionary.component";
import {MeaningComponent} from "./meaning/meaning.component";


const routes: Routes = [
  {path: '', component: DictionaryComponent},
  {path: 'detail/:word', component: MeaningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
