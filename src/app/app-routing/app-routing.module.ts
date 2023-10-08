import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ImageListingComponent } from '../feature/image-listing/image-listing.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { ImageDetailComponent } from '../feature/image-listing/image-detail.component';
import { imageDetailGuard } from '../feature/image-listing/image-detail.guard';

const appRoutes: Routes = [
  {path: 'welcome', component: HomeComponent},
  {path: 'images', component: ImageListingComponent},
  {
    path: 'images/:id',
    component: ImageDetailComponent,
    canActivate: [imageDetailGuard]
  },
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
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
