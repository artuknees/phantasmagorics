import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { Proyect131w82Component } from './projects/proyect131w82/proyect131w82.component';
import { Project141w85Component } from './projects/project141w85/project141w85.component';
import { Project301w118Component } from './projects/project301w118/project301w118.component';
import { ProjectHotelComponent } from './projects/project-hotel/project-hotel.component';
import { ProjectStatusComponent } from './projects/project-status/project-status.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    Proyect131w82Component,
    Project141w85Component,
    Project301w118Component,
    ProjectHotelComponent,
    ProjectStatusComponent,
    AboutComponent,
    TermsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
