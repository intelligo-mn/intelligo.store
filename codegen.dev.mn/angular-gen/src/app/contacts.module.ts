import { CommonModule } from '@angular/common';
import { Contacts01Component } from './contacts/contacts-01.component';
import { Contacts02Component } from './contacts/contacts-02.component';
import { Contacts03Component } from './contacts/contacts-03.component';
import { Contacts04Component } from './contacts/contacts-04.component';
import { Contacts05Component } from './contacts/contacts-05.component';
import { Contacts06Component } from './contacts/contacts-06.component';
import { Contacts07Component } from './contacts/contacts-07.component';
import { Contacts08Component } from './contacts/contacts-08.component';
import { Contacts09Component } from './contacts/contacts-09.component';
import { Contacts10Component } from './contacts/contacts-10.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Contacts01Component,
    Contacts02Component,
    Contacts03Component,
    Contacts04Component,
    Contacts05Component,
    Contacts06Component,
    Contacts07Component,
    Contacts08Component,
    Contacts09Component,
    Contacts10Component
  ],
  exports: [
    Contacts01Component,
    Contacts02Component,
    Contacts03Component,
    Contacts04Component,
    Contacts05Component,
    Contacts06Component,
    Contacts07Component,
    Contacts08Component,
    Contacts09Component,
    Contacts10Component
  ]
})
export class ContactsModule { }