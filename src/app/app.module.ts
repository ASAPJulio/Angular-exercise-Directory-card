import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IdentityCardComponent } from './identity-card/identity-card.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { DetailsCardComponent } from './details-card/details-card.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IdentityCardComponent,
    ListContactsComponent,
    DetailsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
