import { Component, Input, OnInit } from '@angular/core';
import { ContactModel } from 'src/contact.model';
import { ContactService } from 'src/service/contact.service';

@Component({
  selector: 'app-identity-card',
  templateUrl: './identity-card.component.html',
  styleUrls: ['./identity-card.component.css']
})

export class IdentityCardComponent implements OnInit {

  constructor(private tmpContactService: ContactService) { }

  @Input() contactType!: ContactModel;

  ngOnInit(): void {
    if (!this.contactType.imageInfo) {
      this.contactType.imageInfo = "/assets/img/no-pic.jpg"
    };

    if (this.contactType.typeInfo !== 'Client' &&
      this.contactType.typeInfo !== 'Cliente' &&
      this.contactType.typeInfo !== 'Fournisseur' &&
      this.contactType.typeInfo !== 'Fournisseuse' &&
      this.contactType.typeInfo !== 'Visiteu.r.se') {
      this.contactType.typeInfo = "Type Inconnu";
    }
  }

  title = 'AnnuaireAngular';
}
