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
        birthdayDate: "14/09/1968",
        sexeInfo: "Masculin",
        heightInfo: "1m65",
        typeInfo: "Fournisseur"
      },
      {
        imageInfo: "/assets/img/IMG_3143.JPG",
        nameInfo: "Jules",
        lastNameInfo: "Tellier",
        birthdayDate: "31/03/1998",
        sexeInfo: "Masculin",
        heightInfo: "1m85",
        typeInfo: "Client"
      },
      {
        imageInfo: "/assets/img/Liza.jpg",
        nameInfo: "Liza",
        lastNameInfo: "Monet",
        birthdayDate: "15/12/1985",
        sexeInfo: "Féminin",
        heightInfo: "1m68",
        typeInfo: "Cliente"
      },
      {
        imageInfo: "/assets/img/Greg.jpg",
        nameInfo: "Greg",
        lastNameInfo: "Allo",
        birthdayDate: "24/04/1964",
        sexeInfo: "Masculin",
        heightInfo: "1m78",
        typeInfo: "Fournisseur"
      },
      {
        imageInfo: "/assets/img/perso1.png",
        nameInfo: "Lorie",
        lastNameInfo: "Gael",
        birthdayDate: "06/09/1996",
        sexeInfo: "Féminin",
        heightInfo: "1m70",
        typeInfo: "Fournisseuse"
      },
      {
        imageInfo: "/assets/img/alien.jpg",
        nameInfo: "Vorian",
        lastNameInfo: "Gulgu",
        birthdayDate: "12 année Azan",
        sexeInfo: "??",
        heightInfo: "2m05",
        typeInfo: "Visiteu.r.se"
      },
    ]
  }

}
