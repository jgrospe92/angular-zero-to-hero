import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ImageListingComponent } from '../feature/image-listing/image-listing.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'welcome', component: HomeComponent},
  {path: 'images', component: ImageListingComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // for debugging only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
