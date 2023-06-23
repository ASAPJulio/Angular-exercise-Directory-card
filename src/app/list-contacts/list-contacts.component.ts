import { Component, OnInit} from '@angular/core';
import { ContactModel } from 'src/contact.model';
import { ContactService } from 'src/service/contact.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
})
export class ListContactsComponent implements OnInit {

  contactTab!: ContactModel[];

  constructor(private tmpContactService: ContactService) { }

  ngOnInit(): void {
    this.contactTab = this.tmpContactService.getContacts();
  }
}
