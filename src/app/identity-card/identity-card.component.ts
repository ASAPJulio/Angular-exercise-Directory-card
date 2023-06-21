import { Component, Input} from '@angular/core';
import { ContactModel } from 'src/contact.model';

@Component({
  selector: 'app-identity-card',
  templateUrl: './identity-card.component.html',
  styleUrls: ['./identity-card.component.css']
})

export class IdentityCardComponent { 

 @Input() contactType!: ContactModel;

  title = 'AnnuaireAngular';
}
