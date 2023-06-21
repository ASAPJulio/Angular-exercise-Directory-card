import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/contact.model';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  contactTab!: ContactModel[];

  ngOnInit(): void {

    this.contactTab = [
      {
        imageInfo: "/assets/img/fournisseur.png",
        nameInfo: "André Leroux",
        birthdayDate: "né le 14/09/1968",
        sexeInfo: "Masculin",
        heightInfo: "1m65",
        typeInfo: "Fournisseur"
      },
      {
        imageInfo: "/assets/img/IMG_3143.JPG",
        nameInfo: "Jules Tellier",
        birthdayDate: "31/03/1998",
        sexeInfo: "Masculin",
        heightInfo: "1m85",
        typeInfo: "Client"
      },
      {
        imageInfo: "",
        nameInfo: "Mathilde Monet",
        birthdayDate: "15/12/1985",
        sexeInfo: "Féminin",
        heightInfo: "1m68",
        typeInfo: "Cliente"
      },
      {
        imageInfo: "",
        nameInfo: "Fred Pluton",
        birthdayDate: "24/04/1964",
        sexeInfo: "Masculin",
        heightInfo: "1m78",
        typeInfo: "Fournisseur"
      },
      {
        imageInfo: "",
        nameInfo: "Elsa Gael",
        birthdayDate: "06/09/1996",
        sexeInfo: "Féminin",
        heightInfo: "1m70",
        typeInfo: "Fournisseuse"
      },
      {
        imageInfo: "",
        nameInfo: "Vorian",
        birthdayDate: "12 année Azan",
        sexeInfo: "??",
        heightInfo: "2m05",
        typeInfo: "Fournisseur"
      },
    ]
  }

}
