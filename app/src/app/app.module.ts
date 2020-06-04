import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact-list/contact/contact.component';
import { EditContactComponent } from './contact-list/contact/edit-contact/edit-contact.component';
import { ModalComponent } from './modal/modal.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { SortContactComponent } from './sort-contact/sort-contact.component';
import { ContactDataService } from './ContactData.service';
import { APP_BASE_HREF } from '@angular/common';


const appRoutes: Routes = [
  { path: '' , component: AddContactComponent },
  { path: 'contactList', component: ContactListComponent },
  { path: 'contactList/:index/:name/edit', component: EditContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ContactListComponent,
    ContactComponent,
    EditContactComponent,
    ModalComponent,
    BackdropComponent,
    SortContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContactDataService, {provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
