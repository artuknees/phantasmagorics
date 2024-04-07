import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './proyects/projects.component';
import { MenuComponent } from './menu/menu.component';
import { Proyect131w82Component } from './proyects/proyect131w82/proyect131w82.component';
import { Project141w85Component } from './proyects/project141w85/project141w85.component';
import { Project301w118Component } from './proyects/project301w118/project301w118.component';
import { ProjectHotelComponent } from './proyects/project-hotel/project-hotel.component';
import { ProjectStatusComponent } from './proyects/project-status/project-status.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    MenuComponent,
    Proyect131w82Component,
    Project141w85Component,
    Project301w118Component,
    ProjectHotelComponent,
    ProjectStatusComponent,
    AboutComponent,
    TermsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
