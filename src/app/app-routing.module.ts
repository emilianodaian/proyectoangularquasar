import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcontactoComponent } from './formcontacto/formcontacto.component';

const routes: Routes = [
  { path: 'frmContacto', component: FormcontactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
