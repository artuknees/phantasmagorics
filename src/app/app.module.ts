import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { LayoutModule } from './layout/layout.module';
import { GalleryItemComponent } from './projects/galleryItem/galleryItem.component';
import { ProductComponent } from './product/product.component';
import { GenericProjectComponent } from './projects/genericProject/genericProject.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    TermsComponent,
    GalleryItemComponent,
    ProductComponent,
    GenericProjectComponent
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
