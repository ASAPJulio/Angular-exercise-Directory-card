import { DatePipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { ContactModel } from 'src/contact.model';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
})
export class ListContactsComponent implements OnInit {

  contactTab!: ContactModel[];

   ngOnInit(): void {

    this.contactTab = [
      {
        imageInfo: "/assets/img/fournisseur.png",
        nameInfo: "André",
        lastNameInfo: "Leroux", 
        birthdayDate: new Date (1964, 9, 14),
        sexeInfo: "Masculin",
        heightInfo: "1m65",
        typeInfo: "Fournisseur"
      },
      {
        imageInfo: "/assets/img/IMG_3143.JPG",
        nameInfo: "Jules",
        lastNameInfo: "Tellier",
        birthdayDate: new Date (1998, 2, 31),
        sexeInfo: "Masculin",
        heightInfo: "1m85",
        typeInfo: "Client"
      },
      {
        imageInfo: "/assets/img/Liza.jpg",
        nameInfo: "Liza",
        lastNameInfo: "Monet",
        birthdayDate: new Date (1990, 12, 15),
        sexeInfo: "Féminin",
        heightInfo: "1m68",
        typeInfo: "Cliente"
      },
      {
        imageInfo: "/assets/img/Greg.jpg",
        nameInfo: "Greg",
        lastNameInfo: "Allo",
        birthdayDate: new Date (1984, 9, 24) ,
        sexeInfo: "Masculin",
        heightInfo: "1m78",
        typeInfo: "Fournisseur"
      },
      {
        imageInfo: "/assets/img/perso1.png",
        nameInfo: "Lorie",
        lastNameInfo: "Gael",
        birthdayDate: new Date (1996, 6, 9),
        sexeInfo: "Féminin",
        heightInfo: "1m70",
        typeInfo: "Fournisseuse"
      },
      {
        imageInfo: "/assets/img/alien.jpg",
        nameInfo: "Vorian",
        lastNameInfo: "Gulgu",
        birthdayDate: new Date (1710, 8, 17),
        sexeInfo: "??",
        heightInfo: "2m05",
        typeInfo: "Visiteu.r.se"
      },
    ]
  }

}
