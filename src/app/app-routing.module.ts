import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './component/list/list.component';
import { DocumentComponent } from './component/document/document.component';


const routes: Routes = [
  {path:"", component:ListComponent},
  {path:"list", component:ListComponent},
  {path:"document", component:DocumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
