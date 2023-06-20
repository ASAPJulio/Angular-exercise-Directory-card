import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/contact.model';

@Component({
  selector: 'app-identity-card',
  templateUrl: './identity-card.component.html',
  styleUrls: ['./identity-card.component.css']
})
export class IdentityCardComponent implements OnInit {
  contactType!: ContactModel;
  ngOnInit(): void {
    this.contactType = new ContactModel();
    this.contactType.imageInfo = "/assets/img/IMG_3143.JPG";
    this.contactType.nameInfo = "Jules Tellier"
    this.contactType.birthdayDate = "né le 31/03/1998";
    this.contactType.sexeInfo = "Masculin";
    this.contactType.heightInfo = "1m94";
    
    if (!this.contactType.imageInfo) {
      this.contactType.imageInfo = "/assets/img/ob_233a89_lescamerasplanqueesd-preview.jpg";
    }
  }
  
  title = 'AnnuaireAngular';
}
