import { Injectable } from '@angular/core';
import { ContactModel } from 'src/contact.model';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  
    contactTab: ContactModel[] = [
      {
        imageInfo: "/assets/img/fournisseur.png",
        nameInfo: "André",
        lastNameInfo: "Leroux",
        birthdayDate: new Date(1964, 9, 14),
        sexeInfo: "Masculin",
        heightInfo: "1m65",
        typeInfo: "Fournisseur",
        item: 0
      },
      {
        imageInfo: "/assets/img/IMG_3143.JPG",
        nameInfo: "Jules",
        lastNameInfo: "Tellier",
        birthdayDate: new Date(1998, 2, 31),
        sexeInfo: "Masculin",
        heightInfo: "1m85",
        typeInfo: "Client",
        item: 1
      },
      {
        imageInfo: "/assets/img/Liza.jpg",
        nameInfo: "Liza",
        lastNameInfo: "Monet",
        birthdayDate: new Date(1990, 12, 15),
        sexeInfo: "Féminin",
        heightInfo: "1m68",
        typeInfo: "Cliente",
        item: 2
      },
      {
        imageInfo: "/assets/img/Greg.jpg",
        nameInfo: "Greg",
        lastNameInfo: "Allo",
        birthdayDate: new Date(1984, 9, 24),
        sexeInfo: "Masculin",
        heightInfo: "1m78",
        typeInfo: "Fournisseur",
        item: 3
      },
      {
        imageInfo: "/assets/img/perso1.png",
        nameInfo: "Lorie",
        lastNameInfo: "Gael",
        birthdayDate: new Date(1996, 6, 9),
        sexeInfo: "Féminin",
        heightInfo: "1m70",
        typeInfo: "Fournisseuse",
        item: 4
      },
      {
        imageInfo: "/assets/img/alien.jpg",
        nameInfo: "Vorian",
        lastNameInfo: "Gulgu",
        birthdayDate: new Date(1710, 8, 17),
        sexeInfo: "??",
        heightInfo: "2m05",
        typeInfo: "Visiteu.r.se",
        item: 5
      },
    ]

    getContacts(): ContactModel[] {
      return this.contactTab;
    }
    
    getDetails(item: number): ContactModel{
      for (let i = 0; i < this.contactTab.length; i++) {
        if (this.contactTab[i].item === item)
              return this.contactTab[i];
      }
      return new ContactModel();
    }

    checkPhotoUrl(url: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = url;
        });
      }
  };

 
