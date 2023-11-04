import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { ImageModule } from '../feature/image.module';


const appRoutes: Routes = [
  {path: 'welcome', component: HomeComponent, data: {animation: 'homePage'}},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // for debugging only
    ),
    ImageModule,

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
