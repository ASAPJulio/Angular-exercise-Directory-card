import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsCardComponent } from './details-card/details-card.component';
import { RouterModule, Routes } from '@angular/router';
import { ListContactsComponent } from './list-contacts/list-contacts.component';

const routes: Routes = [{path: 'detailsContact/:item', component: DetailsCardComponent},
                        {path: 'cardContact', component: ListContactsComponent}]

@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

