import { Component } from '@angular/core';
import { ContactsService } from 'src/app/modules/dashboard/services/contacts.service';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  contacts: Contact[];
  p: number = 1;
  constructor(contactsService: ContactsService) {
    this.contacts = contactsService.getAll();
  }
}
