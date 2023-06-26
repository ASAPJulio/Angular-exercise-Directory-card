import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsCardComponent } from './details-card/details-card.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'DetailsContact/:item', component: DetailsCardComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

