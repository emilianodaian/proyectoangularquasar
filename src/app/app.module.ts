import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { InferiorComponent } from './inferior/inferior.component';
import { FormcontactoComponent } from './formcontacto/formcontacto.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlidebarComponent,
    InferiorComponent,
    FormcontactoComponent,
    IniciosesionComponent,
    PageNotFoundComponent,
    AdminComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
