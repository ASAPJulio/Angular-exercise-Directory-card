import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IdentityCardComponent } from './identity-card/identity-card.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentityCardComponent,
    ListContactsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
