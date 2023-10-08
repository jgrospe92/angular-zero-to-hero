import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageListingComponent } from './feature/image-listing/image-listing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { StarComponent } from './shared/star/star/star.component';
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageDetailComponent } from './feature/image-listing/image-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageListingComponent,
    PageNotFoundComponent,
    StarComponent,
    ConvertToSpacesPipe,
    ImageDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
