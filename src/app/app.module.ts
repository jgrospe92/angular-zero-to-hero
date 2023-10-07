import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageListingComponent } from './feature/image-listing/image-listing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageListingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
