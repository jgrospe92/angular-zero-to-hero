import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDetailComponent } from './image-listing/image-detail.component';
import { imageDetailGuard } from './image-listing/image-detail.guard';
import { ImageListingComponent } from './image-listing/image-listing.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const imagesRoutes: Routes = [
  {path: 'images', component: ImageListingComponent, data: {animation: 'images'}},
  {
    path: 'images/:id',
    component: ImageDetailComponent,
    canActivate: [imageDetailGuard],
    data: {animation: 'image'}
  },
]

@NgModule({
  declarations: [
    ImageDetailComponent,
    ImageListingComponent
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forChild(imagesRoutes),
   
  ],
  exports: [
    RouterModule,
    SharedModule,
    BrowserAnimationsModule
  ]
})
export class ImageModule { }
