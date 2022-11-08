import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcontactoComponent } from './formcontacto/formcontacto.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'contacto', component: FormcontactoComponent },
  { path: 'iniciosesion', component: IniciosesionComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
