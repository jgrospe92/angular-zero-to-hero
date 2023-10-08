import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageListingComponent } from './feature/image-listing/image-listing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { StarComponent } from './shared/star/star/star.component';
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageListingComponent,
    PageNotFoundComponent,
    StarComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
